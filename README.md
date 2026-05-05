# Prashant Kumar — Personal Portfolio

A full-stack personal portfolio built with **React + TypeScript** on the frontend and **FastAPI** on the backend. Features animated sections, a 3D project card flip, live contact form with email delivery, and a competitive programming stats section.

> Live at [prashantkumar.com](https://prashantkumar.com)

---

## Tech Stack

| Layer     | Tech                                      |
|-----------|-------------------------------------------|
| Frontend  | React 19, TypeScript, Vite, Tailwind CSS, Framer Motion |
| Backend   | FastAPI, Uvicorn, SlowAPI (rate limiting) |
| Email     | SMTP via python-dotenv secrets            |
| Deploy    | Vercel (frontend) · Render (backend)      |

---

## Project Structure

```
Personal_Portfolio/
├── frontend/          # Vite + React app
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   └── styles/
│   └── vercel.json
└── backend/           # FastAPI app
    ├── main.py
    ├── routers/
    ├── services/
    └── render.yaml
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate      # Windows
pip install -r requirements.txt
```

Create `backend/.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
TO_EMAIL=your@gmail.com
FRONTEND_URL=https://prashantkumar.com
```

```bash
uvicorn main:app --reload
```

---

## Deployment

- **Frontend** → Vercel (`/frontend` as root, `npm run build`)
- **Backend** → Render (uses `render.yaml` in `/backend`)
- **Domain** → `prashantkumar.com` via GoDaddy → Vercel DNS

---

## License

MIT — feel free to fork and use as your own portfolio template.
