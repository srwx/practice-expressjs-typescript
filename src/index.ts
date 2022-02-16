// External modules
import express from "express"
// Routes
import postRoutes from "@routes/posts.router"

const app = express()

app.use(express.json()) // Get request body as object (Use req.body in POST, PUT methods)

/**
 * API Routes
 */
app.use("/api/posts", postRoutes)

app.listen(3000, () => {
  console.log(`Server started at PORT 3000...`)
})
