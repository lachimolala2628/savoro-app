# 🍔 Savoro

A full-stack food posting reel application where food partners can upload reels showcasing their special dishes, and users can explore, like, save, and view food partner profiles. Built with a modern frontend and a scalable backend architecture.

---

## 🚀 Features

- 🎥 Food Reels Feed – Watch short food reels posted by food partners
- ❤️ Like Reels – Users can like their favorite food reels
- 🔖 Save Reels – Save reels for later viewing
- 👤 Food Partner Profiles – Visit and explore food partner profiles
- 🔐 Authentication – Secure login and signup using JWT & cookies
- 📸 Image & Media Upload – Optimized media uploads with ImageKit
- 📱 Responsive UI – Works smoothly across all devices

---

## 🛠️ Tech Stack

**Frontend**

- JavaScript
- React.js
- Vite
- CSS
- Axios

**Backend**

- Node.js
- Express.js
- MongoDB (Mongoose)
- uuid
- dotenv
- cors
- bcryptjs
- JWT (JSON Web Tokens)
- cookie-parser
- Imagekit
- multer

---

## 📦 Installation

- Clone the repository

```bash
git clone https://github.com/lachimolala2628/savoro-app.git
npm install
```

---

## 🛠️ Usage

- Navigate to the project directory

```bash 
cd savoro-app
```

- Install frontend dependencies

```bash
cd frontend
npm install
```

- Install backend dependencies

```bash
cd ../backend
npm install
```

- Environment Variables

Create a .env file in the backend directory and add:

```bash
JWT_SECRET=YOUR_JWT_SECRET
MONGODB_URI=YOUR_MONGODB_URI
IMAGEKIT_PUBLIC_KEY=IMAGEKIT_PUBLIC_KEY
IMAGEKIT_PRIVATE_KEY=IMAGEKIT_PRIVATE_KEY
IMAGEKIT_URL_ENDPOINT=IMAGEKIT_URL_ENDPOINT
```

- Run the application

Start the backend server

```bash
npx nodemon
```

Start the frontend server

```bash
npm run dev
```

---

## 👋🏻 Author

**Ayush Kumar**
Frontend Developer with a focus on clean, scalable, and reliable web applications.