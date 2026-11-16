# Jali Mama

Jali Mama is a React/Vite frontend with an Express API for maternal and child
health education.

## Architecture

```text
Browser (React Router)
  ├─ Landing page and account-form previews
  ├─ Dashboard feature pages
  ├─ Pregnancy date estimate (in-memory, not saved)
  └─ AI assistant
        └─ Frontend API service
             └─ POST /api/ai/chat
                  └─ Express route → controller validation
                       → AI service → configured Gemini model
```

The backend currently has no database, user accounts, authentication, or
health-record persistence. Dashboard routes are therefore not protected. Do
not enter real personal or health data. The pregnancy calculator only holds
its input in page state. AI questions are sent to the configured AI provider
and are not saved by this application.

## Requirements and setup

Use a supported Node.js version and pnpm (lockfiles are provided per app).

### Backend

1. Copy `Backend/.env.example` to `Backend/.env`.
2. Set `GEMINI_API_KEY` and a model available to your Google AI account.
   `OVERPASS_API_URLS` and `NOMINATIM_API_URL` default to the public
   OpenStreetMap services shown in `Backend/.env.example`. Overpass URLs are
   comma-separated and tried in order. For production, follow the services'
   usage policies and consider operating a managed provider or local data
   mirror.
3. Install and start the API:

   ```powershell
   cd Backend
   pnpm install
   pnpm dev
   ```

The API listens on port `5000` by default. `CLIENT_URL` controls the allowed
browser origin. Never commit `.env` or expose provider credentials in the
frontend.

### Frontend

1. Optionally copy `Frontend/.env.example` to `Frontend/.env` and set
   `VITE_API_BASE_URL` if the API is not at `http://localhost:5000`.
2. Start the development server:

   ```powershell
   cd Frontend
   pnpm install
   pnpm dev
   ```

## API

### `GET /`

Returns an API health response.

### `POST /api/ai/chat`

Request:

```json
{ "message": "What questions should I ask at an antenatal visit?" }
```

The message must contain 1–2,000 non-whitespace characters. Successful
responses use `{ "success": true, "message": "...", "data": { "reply": "..." } }`.
Validation, unavailable-provider, and unknown-route responses use
`{ "success": false, "message": "...", "data": null }`.

The assistant provides general education only; it is not a diagnostic tool or
a substitute for professional care.

## Validation

```powershell
cd Frontend
pnpm test
pnpm lint
pnpm build

cd ..\Backend
pnpm test
```

## Not production-ready

Registration, login, password recovery, authorization, user profiles,
pregnancy/child records, appointments, reminders, and immunisation records are
not connected to backend services. The related pages do not simulate
successful persistence.
Before handling real health data, implement and test server-side
authentication, per-user authorization, a reviewed data model and migrations,
privacy/consent controls, rate limiting, operational monitoring, and
clinically reviewed content. No regulatory compliance claim is made.
