-- Run this in the Supabase SQL editor to create the Mini Audit leads table.

create table if not exists public.mini_audit_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  company_name text not null,
  version text not null check (version in ('law_firm', 'general')),
  answers jsonb not null,
  result_category text not null
);

create index if not exists mini_audit_leads_created_at_idx
  on public.mini_audit_leads (created_at desc);

-- Prefer inserting via the service role key from the Next.js API route.
-- If you use the anon key instead, enable insert for anon carefully:
-- alter table public.mini_audit_leads enable row level security;
-- create policy "Allow insert mini_audit_leads"
--   on public.mini_audit_leads for insert
--   to anon
--   with check (true);
