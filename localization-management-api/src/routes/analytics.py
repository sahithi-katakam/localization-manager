
from fastapi import APIRouter
from supabase import create_client
import os

router = APIRouter()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

@router.get("/analytics")
async def get_translation_completion():
    response = supabase.table("translations").select("translations").execute()
    rows = response.data

    if not rows:
        return {}

    counts = {}
    total_keys = len(rows)

    for row in rows:
        for lang, data in row["translations"].items():
            if lang not in counts:
                counts[lang] = 0
            if data.get("value"):
                counts[lang] += 1

    percentages = {
        lang: round((count / total_keys) * 100)
        for lang, count in counts.items()
    }

    return percentages
