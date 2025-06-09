# Localization Manager – Take-Home Assignment

This project is a full-stack localization management tool that allows users to view, search, and edit translation keys in multiple languages.

---

## 📁 Project Structure

localization-manager/
├── localization-management-api # FastAPI backend
└── localization-management-frontend # Next.js frontend


---

## 🚀 Features

### Frontend (Next.js + TypeScript)
- `TranslationKeyManager` displays translation keys and values.
- Inline editing with `TranslationEditor`.
- Zustand store manages UI state (search, key updates).
- React Query handles fetching and mutations with cache invalidation.
- Frontend test added for `TranslationKeyManager`.

### Backend (FastAPI)
- Endpoint to fetch translation keys from Supabase.
- Endpoint to update a specific translation value.
- ✅ New: `/analytics/completion` endpoint returns translation completion stats.
- Uses Python Supabase client.
- Unit tests added with `pytest`.

---

## 🔧 Setup Instructions

### 🟦 Supabase

1. Create a free Supabase project.
2. Create a `translations` table with columns:
   - `id` (UUID, Primary Key)
   - `key` (text)
   - `category` (text)
   - `description` (text)
   - `translations` (JSONB)

3. Sample insert:

```sql
insert into translations (id, key, category, description, translations) values (
  '36ff92ec-91e6-476a-b98e-df4b4d762ce6',
  'button.save',
  'buttons',
  'Save button text',
  '{
    "en": { "value": "Save", "updatedBy": "admin", "updatedAt": "2024-01-01T00:00:00Z" },
    "fr": { "value": "Sauvegarder", "updatedBy": "admin", "updatedAt": "2024-01-01T00:00:00Z" }
  }'
);

#Backend Setup

cd localization-management-api
poetry install
poetry shell
uvicorn main:app --reload

Create a .env file in the root of the API project:

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-service-role-key

Run tests:
Pytest

Frontend Setup
cd localization-management-frontend
npm install

Create .env.local in the frontend root:
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000

Start the app:
npm run dev

Access it at http://localhost:3000

Run frontend tests:
npm test

Analytics Endpoint:
GET /analytics/completion

Response:
{
  "total_keys": 10,
  "completion": {
    "en": 90.0,
    "fr": 80.0
  }
}
