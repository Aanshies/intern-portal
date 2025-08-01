# 🚀 Intern Portal — A Full Stack Dashboard

**Intern Portal** is a simple, yet robust full-stack application designed as an internal dashboard for interns. It showcases a user's key information, including referral code and donations raised, while also featuring a leaderboard.

---

## ✨ Features

- 🔐 **Dummy Authentication:** A simple login/signup page with no real authentication logic, using state to simulate user login.
- 📋 **Intern Dashboard:** A clean, responsive dashboard displaying an intern's name, referral code, total donations raised, and a list of rewards.
- 🏆 **Dynamic Leaderboard:** A leaderboard table that fetches data from the backend to display top performers.
- 🎨 **Modern UI:** Built with React, providing a dynamic and responsive user experience.
- 📡 **RESTful API:** A simple Node.js + Express backend that serves dummy intern data via a REST API.

---

## 🖼️ App Screenshots

<img width="1056" height="714" alt="Image" src="https://github.com/user-attachments/assets/d8883d0c-f6e3-4e05-b430-b229867a19b8" />
<img width="1898" height="959" alt="Image" src="https://github.com/user-attachments/assets/4b052f2f-897b-490a-a8fa-0a00ee14de32" />

---

## 🛠️ Tech Stack

| Part         | Tech Used                            |
|--------------|--------------------------------------|
| **Frontend** | React, Vite, HTML, CSS               |
| **Backend**  | Node.js, Express.js                  |
| **API**      | REST API                             |
| **Hosting**  | Netlify (Frontend), Render (Backend) |

---

## 🚀 Getting Started Locally

To run this project on your local machine, you will need to start both the backend and the frontend separately.

### 📦 1. Clone the Repositories

First, clone both the backend and frontend repositories:

```bash
git clone [intern-portal-backend](https://github.com/Aanshies/intern-portal/tree/main/intern-portal-backend)
git clone [YOUR_FRONTEND_REPO_URL](https://github.com/Aanshies/intern-portal/tree/main/intern-portal-frontend)
```

### ☕ 2. Run the Backend

Navigate to your backend directory and start the server:

```bash
cd intern-portal-backend
npm install
npm start
```
The backend will be running at http://localhost:5000.

### ⚛️ 3. Run the Frontend

Navigate to your frontend directory. Before running, make sure you update the API URL in src/App.jsx to point to your local backend.

```bash
// In src/App.jsx
// Change this line back to the local URL
const response = await fetch('http://localhost:5000/api/intern-data');
```

Now, install dependencies and run the frontend:

```bash
cd intern-portal-frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:5173.

---

## 🌐 Upcoming Enhancements

✅ Implement real user authentication with a database (e.g., MongoDB).

✅ Add dynamic data entry for donations and other user-specific data.

✅ Create an admin dashboard to manage intern accounts.

✅ Improve UI/UX with more interactive elements.

---

## 🤝 Contributing

Contributions, feature suggestions, and issue reports are welcome! Fork the repository, make your changes, and open a pull request.

---

## 🪪 License

MIT License © 2025

