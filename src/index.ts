import express from "express"
import postRoutes from "@routes/posts"

const app = express()

app.use("/api/posts", postRoutes)

app.listen(3000, () => {
  console.log(`Server started at PORT 3000...`)
})
