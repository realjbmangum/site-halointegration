import type { ProjectCategory } from "./projects"

/**
 * The three audience pages under /services/.
 *
 * These replace pre-redesign pages that were unedited starter-template
 * defaults: they advertised resident portals, PMS integration, revenue
 * management, cloud migration and data centre solutions, none of which the
 * business sells. They also rendered light-theme text on the dark layout and
 * were effectively invisible.
 *
 * CONTENT RULE, same as lib/services.ts and enforced by nothing but care:
 *
 * 1. Describe method and approach, not track record. Write "a multi-site
 *    scope starts with", never "the same standard at every site". The second
 *    asserts work that has been done.
 * 2. Only answer an FAQ "Yes" when the published site or the project list
 *    evidences it. These answers ship inside FAQPage structured data, so an
 *    overstatement becomes a machine-readable claim about the client.
 * 3. No outcome promises ("passes inspection", "works on the first try") and
 *    no volume claims about the business's overall mix. The project list is a
 *    published selection, not the whole book.
 *
 * A first draft of this file broke all three, most sharply on Enterprise,
 * which has no completed projects behind it and had the strongest claims on
 * the site. If you are tempted to add a specific claim, confirm it with the
 * client and note where it is published.
 *
 * The `summary` strings are the client's own industry descriptions, lifted
 * verbatim from the industries section of /services/. Do not edit them here.
 */

export type AudienceContent = {
  slug: string
  name: string
  /** Used in prose where "a enterprise project" would read wrong. */
  article: "a" | "an"
  /** Matches ProjectCategory so completed work can be filtered in. */
  projectCategory: ProjectCategory
  title: string
  /** Meta description. Aim 150 to 160 characters. */
  description: string
  h1: string
  lede: string
  /** The client's published description of this vertical, verbatim. */
  summary: string
  intro: string[]
  /** What tends to matter on this type of property. */
  priorities: { title: string; description: string }[]
  /** Service slugs, in the order this audience usually buys them. */
  services: string[]
  faqs: { q: string; a: string }[]
}

