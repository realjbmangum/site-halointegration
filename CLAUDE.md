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
deployed. It holds 301s for the removed `/redesign/*` tree and for the two
deleted service pages. Note that a `/*` splat rule does not match the
slashless form of a path, so each one is listed twice.

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

Three **static** sibling routes also live under `/services/` (see below). Static
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

Two layers, and the distinction matters when adding a page.

**Seven service pages**, one per thing the business sells. Dynamic route
`app/(main)/services/[service]/page.tsx`, content in `lib/services.ts`:

```
structured-cabling  network-wifi  video-surveillance  access-control
voip-phone-systems  audio-video   prop-tech-consulting
```

**Three audience pages**, static routes, content in `lib/audiences.ts` and
template in `components/audiences/audience-detail.tsx`:

```
multi-family  hospitality  enterprise
```

An audience page's job is to route, not to duplicate. It states what matters
on that kind of property, links into the service pages that apply, and shows
the completed projects in its own category. It must not restate what a
service is; the service page already does that.

Because the three audience slugs are **static** segments they take precedence
over the dynamic `[service]` route. A new service slug that collides with
`multi-family`, `hospitality` or `enterprise` would be silently shadowed.

`digital-solutions` and `infrastructure-consulting` were deleted in October
2026. They were pre-redesign pages superseded by the real service pages, and
`public/_redirects` 301s them to `structured-cabling` and
`prop-tech-consulting` respectively.

Completed projects live in `lib/projects.ts`, not inside the projects page,
because the audience pages filter them by category. There are currently 12
multi-family and 6 hospitality projects and **no enterprise projects**, which
is why the template omits the projects section entirely rather than rendering
an empty shelf. Do not write copy implying an enterprise track record.

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
