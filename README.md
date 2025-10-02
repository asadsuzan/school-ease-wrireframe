## 🚀 Folder Tree

app/
├─ (public)/ # Public-facing routes
│ ├─ layout.tsx # Public layout (e.g., landing, docs, pricing)
│ ├─ page.tsx # Landing page
│ ├─ about/page.tsx
│ ├─ pricing/page.tsx
│
├─ (auth)/ # Authentication routes
│ ├─ layout.tsx # Auth layout (login/register/reset password)
│ ├─ login/page.tsx
│ ├─ register/page.tsx
│ ├─ reset-password/page.tsx
│
├─ (dashboard)/ # Private (authenticated) area
│ ├─ layout.tsx # Dashboard layout (sidebar, header)
│ ├─ page.tsx # Dashboard home
│ ├─ settings/page.tsx
│ ├─ users/page.tsx
│
├─ api/ # Next.js API routes (serverless)
│ ├─ auth/route.ts # e.g. login/logout API
│ ├─ users/route.ts
│
├─ layout.tsx # Root layout (global providers, html, body)
├─ page.tsx # Default home page
│
components/ # Reusable UI components
├─ ui/ # Generic components (buttons, modals, inputs)
├─ layout/ # Layout parts (navbar, sidebar, footer)
├─ forms/ # Form components (login form, register form)
│
lib/ # Core logic (non-UI utilities)
├─ auth.ts # Authentication helpers
├─ api.ts # API client (axios/fetch wrapper)
├─ validation.ts # Zod/yup validation schemas
│
hooks/ # Custom React hooks
├─ useAuth.ts # Hook for user auth state
├─ useMediaQuery.ts # Hook for responsiveness
│
context/ # React context providers
├─ AuthContext.tsx
│
types/ # TypeScript types/interfaces
├─ user.ts
├─ api.ts
│
store/ # State management (Zustand/Redux/Recoil)
├─ userStore.ts
│
styles/ # Global styles, Tailwind configs, themes
├─ globals.css
├─ variables.css
│
public/ # Static assets
├─ images/
├─ icons/
├─ fonts/
│
tests/ # Unit/integration tests
├─ components/
├─ pages/
├─ utils/
