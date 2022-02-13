interface Post {
  id: number
  title: string
  content: string
}

interface User {
  username: string
  password: string
  age: number
  languages: string[]
}

const posts: Post[] = [
  {
    id: 1,
    title: "JavaScript",
    content: "JavaScript is great function to start learning web api.",
  },
  {
    id: 2,
    title: "Python",
    content: "Python can do everything!",
  },
  {
    id: 3,
    title: "Java",
    content: "God of OOP.",
  },
]

const users: User[] = [
  {
    username: "user1",
    password: "forTest",
    age: 21,
    languages: ["JavaScript", "Go", "Python"],
  },
  {
    username: "user2",
    password: "forTest",
    age: 30,
    languages: ["C", "C#", "C++"],
  },
  {
    username: "user3",
    password: "forTest",
    age: 21,
    languages: ["C", "Java", "Python"],
  },
]

export { posts, users }
