import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.send("GET all post")
})

router.get("/:postId", (req, res) => {
  res.send(`GET post ID: ${req.params.postId}`)
})

router.post("/", (req, res) => {
  res.send("POST post")
})

export default router
