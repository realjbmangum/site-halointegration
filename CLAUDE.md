# site-halointegration

Marketing site for Halo Integration, a low voltage and digital infrastructure
contractor working nationally from a Texas base. Verticals: multi-family,
hospitality, enterprise.

This is a client site. Copy changes are the client's call, not ours. Technical
and structural changes are ours.

## Stack

- Next.js 16, App Router, **static export** (`output: 'export'` in `next.config.mjs`)
- React 18, Tailwind 4, framer-motion, Radix primitives, lucide icons, Geist fonts
- Cloudflare Pages, project name `halointegration`, output dir `out`
- Contact form posts to Formspree. There is no backend and no database.

```bash
npm run dev     # local
npm run build   # static export into out/
```

## Deploying

**Cloudflare Pages builds from `main` on push.** Merging a PR deploys. Do not
run `wrangler pages deploy` by hand; production goes through GitHub and a PR.

`public/_redirects` is a Cloudflare Pages file and only takes effect once
deployed. It currently holds 301s for the removed `/redesign/*` tree.

## Traps worth knowing before you touch anything

### 1. A `"use client"` page cannot export `metadata`

This is the single most expensive thing to rediscover. In the App Router a
client component **cannot** export `metadata`; Next silently falls back to the
root layout. Seven pages once shared one title and description for exactly
this reason, and adding a `metadata` export to them does nothing at all.

The pattern in this repo: a server `page.tsx` that owns the metadata and
renders a `page-client.tsx` that owns the animation. Follow it for any new
page that needs motion.

```
app/(main)/about/page.tsx          server, exports metadata + JSON-LD
app/(main)/about/page-client.tsx   "use client", the actual UI
```

### 2. `components/redesign/` IS the live site

The naming is misleading. A redesign was built alongside the old site and
promoted to live in March 2026, but the folder kept its name. The homepage,
navigation and footer all import from `components/redesign/`. Do not delete
it and do not treat it as a draft.

The *route* tree `app/redesign/` was a crawlable duplicate of the whole site
and has been deleted. Its stylesheet survives as **`app/brand.css`**, which
the root layout imports and which defines every brand token and utility
(`.glass-card`, `.text-gradient`, `.grid-pattern`, the accent colours). The
pre-redesign component tree (`components/home/`, `components/about/`, etc.)
was orphaned and is also deleted.

### 3. `lib/site.ts` is the only place contact details may live

Name, address, phone and email. Local search ranking depends on those strings
being byte-identical everywhere they appear, and this repo previously carried
two different addresses and two different mailboxes. Import `BUSINESS`; never
retype a detail into a component.

### 4. Every page goes through `pageMetadata()`

`lib/seo.ts` exports `pageMetadata()`, which produces the title, description,
**canonical**, Open Graph and Twitter tags. A page that skips it inherits the
root layout and silently duplicates another page's metadata. Keep titles at or
under 60 characters including the ` | Halo Integration` suffix the helper
appends. The root layout deliberately has **no** `title.template`, because the
helper already adds the brand and a template would double it.

Structured data helpers live beside it: `organizationSchema()` (emitted once in
the root layout), `serviceSchema()`, `breadcrumbSchema()`, `faqSchema()`.
Render them with `<JsonLd data={...} />`.

### 5. The seven service pages are one dynamic route

`app/(main)/services/[service]/page.tsx`, with content in `lib/services.ts` and
presentation in `components/services/service-detail.tsx`. Adding a service
means adding an entry to `SERVICES`; the page, the sitemap and the footer pick
it up.

Five **static** sibling routes also live under `/services/` (see below). Static
segments win over the dynamic one, so a new service slug that collides with one
of those names would be silently shadowed. Check before naming one.

### 6. Images ship exactly as they sit on disk

`images: { unoptimized: true }` is required by static export, so there is no
Next image pipeline. Nothing resizes or re-encodes for you.

`public/` was 55 MB when this was last audited: service heroes at 2 to 3 MB
each saved near-lossless, project photos at 1600px for a 400px card, a 14 MB
byte-for-byte duplicate asset directory, and two zip archives being served
publicly. It is now 6 MB.

Before committing any image: check the dimensions against where it renders, and
re-encode. `sips -Z <maxpx> -s format jpeg -s formatOptions 82 in.jpg --out out.jpg`
is what was used here and holds up well.

## Content rules

**Do not assert a capability, certification, vendor partnership or volume claim
that the business does not already publish.** This is not a style preference.
Service page copy feeds `Service` and `FAQPage` structured data, so an invented
claim becomes a public machine-readable assertion about the client's business.

A first draft of `lib/services.ts` broke this: it named vendor partnerships that
do not appear in the live partner marquee, and asserted specific technical
procedures and a claim about the company's work mix, none of it published
anywhere. If you need a specific claim, ask the client and note where it is
published.

**Write alt text from the image, not from the filename.** Several alt strings
here once described images that do not exist, because the filenames were
plausible. Open the file and look at it. Several service images are AI-generated
stock with garbled text in them, so the filename is a poor guide.

**No em dashes anywhere in site copy.**

## Current state of `/services/`

Seven real service pages, indexable, each with Service, BreadcrumbList and
FAQPage schema:

```
structured-cabling  network-wifi  video-surveillance  access-control
voip-phone-systems  audio-video   prop-tech-consulting
```

Five pre-redesign pages, **`noindex, follow` and absent from the sitemap**:

```
multi-family  hospitality  enterprise  digital-solutions  infrastructure-consulting
```

They are noindexed for two reasons, both unresolved:

1. They style with light-theme shadcn tokens (`text-foreground`, `bg-secondary`)
   inside a dark layout, so their H1 renders near-black on near-black and is
   effectively invisible. Render one before assuming otherwise.
2. Four of the five advertise services the business does not sell: custom
   software development, mobile apps, cloud migration, revenue management,
   resident portals. They are unedited starter-template defaults that shipped
   and were never rewritten.

The standing recommendation is to delete `digital-solutions` and
`infrastructure-consulting`, which the real service pages now cover, and rewrite
the three audience pages in the dark theme as pages that link down into the
service pages. Until then, leave the noindex in place.

## SEO baseline

A full audit with evidence is committed at **`docs/seo-audit-2026-10-09.html`**.
It is self-contained and opens from disk. Read it before any SEO work rather
than re-deriving the state of things.

The on-site foundation is in place. The binding constraint is off-site: the
business has essentially no citations, directory listings or inbound links, and
no Google Business Profile was found. Technical work on this repo cannot fix
that.

## Conventions

- Deliverables for the site owner are self-contained `.html` files committed to
  `docs/`: inline CSS, no CDN, no webfonts, no external scripts. They must
  render from a `file://` URL with the wifi off.
- Mobile-first. The phone layout is designed, not shrunk.
- Accessibility is a floor: real labels on icon-only controls, AA contrast,
  visible focus states.
- The git history is the log. Put the reasoning, the wrong assumption and what
  broke in the commit body, written for someone reading it cold in six months.
  Commit bodies are public: no personal names, no email addresses, no dollar
  amounts.
