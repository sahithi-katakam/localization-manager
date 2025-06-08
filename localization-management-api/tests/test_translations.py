from fastapi.testclient import TestClient
from localization_management_api.main import app

client = TestClient(app)

# Replace this with your actual existing ID from Supabase
VALID_ID = "36ff92ec-91e6-476a-b98e-df4b4d762ce6"

def test_get_all_translations():
    response = client.get("/translations")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_translation_by_valid_id():
    response = client.get(f"/translations/{VALID_ID}")
    assert response.status_code == 200
    assert "id" in response.json()
    assert response.json()["id"] == VALID_ID

def test_get_translation_by_invalid_id():
    # Use a valid UUID that doesn't exist instead of an invalid UUID format
    invalid_id = "00000000-0000-0000-0000-000000000000"
    response = client.get(f"/translations/{invalid_id}")
    assert response.status_code == 404
    assert response.json()["detail"] == "Translation not found"

def test_bulk_update_valid():
    payload = [
        {
            "id": VALID_ID,
            "value": "Updated via test ✅",
            "updated_by": "test_user",
            "updated_at": "2024-01-01T00:00:00Z"
        }
    ]
    response = client.put("/translations/bulk-update", json=payload)
    assert response.status_code == 200
    assert response.json()["message"] == "Bulk update successful"

def test_bulk_update_invalid():
    # Use a valid but non-existent UUID to avoid UUID syntax error
    payload = [
        {
            "id": "00000000-0000-0000-0000-000000000000",
            "value": "Test Fail",
            "updated_by": "tester",
            "updated_at": "2024-01-01T00:00:00Z"
        }
    ]
    response = client.put("/translations/bulk-update", json=payload)
    assert response.status_code == 400
    assert "detail" in response.json()
