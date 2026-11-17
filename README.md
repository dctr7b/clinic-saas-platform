# Clinic SaaS Platform

SaaS multi-clinic management platform for doctors and medical facilities in Egypt.

## Features
- Clinic sign-up flow with specialty selection
- Admin approval and manual subscription activation
- 14-day trial period with suspension after expiration
- Patient management
- Appointment scheduling
- Invoices and billing
- Dashboard for clinic decisions
- Arabic-first UX

## Stack
- Next.js 14
- React
- TypeScript
- Express API
- Prisma
- PostgreSQL

## Local setup

1. Install dependencies:
   npm install
2. Create a local .env file:
   cp .env.example .env
3. Start the API:
   npm run dev:api
4. Start the web app:
   npm run dev

Then open:
- Web: http://localhost:3000
- API: http://localhost:4000/health

## Project structure

- `apps/web` - frontend
- `apps/api` - backend API
- `prisma` - database schema

## Notes
The project is designed as an MVP and is ready to be extended with real authentication, database access, billing logic, and staff roles.
