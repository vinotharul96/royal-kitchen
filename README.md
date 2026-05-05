# 👑 Royal Kitchen

A premium full-stack food ordering and management system.

## 🚀 One-Click Deployment

Deploy the entire stack with ease using the buttons below.

### 1. Backend (API & Database)
Deploy your Express backend to Render. Note: You will need to provide your `MONGO_URL` in the environment variables during setup.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/vinotharul96/royal-kitchen)

### 2. Frontend (Customer App)
Deploy the Vite React frontend to Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/vinotharul96/royal-kitchen)

### 3. Admin Panel
Deploy the management dashboard to Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/vinotharul96/royal-kitchen)

---

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Framer Motion, Bootstrap
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Admin**: React, Vite, Axios
- **Hosting**: Netlify & Render

## ⚙️ Configuration
Make sure to set the following Environment Variables:

### Backend
- `MONGO_URL`: Your MongoDB connection string.
- `PORT`: 5000 (default).

### Frontend / Admin
- `VITE_API_URL`: The URL of your deployed backend (e.g., `https://royal-kitchen-backend.onrender.com`).
