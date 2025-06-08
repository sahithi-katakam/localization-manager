from fastapi import APIRouter, HTTPException
from localization_management_api.supabase_client import supabase 
from pydantic import BaseModel
from typing import List
from fastapi import APIRouter
router = APIRouter()

class TranslationUpdate(BaseModel):
    id: str
    value: str
    updated_by: str
    updated_at: str

@router.put("/translations/bulk-update")
def bulk_update_translations(updates: List[TranslationUpdate]):
    errors = []

    for update in updates:
        response = supabase.table("translations").update({
            "value": update.value,
            "updated_by": update.updated_by,
            "updated_at": update.updated_at
        }).eq("id", update.id).execute()
        
        if not response.data:
            errors.append({"id": update.id, "error": "Update failed or ID not found"})

    if errors:
        raise HTTPException(status_code=400, detail=errors)

    return {"message": "Bulk update successful", "updated_count": len(updates)}

@router.get("/translations/{id}")
def get_translation_by_id(id: str):
    try:
        response = supabase.table("translations").select("*").eq("id", id).execute()
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid UUID format")

    if not response.data:
        raise HTTPException(status_code=404, detail="Translation not found")
    return response.data[0]

@router.get("/translations")
def get_translations():
    result = supabase.table("translations").select("*").execute()
    print("DEBUG BACKEND RESPONSE:", result.data) 
    return result.data
