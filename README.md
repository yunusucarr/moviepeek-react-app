# 🎬 MoviePeek

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)

**MoviePeek** is a modern movie discovery application built with React and Vite.
Users can easily discover popular, top-rated, and upcoming movies.

---

## 🚀 Features

- 🎥 List popular, top-rated, and upcoming movies
- 🌗 Dark / light theme mode (DarkMode component)
- ⭐ Filtering and sorting by rating (FilterGroup component)
- ⚡ Fast Vite development environment
- 🧩 React component-based architecture
- 💻 Modern, responsive design

---

## 🛠️ Tech Stack

- **React** — UI Components
- **Vite** — Fast development and build tool
- **JavaScript (ES6+)**
- **CSS3**
- **The Movie Database (TMDB) API**

---

## 📂 Project Folder Structure

```

MoviePeek/
├── public/
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── DarkMode/
│   │   │   ├── DarkMode.jsx
│   │   │   └── DarkMode.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── MovieList/
│   │       ├── MovieList.jsx
│   │       ├── MovieList.css
│   │       ├── MovieCard.jsx
│   │       └── FilterGroup.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
└── README.md

````

---

## ⚙️ Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yunusucarr/moviepeek-react-app.git](https://github.com/yunusucarr/moviepeek-react-app.git)
    ```

2.  **Navigate to the project directory**
    ```bash
    cd moviepeek
    ```

3.  **Install necessary dependencies**
    ```bash
    npm install
    ```

4.  **Set Up API Key (Very Important!)**

    Create a new file named `.env` in the project's root directory. Paste your API key from TMDB into it in the following format:
    ```
    VITE_API_KEY=YOUR_TMDB_API_KEY_HERE
    ```
    *(The `VITE_` prefix is mandatory for the project to work with Vite.)*

5.  **Run the project**
    ```bash
    npm run dev
    ```

---

## 🧠 Components

### 🧭 Navbar

Contains the navigation bar and the dark mode button.

### 🌗 DarkMode

Saves the user's theme preference (dark / light) in `localStorage`.

### 🎞️ MovieList

Fetches data from the TMDB API, handles filtering and sorting.

### ⭐ FilterGroup

Used to filter movies by rating.

---

## 🖼️ Visuals

Some icons used in the project:

- 🔥 **Fire** — Popular movies
- ⭐ **Star** — Top-rated movies
- 🎉 **Party** — Upcoming movies

---

## 🧑‍💻 Contributing

1.  Fork the repository
2.  Create a new branch (`feature/new-feature`)
3.  Make your changes and commit them
4.  Send a pull request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 💬 Developer

**💻 Made with ❤️ by [Yunus](https://github.com/yunusucarr)**