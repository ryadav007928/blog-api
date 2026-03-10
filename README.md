# Blog API (Node.js)

This is a simple Blog API built using **Node.js, Express.js and MongoDB**.

The API allows users to register, login and manage blog posts.

---

## Features

- User Registration
- User Login (JWT Authentication)
- Create Blog Post
- Get All Blog Posts
- Get Single Blog Post
- Update Own Blog Post
- Delete Own Blog Post
- Pagination
- Search blog by title

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcrypt (Password hashing)

---


## Installation

1. Clone the project


git clone https://github.com/your-repo/blog-api.git


2. Install dependencies


npm install


3. Create `.env` file


PORT=5000
MONGO_URI=mongodb+srv://ryadav007:DuY6QcYbwe.uCKj@cluster0.rj77i.mongodb.net/blog
JWT_SECRET=e09ec5066838d8852002903e4df69a729e4d885d

4. Run the server


npm start


Server will run on:


http://localhost:5000


---

## API Endpoints

### Auth APIs

Register user


POST /api/auth/register


Login user


POST /api/auth/login


---

### Blog APIs

Create blog


POST /api/blogs


Get all blogs


GET /api/blogs?page=1


Get single blog


GET /api/blogs/:id


Update blog


PUT /api/blogs/:id


Delete blog


DELETE /api/blogs/:id


---

## Authorization

Protected routes require JWT token.

Example header:


Authorization: Bearer YOUR_TOKEN


---

## Example Blog Request


POST /api/blogs


Body:


{
"title": "My First Blog",
"content": "This is my first blog post",
"tags": ["nodejs","backend"]
}


---

## Author

Rohit Yadav