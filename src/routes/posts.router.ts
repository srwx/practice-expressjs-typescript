// External modules
import express from "express"
const router = express.Router()
// Controllers
import * as postController from "@controllers/posts.controller"

router.get("/", postController.getAllPosts)
router.get("/:postId", postController.getPostWithId)
router.post("/", postController.createPost)
router.put("/:postId", postController.updatePost)
router.delete("/:postId", postController.deletePost)

export default router