export const AUDIENCES: AudienceContent[] = [
  {
    slug: "multi-family",
    name: "Multi-Family",
    article: "a",
    projectCategory: "Multi-Family",
    title: "Multi-Family Technology Infrastructure",
    description:
      "Technology infrastructure for apartment communities: structured cabling, property-wide Wi-Fi, access control and video surveillance, new builds and retrofits.",
    h1: "Technology Infrastructure for Multi-Family",
    lede: "One contractor for the cabling, the network, the cameras and the doors.",
    summary:
      "Built-to-scale infrastructure and integrated technology systems that enhance resident experience, streamline operations, and protect long-term asset value.",
    intro: [
      "An apartment community buys technology twice: once during construction, when it is cheap, and again every time something was left out and has to be retrofitted through finished walls. The difference between those two costs is usually a decision made before the risers were drawn.",
      "We survey, design, install and certify the systems a community runs on, then hand over documentation the on-site team can use. Multi-family is the largest category in our completed project list, which is published in full below.",
    ],
    priorities: [
      {
        title: "Coverage designed, not estimated",
        description:
          "Wireless planned from a survey rather than a unit count, because wall density and device load decide real coverage and neither is visible on a floor plan.",
      },
      {
        title: "Credentials that can be revoked remotely",
        description:
          "Mobile access across units, gates, package rooms and amenity spaces, so turnover does not depend on collecting fobs back.",
      },
      {
        title: "Infrastructure sized for what comes next",
        description:
          "Cabling and pathways specified for the systems a community adds later, not only for the one being installed this month.",
      },
      {
        title: "Documentation the site team can use",
        description:
          "Port maps, labelling and as-builts handed over, so a fault at 7am is a lookup rather than an investigation.",
      },
    ],
    services: [
      "structured-cabling",
      "network-wifi",
      "access-control",
      "video-surveillance",
      "prop-tech-consulting",
      "audio-video",
    ],
    faqs: [
      {
        q: "Do you work on new construction, existing properties, or both?",
        a: "Both. On new construction the work is coordinating pathways, sleeves and rough-in against the general contractor's schedule, then returning for trim and termination. On an existing property it starts with a survey and field validation pass, because what is already installed rarely matches its documentation.",
      },
      {
        q: "Can you work across more than one community?",
        a: "Yes. Where more than one property is in scope, the design stage sets a common build standard, so racks, labelling and port schemes are the same at each one and the documentation reads the same way. Ask us about scope across several properties and we will tell you what that changes.",
      },
      {
        q: "Who administers the systems after handover?",
        a: "Your team. Closeout documentation and administrator training are part of the deliverable rather than an add-on, and the intent is that operating the system does not depend on us. How licensing is held varies by platform, so confirm it per system during design.",
      },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    article: "a",
    projectCategory: "Hospitality",
    title: "Hotel & Hospitality Technology",
    description:
      "Guest and back-of-house technology for hotels: guest Wi-Fi, structured cabling, video surveillance, access control, AV and VoIP phone systems.",
    h1: "Technology for Hotels and Hospitality",
    lede: "Guest-facing systems and the back-of-house infrastructure that holds them up.",
    summary:
      "Future-ready infrastructure and guest-facing technology solutions designed to optimize operations, elevate the guest journey, and support brand standards.",
    intro: [
      "In hospitality the technology is part of the product. A guest who cannot get onto the Wi-Fi in their room has had a bad stay regardless of everything else the property did well, and that complaint reaches a review site rather than the front desk.",
      "We install the infrastructure behind the guest experience and the operation: cabling and fiber through guest floors and back-of-house, property-wide wireless, surveillance, access control, AV in meeting and amenity space, and phones. Completed hotel projects are listed below.",
    ],
    priorities: [
      {
        title: "Coverage planned for occupied rooms",
        description:
          "Wireless designed against the device load of a full house rather than an empty corridor on commissioning day.",
      },
      {
        title: "A phased plan rather than a single cutover",
        description:
          "Where a property is operating, the survey stage establishes what can be done in occupied space and what needs rooms out of service, and the schedule is built from that.",
      },
      {
        title: "Scope written against the brand standard",
        description:
          "Where the flag publishes a standard, bring it into the survey stage so the scope is written against it rather than measured against it afterwards.",
      },
      {
        title: "One contractor across the trades",
        description:
          "Cabling, wireless, cameras, doors, AV and phones in one scope, which removes the gaps that open up between separate vendors.",
      },
    ],
    services: [
      "network-wifi",
      "structured-cabling",
      "video-surveillance",
      "access-control",
      "audio-video",
      "voip-phone-systems",
    ],
    faqs: [
      {
        q: "How do you handle work on a property that is still operating?",
        a: "By phasing it. The survey and field validation stage establishes what can be done in occupied space and what needs rooms or a floor out of service, and the schedule is built around that with daily updates on what is finished and what is next. How much can be done without taking rooms down depends on the property, which is what the survey is for.",
      },
      {
        q: "Can you work to a brand standard?",
        a: "Yes, when the standard is provided at the survey stage so the scope can be written against it. Closeout documentation, including certified test results for cabling, is prepared as part of the handover and is what evidences the installed work.",
      },
      {
        q: "Does this cover meeting and event space as well as guest rooms?",
        a: "Yes. Meeting and amenity space usually needs AV and distributed audio on top of the cabling and wireless. Scoping it alongside the guest floors means the pathways are specified once, before they are closed up.",
      },
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    article: "an",
    projectCategory: "Enterprise",
    title: "Enterprise Technology Infrastructure",
    description:
      "Low voltage and network infrastructure for enterprise facilities: structured cabling, switching, Wi-Fi, surveillance, access control and VoIP phones.",
    h1: "Enterprise Technology Infrastructure",
    lede: "Infrastructure specified, installed and documented so it can be supported rather than rediscovered.",
    summary:
      "Secure, scalable infrastructure and integrated systems that support mission-critical operations, compliance, and long-term performance.",
    intro: [
      "Enterprise infrastructure tends to fail on inconsistency rather than on technology. Where each location was cabled by a different contractor to a different standard, nothing can be supported centrally and every fault becomes a site visit.",
      "Our approach is to settle the standard before anything is installed: topology, rack layout, labelling and port schemes agreed at the design stage, then built to and documented as built. The five stages below are the same ones every project runs through, and the deliverables are the same.",
    ],
    priorities: [
      {
        title: "A build standard agreed up front",
        description:
          "Rack layout, labelling and port schemes settled at design and published as build sheets, so support does not depend on who happened to install a given room.",
      },
      {
        title: "Segmentation planned into the design",
        description:
          "Guidance on separating staff, guest and building systems traffic, so a camera or a controller is not sharing a broadcast domain with the business.",
      },
      {
        title: "Central administration where the platform allows it",
        description:
          "Cloud video platforms support multi-site administration and role-based access from one place. Scope it in design, because it depends on the platform chosen.",
      },
      {
        title: "Evidence, not assurances",
        description:
          "Certified copper and fiber test results, as-built drawings and closeout documentation handed over rather than summarised.",
      },
    ],
    services: [
      "structured-cabling",
      "network-wifi",
      "access-control",
      "video-surveillance",
      "voip-phone-systems",
      "audio-video",
    ],
    faqs: [
      {
        q: "How would a scope covering several locations work?",
        a: "The design stage does the heavy lifting. Topology diagrams, build sheets, port maps and cable schedules are produced first, so each site is built to the same documented standard rather than to whatever the crew on that site decided. Talk to us about the locations in scope and we will tell you what the design stage needs to cover.",
      },
      {
        q: "Do you coordinate with our existing IT team or provider?",
        a: "Yes. The consulting stage covers requirements, carrier and demarc planning, security and segmentation guidance and a phased cutover plan, all of which has to be agreed with whoever runs the network day to day.",
      },
      {
        q: "What do you hand over at the end?",
        a: "Certified copper and fiber test results, topology diagrams, MDF and IDF build sheets, port maps and cable schedules, as-built drawings and warranty coordination. The point is that the next person to touch it does not need us.",
      },
    ],
  },
]

/**
 * Throws rather than returning undefined. These pages are built from a fixed
 * list, so an unknown slug is a programming error that should fail the build
 * with a message naming the slug, not a confusing undefined-property error.
 */
export function getAudience(slug: string): AudienceContent {
  const audience = AUDIENCES.find((a) => a.slug === slug)
  if (!audience) {
    throw new Error(
      `Unknown audience slug "${slug}". Known slugs: ${AUDIENCES.map((a) => a.slug).join(", ")}`,
    )
  }
  return audience
}
