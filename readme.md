# 🎴 HinaFlix Backend API

Welcome to the **HinaFlix Backend API**, a lightweight Express.js server for managing custom anime cover images that override AniList data in your frontend.

This backend reads from and writes to a `customImages.json` file, allowing you to replace selected anime covers with your own custom ones (e.g. from TMDB or personal uploads).

---

## 🌐 Live API

> Deployed on Railway (example):

```
https://hinaflix-api.up.railway.app/custom-images
```

---

## 📁 Project Structure

```
hinaflix-backend/
├── server.js               ← Express server
├── customImages.json       ← Image override data (animeId: imageURL)
├── package.json
└── README.md
```

---

## 🛠️ Features

- 📡 Simple Express.js REST API
- 📦 JSON-based persistent data storage (no DB required)
- 🔄 Endpoints to view, add, update, delete custom images
- ⚙️ Ready for deployment on Railway

---

## 🧪 API Endpoints

| Method | Endpoint             | Description                       |
| ------ | -------------------- | --------------------------------- |
| GET    | `/`                  | Base route - status check         |
| GET    | `/custom-images`     | Get all custom image mappings     |
| POST   | `/custom-images`     | Add or update a custom image      |
| DELETE | `/custom-images/:id` | Remove a custom image by anime ID |

---

## 📥 Example JSON (`customImages.json`)

```json
{
  "21519": "https://image.tmdb.org/t/p/original/wbOHvH1sNUr5kjLG2Nxox8Hg1eu.jpg",
  "16498": "https://image.tmdb.org/t/p/original/8D8JkivJqxhNSnHiDvxF3LgS06T.jpg"
}
```

---

## ▶️ Run Locally

1. **Clone this repo**:

```bash
git clone https://github.com/YOUR_USERNAME/hinaflix-backend.git
cd hinaflix-backend
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start the server**:

```bash
node server.js
```

Open in browser:  
→ [http://localhost:4000/custom-images](http://localhost:4000/custom-images)

---

## 🚀 Deploy on Railway

1. Push this folder to GitHub
2. Go to [https://railway.app](https://railway.app)
3. Create new project → Deploy from GitHub
4. Set Start Command: `node server.js`

Done! Your backend will be live with a public API URL ✨

---

## 💖 Credits

- API idea & structure: Haruki × Hina
- TMDB images used for visual override
- Built with love using Node.js & Express

---

## 🛡️ License

This project is for educational and demo purposes.  
Do not use copyrighted anime images commercially without permission.
