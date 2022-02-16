// External module
import { v4 as uuidv4 } from "uuid"
// Data
import { posts } from "@data/posts/posts.data"
// Data interface
import { BasePost, Post } from "@data/posts/posts.interface"

/**
 * Service methods
 */
export const findAllPosts = () => posts // get all posts

// get specific post with id
export const findPostWithId = (postId: string) =>
  posts.find((post) => post.id === postId)

// get specific post(s) with author
export const findPostsWithAuthor = (author: string) =>
  posts.filter((post) => post.author === author)

// get specific post(s) with category
export const findPostsWithCategories = (categories: string[]) => {
  const results: Post[] = []
  /* Brute force (Find intersec in two arrays) */
  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < posts[i].category.length; j++) {
      if (categories.includes(posts[i].category[j])) {
        results.push(posts[i])
        break
      }
    }
  }
  return results
}

// function use to check is this argument is a BasePost?
const isBasePost = (value: any): value is BasePost => "title" in value

// create post
export const createPost = (newPost: BasePost) => {
  if (isBasePost(newPost)) {
    posts.push({ id: uuidv4(), ...newPost })
  } else {
    throw new Error("Input isn't Post.")
  }
}

// edit post
export const editPost = (id: string, updatePost: BasePost) => {
  if (isBasePost(updatePost)) {
    const index = posts.findIndex((post) => post.id === id)
    if (index !== -1) {
      posts[index] = {
        id,
        ...updatePost,
      }
    } else {
      throw new Error("Can't find this post")
    }
  } else {
    throw new Error("Input isn't Post.")
  }
}

// delete post
export const deletePost = (id: string) => {
  const index = posts.findIndex((post) => post.id === id)
  if (index !== -1) {
    posts.splice(index, 1)
  } else {
    throw new Error("Can't find this post")
  }
}
