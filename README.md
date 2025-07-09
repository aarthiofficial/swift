# 🧾 Comments Dashboard - React Assignment

This is a front-end assignment project for building a **Dashboard App** using dummy data APIs. The app showcases profile data, a comments table with custom pagination, sorting, searching, and state persistence—all built using React.

---

## 🚀 Features

### 🔹 Profile Screen
- Displays the **first user record** (non-editable) from the dummy users API.
- Includes a **"Back to Dashboard"** button.
- Routed via `react-router-dom`.

### 🔹 Comments Dashboard
- Loads 500 records from the comments API.
- Fully custom **pagination** (page sizes: 10, 50, 100).
- **Partial search** on Name, Email, and Comment.
- **Sorting** on Post ID, Name, and Email with cycling mode (None → Asc → Desc).
- State persistence using `localStorage`:
  - Search text
  - Page number
  - Page size
  - Sort state

---

## 📦 Tech Stack

- React.js
- React Router DOM
- Plain JavaScript (no pagination/sorting libraries)
- CSS / Tailwind CSS (optional)
- `localStorage` for persistence

---

## 🔧 Getting Started

### 1. Clone the Repository

git clone https://github.com/yourusername/comments-dashboard.git
cd comments-dashboard
2. Install Dependencies
npm install
3. Run the App
npm run dev   # for Vite
# or
npm start     # for Create React App
4. Build (Optional)
npm run build
🔗 APIs Used
Users API: https://jsonplaceholder.typicode.com/users

Comments API: https://jsonplaceholder.typicode.com/comments

📁 Project Structure

src/
├── components/
│   ├── DataTable.jsx
│   ├── Pagination.jsx
│   └── SearchBar.jsx
├── pages/
│   ├── Dashboard.jsx
│   └── Profile.jsx
├── routes/
│   └── AppRoutes.jsx
├── services/
│   └── api.js
├── utils/
│   └── storageUtils.js
├── App.jsx
└── main.jsx
📌 Notes
This project was built as part of an internship assignment.

The main focus is on core logic, UI/UX, and React principles without relying on heavy libraries.
