// External modules
import { Request, Response } from "express"
// Services
import * as postService from "@services/posts.service"
import { BasePost } from "@data/posts/posts.interface"

export const getAllPosts = (req: Request, res: Response) => {
  try {
    const postsList = postService.findAllPosts()
    res.status(200).json({ success: true, postsList })
  } catch (err) {
    res.status(404).json({ success: false })
  }
}

export const getPostWithId = (req: Request, res: Response) => {
  try {
    const { postId } = req.params
    const post = postService.findPostWithId(postId)
    res.status(200).json({ success: true, post })
  } catch (err) {
    res.status(404).json({ success: false })
  }
}

export const createPost = (req: Request<{}, {}, BasePost>, res: Response) => {
  try {
    const newPost = req.body
    postService.createPost(newPost)
    res.status(200).json({ success: true })
  } catch (err) {
    res.status(404).json({ message: err.message }) /* What is type for error?*/
  }
}

export const updatePost = (
  req: Request<{ postId: string }, {}, BasePost>,
  res: Response
) => {
  try {
    const { postId } = req.params
    const newPost = req.body
    postService.editPost(postId, newPost)
    res.status(200).json({ success: true })
  } catch (err) {
    res.status(404).json({ message: err.message }) /* What is type for error?*/
  }
}

export const deletePost = (req: Request, res: Response) => {
  try {
    const { postId } = req.params
    postService.deletePost(postId)
    res.status(200).json({ success: true })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
