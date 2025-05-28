# 📝 TODO List Web Application (MERN Stack)

Welcome to the **TODO List Web Application** — a full-stack task management tool built using the powerful **MERN** stack. Seamlessly manage your tasks with features like adding, editing, and deleting, all backed by a robust and scalable backend.

---

## 🚀 Features

- ✅ **Add Tasks**: Easily add new tasks to stay organized.
- 📝 **Edit Tasks**: Update existing tasks any time.
- ❌ **Delete Tasks**: Remove completed or unwanted tasks.
- 🌙 **Dark Mode**: Toggle between light and dark themes.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **HTML5 + CSS3**
- **JavaScript (ES6+)**
- **Axios**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose ODM)

---

## 📦 Installation

Follow the steps below to run the application locally:

### 1. Clone the repository

```bash
git clone https://github.com/Denistanb/TODO-List.git
cd TODO-List
```

### 2. Set up the Backend

```bash
cd backend
npm install
```
Create a .env file inside the backend/ folder and add:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Start the backend server
```bash
npm run dev
```

### 3. Set up the Frontend 

```bash
cd ../frontend
npm install
```
Start the frontend development server
```bash
npm run dev
```

Visit http://localhost:5173/ in your browser
