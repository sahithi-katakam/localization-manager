from fastapi import FastAPI
from routes import translations
from src.routes import analytics  # ⬅️ ADD THIS

app = FastAPI()

# Register your router
app.include_router(translations.router)

app.include_router(analytics.router)  # ⬅️ ADD THIS too

## (Optional) Keep this if you want a sample endpoint
@app.get("/localizations/{project_id}/{locale}")
async def get_localizations(project_id: str, locale: str):
    return {
        "project_id": project_id,
        "locale": locale,
        "localizations": {
            "greeting": "Hello",
            "farewell": "Goodbye"
        }
    }

