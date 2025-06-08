
from fastapi import FastAPI
from routes import translations  # Adjust if your routes file is elsewhere
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS middleware so frontend can call this
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include your router
app.include_router(translations.router)
