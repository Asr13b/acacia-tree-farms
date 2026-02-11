Acacia Tree Farms
Web Skeleton and Integration Hub
React + Vite Application

Live Demo
https://accia.netlify.app/

────────────────────────────────────────────

About the Project

Acacia Tree Farms is a modern frontend platform designed as the official digital presence for AcaciaTreeFarms.com.

The system focuses on three core pillars

🌿 Corporate Social Responsibility
🔗 Blockchain Traceability (ACX)
☕ Green Coffee Marketplace

This repository provides a clean, scalable React skeleton that acts as the frontend shell and is ready to connect with backend APIs and blockchain services.

The goal is simplicity, performance, and professional brand quality.

────────────────────────────────────────────

Technology Stack

⚡ Framework → React 18 with Vite
🎨 Styling → Tailwind CSS (responsive and mobile-first)
🧩 Icons → Lucide React
🛣 Routing → React Router DOM (SPA architecture)
🚀 Deployment → Netlify with GitHub CI/CD

Fast loading, lightweight, optimized for regions with slower internet speeds (Ethiopia friendly).

────────────────────────────────────────────

Project Structure

src/pages
Contains the main views
Home
CSR
Blockchain
Marketplace

src/components
Reusable UI components
Includes BlockchainFrame for traceability display

src/services
API configuration and backend connection logic

Clean separation makes integration simple for any backend team.

────────────────────────────────────────────

Integration Guide

This project is built plug-and-play for backend developers.

Traditional Backend
Marketplace and CSR data

Developer → X
Connection → REST API

Steps
Update src/services/api.js with backend base URL
Replace static coffee data inside Marketplace.jsx with API responses
Map JSON data to existing UI cards

Blockchain Integration
ACX Traceability

Developer → Y
Connection → Web3 or Blockchain Provider

Steps
Use BlockchainFrame.jsx
Pass two props

verified → boolean
transactionHash → string

The component automatically renders the branded verification UI.

────────────────────────────────────────────

Setup and Installation

Clone repository

git clone https://github.com/Asr13b/acacia-tree-farms.git

Install dependencies

npm install

Run development server

npm run dev

Build for production

npm run build

────────────────────────────────────────────

Brand Specifications

Primary Color → #3B2322 (Deep Coffee Brown)
Typography → Modern Sans-serif
Design → Clean, minimal, professional
Performance → Optimized assets for low bandwidth environments

────────────────────────────────────────────

Key Features

Responsive mobile-first design
Reusable component architecture
Easy backend replacement
Blockchain ready
SEO friendly structure
Fast load times
Clean professional UI

────────────────────────────────────────────

Contact

Asrar Fedlu Kedir
Full-Stack Developer
Frontend Architecture • API Integration • Security-Focused Engineering

GitHub
https://github.com/Asr13b

────────────────────────────────────────────
