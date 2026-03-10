const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateOwnBlog,
  deleteOwnBlog,
} = require("../controllers/blog.controller");

router.post("/", authMiddleware, createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);
router.put("/:id", authMiddleware, updateOwnBlog);
router.delete("/:id", authMiddleware, deleteOwnBlog);

module.exports = router;