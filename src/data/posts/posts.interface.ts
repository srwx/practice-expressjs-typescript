export interface BasePost {
  title: string
  author: string
  category: string[]
  content: string
}

export interface Post extends BasePost {
  id: string
}
