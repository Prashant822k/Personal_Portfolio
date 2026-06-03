from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.middleware import SlowAPIMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

limiter = Limiter(key_func=get_remote_address)

app = FastAPI(
    title="Prashant Portfolio API",
    description="Contact form backend for Prashant Kumar's portfolio",
    version="1.0.0",
)

app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)

# CORS — allow all origins (public portfolio, no auth/cookies needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import and mount routers
from routers.contact import router as contact_router
app.include_router(contact_router, prefix="/api")


@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "prashant-portfolio-api"}
