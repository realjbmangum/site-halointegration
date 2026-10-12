import Link from "next/link"
import { pageMetadata, breadcrumbSchema } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"
import { BUSINESS } from "@/lib/site"

/**
 * Privacy notice.
 *
 * Written from an audit of what the site actually does, not from a template:
 * the nine contact form fields, Formspree as the form processor, Cloudflare
 * as the host, the Google Maps iframe on /contact/, the youtube-nocookie
 * iframes on /videos/, and the Meta Pixel being added for advertising
 * measurement. If any of those change, this page changes with them.
 *
 * Contact details come from BUSINESS so they cannot drift from the rest of
 * the site, which is the same reason lib/site.ts exists.
 */

const LAST_UPDATED = "12 October 2026"

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Halo Integration collects, uses and shares information from this website, who it is shared with, and how to request access to or deletion of your data.",
  path: "/privacy",
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">{title}</h2>
      <div className="space-y-4 text-white/70 leading-relaxed">{children}</div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }])} />
      <main className="bg-[#0a0a0f]">
        <section className="relative pt-32 pb-12 sm:pt-40 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-[0.15]" aria-hidden="true" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5] rounded-sm"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white" aria-current="page">
                  Privacy Policy
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/55">Last updated {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="pb-20 border-t border-white/5 pt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-lg text-white/75 leading-relaxed mb-10">
                This page explains what information {BUSINESS.name} collects through this website,
                why, who it is shared with, and what you can ask us to do about it. It covers this
                website only, not information you give us during a project.
              </p>

              <Section title="Who we are">
                <p>
                  {BUSINESS.name} is a low voltage and digital infrastructure contractor based at{" "}
                  {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}. We
                  are the business responsible for the information described here.
                </p>
                <p>
                  For anything on this page, contact{" "}
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-[#00ffd5] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5] rounded-sm"
                  >
                    {BUSINESS.email}
                  </a>{" "}
                  or {BUSINESS.phoneDisplay}.
                </p>
              </Section>

              <Section title="What we collect">
                <p>
                  <strong className="text-white">Information you give us.</strong> If you submit the
                  contact form, we receive your first and last name, email address, phone number,
                  company name, property type, city, state, and whatever you write in the message
                  field. Nothing on that form is required by us beyond what we need to reply.
                </p>
                <p>
                  <strong className="text-white">Information collected automatically.</strong> Like
                  most websites, our host records standard technical information when you visit:
                  your IP address, browser and device type, the pages you request, and the time of
                  the request. This is used to serve the site and to protect it from abuse.
                </p>
                <p>
                  We do not ask for payment details, government identifiers or any sensitive
                  category of personal information on this website.
                </p>
              </Section>

              <Section title="How we use it">
                <p>
                  Contact form submissions are used to respond to your enquiry and to discuss and
                  deliver work you ask us about. Technical information is used to operate and secure
                  the site. Advertising and measurement information, described below, is used to
                  understand whether our advertising reaches the right people.
                </p>
                <p>
                  We do not sell your personal information for money, and we do not send marketing
                  email to people who have not asked for it.
                </p>
              </Section>

              <Section title="Who we share it with">
                <p>We use a small number of service providers, and each receives only what it needs:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-white/30">
                  <li>
                    <strong className="text-white">Formspree</strong> processes contact form
                    submissions and delivers them to us by email.
                  </li>
                  <li>
                    <strong className="text-white">Cloudflare</strong> hosts and delivers this
                    website, and records the technical information described above.
                  </li>
                  <li>
                    <strong className="text-white">Google</strong> receives a request from your
                    browser when a page containing an embedded Google Map or an embedded YouTube
                    video loads. Our video embeds use YouTube&apos;s no-cookie domain, which limits
                    but does not remove this.
                  </li>
                  <li>
                    <strong className="text-white">Meta</strong> receives information about visits
                    to this site through an advertising pixel, described in the next section.
                  </li>
                </ul>
                <p>
                  We may also disclose information where the law requires it, or to establish or
                  defend a legal claim.
                </p>
              </Section>

              <Section title="Cookies, advertising and measurement">
                <p>
                  This site uses the Meta Pixel so we can measure whether our advertising is
                  working: how many people who saw an advert visited the site, and how many of
                  those submitted the contact form. This involves cookies and similar technology,
                  and it means Meta receives information about your visit and may match it to a
                  Meta account.
                </p>
                <p>
                  Under Texas law this counts as targeted advertising, and you can tell us to stop.
                  See the next section. You can also limit this through your Meta account settings
                  and through your browser&apos;s cookie controls.
                </p>
                <p>
                  Embedded Google Maps and YouTube content may also set cookies when those parts of
                  a page load. We do not use analytics cookies of our own.
                </p>
              </Section>

              <Section title="Your rights">
                <p>
                  Depending on where you live, and in Texas under the Texas Data Privacy and
                  Security Act, you can ask us to:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-white/30">
                  <li>Confirm whether we hold personal information about you, and give you a copy.</li>
                  <li>Correct information that is wrong.</li>
                  <li>Delete information we hold about you.</li>
                  <li>Stop using your information for targeted advertising.</li>
                </ul>
                <p>
                  Email{" "}
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-[#00ffd5] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ffd5] rounded-sm"
                  >
                    {BUSINESS.email}
                  </a>{" "}
                  and say what you want us to do. We will respond within 45 days. There is no charge,
                  and we will not treat you differently for asking. If we refuse, we will say why,
                  and you can ask us to review that decision.
                </p>
              </Section>

              <Section title="How long we keep it">
                <p>
                  We keep contact form submissions for as long as we are in conversation with you
                  and for a reasonable period afterwards, in case you come back to us. Technical
                  logs are kept for a short period by our host. Ask us to delete your information
                  and we will, unless we are required to keep it.
                </p>
              </Section>

              <Section title="Children">
                <p>
                  This site is for business customers. It is not directed at children and we do not
                  knowingly collect information from anyone under 18.
                </p>
              </Section>

              <Section title="Changes to this page">
                <p>
                  If we change what we collect or who we share it with, we will update this page and
                  the date at the top. This version is dated {LAST_UPDATED}.
                </p>
              </Section>

              <div className="mt-12 pt-8 border-t border-white/5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#00ffd5] font-medium hover:gap-3 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffd5]"
                >
                  Questions about any of this? Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
