📝 MERN Blog Application

A full-stack Blog Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). Users can create, read, update, and delete blog posts with authentication and a modern UI.

🚀 Features
🔐 User Authentication (JWT-based login/signup)
📝 Create, Edit, Delete Blog Posts
📖 Read all blogs with detailed view
❤️ Like / Comment system (optional if implemented)
🔎 Search & Filter blogs
🌙 Responsive UI with modern design (Tailwind CSS / custom styling)
⚡ Fast and optimized API handling
📊 Scalable backend structure
🛠️ Tech Stack
Frontend
React.js (with Hooks)
Axios
Tailwind CSS / CSS Modules
Backend
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
bcrypt (password hashing)
📂 Folder Structure
mern-blog-app/
│
├── client/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/ (optional)
│   │   └── App.js
│
├── server/                # Node backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/mern-blog-app.git
cd mern-blog-app
2️⃣ Setup Backend
cd server
npm install

Create a .env file in /server:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm run dev
3️⃣ Setup Frontend
cd client
npm install
npm start
🔐 Authentication Flow
User registers → password hashed using bcrypt
Login → JWT token generated
Protected routes use middleware for verification
📌 API Endpoints
Auth Routes
POST   /api/auth/register
POST   /api/auth/login
Blog Routes
GET    /api/blogs
GET    /api/blogs/:id
POST   /api/blogs
PUT    /api/blogs/:id
DELETE /api/blogs/:id

🌟 Future Improvements
📌 Rich Text Editor (like Quill.js)
🧑‍🤝‍🧑 User Profiles
🔔 Notifications
📊 Analytics Dashboard
🌐 Deployment (Vercel + Render)
🚀 Deployment
Frontend:
Vercel / Netlify
Backend:
Render / Railway / AWS
🤝 Contributing

Contributions are welcome!

# Fork repo
# Create new branch
git checkout -b feature-name

# Commit changes
git commit -m "Added new feature"

# Push
git push origin feature-name

Live
https://mern-blog-main-jsa8.onrender.com
📜 License

This project is licensed under the MIT License.
