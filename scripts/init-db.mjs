import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL)

await sql`
  CREATE TABLE IF NOT EXISTS reservas (
    id SERIAL PRIMARY KEY,
    cabin TEXT NOT NULL,
    cabin_name TEXT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    nights INTEGER NOT NULL,
    guests INTEGER NOT NULL,
    total INTEGER NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'pendiente',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )
`

const rows = await sql`SELECT COUNT(*)::int AS count FROM reservas`
console.log("[v0] Tabla reservas lista. Registros:", rows[0].count)
