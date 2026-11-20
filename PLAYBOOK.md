# Playbook

## Add one service page
1. Copy `src/content/services/emails.md` to `src/content/services/<slug>.md`.
2. Fill every front-matter field (title 20-70 chars, description 70-160, 2+ goodFor, 3+ checks, 2+ faq). The build fails if the schema is not met.
3. No prices, stats, testimonials, clients or turnaround promises. Any factual claim needs a source link and a "last checked" date, else leave it out.
4. Add a nav link in `src/layouts/Base.astro` if it should be in the header. The sitemap picks it up automatically.
5. `npm run build`, then search src for the em dash and en dash characters, there must be none. CTA wording is always "Request a quote".
6. Commit and push to main. Actions deploys. Confirm with `curl -s -o /dev/null -w '%{http_code}' <url>`.

## Next pages (priority)
1. Resume and LinkedIn profile editing
2. Website copy and landing pages
3. Newsletters
4. Proofreading checklist guide (original, no unsourced stats)
5. AI-draft cleanup: why human review matters (cite sources)
6. Style guide setup for teams
