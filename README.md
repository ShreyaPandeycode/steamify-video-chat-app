# 🎥 Steamify – Real-Time Video Chat & Collaboration Platform

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Realtime-black)
![WebRTC](https://img.shields.io/badge/WebRTC-P2P-orange)
![JWT](https://img.shields.io/badge/JWT-Authentication-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8)
![MIT](https://img.shields.io/badge/License-MIT-green)

</p>

---

# 🚀 Overview

Steamify is a production-ready full-stack real-time communication platform built using **React**, **Node.js**, **Express**, **MongoDB**, **Socket.IO**, and **WebRTC**.

The application enables users to communicate through real-time messaging and high-quality video calls while supporting authentication, screen sharing, recording, language exchange, and collaborative interactions.

The project was built to understand scalable real-time systems, peer-to-peer communication, authentication workflows, and modern frontend architecture.

---

# ✨ Features

## 🔐 Authentication

- JWT Authentication
- Protected Routes
- Secure Login & Registration
- Session Persistence

---

## 💬 Real-Time Messaging

- Instant Messaging
- Typing Indicators
- Emoji Reactions
- Online Status
- Conversation History

---

## 📹 Video Calling

- One-to-One Calls
- Group Video Meetings
- Screen Sharing
- Call Recording
- Audio & Video Controls

---

## 🌍 Language Exchange

- User Profiles
- Language Preferences
- Match Users by Language
- Community Interaction

---

## 🎨 UI & UX

- Responsive Design
- 32 Built-in Themes
- Modern Dashboard
- Mobile Friendly
- Dark Mode Support

---

## ⚡ Performance

- TanStack Query
- Zustand State Management
- Optimized API Calls
- Lazy Loading
- Efficient Rendering

---

# 🏗 Architecture

```text
                    React Frontend
                           │
             TanStack Query + Zustand
                           │
                    REST API / Socket.IO
                           │
                     Express.js Server
                           │
              ┌────────────┴────────────┐
              │                         │
          MongoDB                 Stream Video API
              │                         │
              └────────────┬────────────┘
                           │
                        WebRTC
                    Peer-to-Peer Calls
```

---

# 🛠 Tech Stack

## Frontend

- React
- Tailwind CSS
- TanStack Query
- Zustand

## Backend

- Node.js
- Express.js

## Database

- MongoDB

## Authentication

- JWT

## Realtime

- Socket.IO
- WebRTC
- Stream Video SDK

---

# 📂 Folder Structure

```text
frontend/
backend/

frontend
 ├── src
 ├── components
 ├── hooks
 ├── pages
 ├── services

backend
 ├── controllers
 ├── middleware
 ├── models
 ├── routes
 ├── utils
```

---

# 📸 Screenshots

## Login

(Add Screenshot)

---

## Dashboard

(Add Screenshot)

---

## Chat

(Add Screenshot)

---

## Video Call

(Add Screenshot)

---

## Screen Sharing

(Add Screenshot)

---

# ⚙ Environment Variables

## Backend

```env
PORT=5001

MONGO_URI=

STREAM_API_KEY=

STREAM_API_SECRET=

JWT_SECRET_KEY=

NODE_ENV=development
```

## Frontend

```env
VITE_STREAM_API_KEY=
```

---

# 🚀 Installation

Clone Repository

```bash
git clone https://github.com/ShreyaPandeycode/steamify-video-chat-app.git

cd steamify-video-chat-app
```

---

Install Backend

```bash
cd backend

npm install

npm run dev
```

---

Install Frontend

```bash
cd frontend

npm install

npm run dev
```

---

Open

```
http://localhost:5173
```

---

# 💡 Engineering Challenges

During development I explored several real-world challenges including:

- Managing authenticated Socket.IO connections.
- Handling WebRTC peer negotiation.
- Synchronizing chat and video states.
- Maintaining responsive UI during live communication.
- Managing global application state efficiently.
- Implementing secure JWT authentication.

---

# 📚 Key Learnings

This project helped me understand

- Real-time system architecture
- WebRTC fundamentals
- Peer-to-peer communication
- Event-driven programming
- Authentication workflows
- State management using Zustand
- API optimization with TanStack Query
- Building scalable MERN applications

---

# 🔮 Future Improvements

- AI Meeting Summary
- Speech-to-Text Transcription
- End-to-End Encryption
- File Sharing
- Push Notifications
- Calendar Integration
- AI Noise Suppression
- Meeting Analytics

---

# 👩‍💻 Author

## Shreya Pandey

📧 Email

work.shreya2728@gmail.com

💼 LinkedIn

https://www.linkedin.com/in/shreya-pandey-761779283/

💻 GitHub

https://github.com/ShreyaPandeycode

🌐 Portfolio

https://shreya-pandey-portfolio-7qz2.vercel.app/

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It motivates me to continue building production-grade software projects.
