# 🍔 DevBurguer - Backend API

This repository contains the **Backend RESTful API** for the DevBurguer application. It serves as the single source of truth, handling data persistence, business logic, and secure communication with the frontend via JSON payloads.

## 🚀 Overview
Built with Node.js, this API is structured to be scalable and resilient. It manages the restaurant's operational data, processing requests and ensuring reliable data delivery to the client-side application.

### 🛠️ Built With
* **Node.js & Express**
* **Database:** [PostgreSQL / MongoDB]
* **Docker** (Containerization for consistent environments)
* **CORS** configured for secure cross-origin requests
* **JSON** for structured data exchange

## ⚙️ How to Run Locally

You can run this API using Docker (recommended) or directly via Node.js.

### Prerequisites
* Node.js installed
* Docker installed (optional, but recommended)

### Setup Steps

1. Clone the repository:
   `git clone https://github.com/seu-usuario/devburguer-backend.git`

2. Navigate to the directory:
   `cd devburguer-backend`

3. Install dependencies:
   `npm install`

4. Set up your environment variables:
   Create a `.env` file in the root directory and add the required variables (e.g., `PORT`, `DATABASE_URL`). 

5. Start the server:
   `npm start`
   *(If using Docker, run `docker-compose up -d` to spin up the environment).*

The API will be listening on `http://localhost:3000` (or your configured port).
