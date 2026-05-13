# Digital Reading Hub

A full-stack cloud-based digital reading platform where users can browse books, view details, and read PDFs stored in the cloud.

---

## Live Demo

- Frontend: https://your-vercel-link.vercel.app  
- Backend: https://digital-reading-hub.onrender.com  

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- CSS

### Backend
- Node.js
- Express.js

### Database & Storage
- Supabase (PostgreSQL + Storage)

### DevOps / Deployment
- Vercel (Frontend hosting)
- Render (Backend hosting)
- GitHub (Version control)
- Jenkins (CI pipeline - optional)
- Docker (Containerization - learning purpose)

---

## Features

- Browse books from database
- View book details
- Cloud-based storage for book covers and PDFs
- REST API integration
- Deployed full-stack application
- CI/CD pipeline setup (Jenkins)
- Dockerized development environment

---

## API Endpoints

### Books
- GET `/books` → Get all books
- GET `/books/:id` → Get single book

---

## Setup Instructions

### Backend
```bash
cd backend
npm install
npm start