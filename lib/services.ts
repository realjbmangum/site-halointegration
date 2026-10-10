/**
 * Long-form content for the seven service pages.
 *
 * Content rule for this file: it may restate and expand what the business
 * already publishes on /services/ (the service cards and the five-step
 * process), and it may not assert a capability, certification, vendor
 * partnership or volume claim that does not appear there.
 *
 * A first draft of this file broke that rule. It named Verkada and Eagle Eye
 * as partners (neither appears in the live partner marquee), and asserted
 * fusion splicing, OTDR testing, firestopping and "most of our work is new
 * construction". All were removed. These strings also feed FAQPage and
 * Service structured data, so an unsupported claim here becomes a public
 * machine-readable assertion about someone else's business.
 *
 * Before adding a specific technical or vendor claim, confirm it with the
 * client and note where it is published.
 *
 * These pages exist because the seven things Halo sells are the seven things
 * buyers search for, and until now each was a card on a shared page with no
 * URL of its own.
 */

export type ServiceContent = {
  slug: string
  /** Short label for nav, cards and breadcrumbs. */
  name: string
  /** Schema.org serviceType. */
  schemaName: string
  /** <title>, brand appended automatically. Aim 50 to 60 characters. */
  title: string
  /** Meta description. Aim 150 to 160 characters. */
  description: string
  /** On-page H1. Carries the search term in plain language. */
  h1: string
  /** One-sentence standfirst under the H1. */
  lede: string
  image: string
  imageAlt: string
  /** Opening body copy, one paragraph per entry. */
  intro: string[]
  /** What the service actually includes. */
  includes: { title: string; description: string }[]
  /** Concrete artefacts the client receives. */
  deliverables: string[]
  /** Which audience pages this service is most often bought by. */
  segments: string[]
  faqs: { q: string; a: string }[]
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "structured-cabling",
    name: "Structured Cabling",
    schemaName: "Structured Cabling Installation",
    title: "Structured Cabling & Fiber Installation",
    description:
      "Structured cabling design and installation: Cat6 and Cat6A, fiber backbone, MDF and IDF buildouts, with certification results on every run. Multi-family, hospitality and enterprise.",
    h1: "Structured Cabling and Digital Infrastructure",
    lede: "The cabling plant everything else depends on, designed, installed and certified run by run.",
    image: "/services/digital-infrastructure.jpg",
    imageAlt: "Structured cabling terminated into a rack-mounted patch panel inside a building MDF",
    intro: [
      "Structured cabling is the one system on a property that is expensive to revisit. Every access point, camera, reader, phone and TV eventually lands on it, and a shortcut taken in the pathway or the rack shows up years later as an outage nobody can trace.",
      "Halo Integration designs and installs the whole cabling plant: horizontal copper, fiber backbone between rooms, the MDF and IDF buildouts at either end, and the labelling and documentation that make it supportable after the crew leaves. Every run is tested and the results are handed over, not summarised.",
    ],
    includes: [
      {
        title: "Cat6 and Cat6A horizontal cabling",
        description:
          "Copper to every device location, pulled on validated pathways and terminated to standard. Certified with results recorded per run rather than spot-checked.",
      },
      {
        title: "Fiber optic backbone",
        description:
          "Single and multimode fiber between MDF and IDF rooms, terminated and tested, with results recorded per strand.",
      },
      {
        title: "MDF and IDF buildouts",
        description:
          "Racks, ladder, power, grounding, patch panels and cable management, built from a published build sheet so every room in a portfolio looks the same.",
      },
      {
        title: "Cable management and labelling",
        description:
          "Dressed, supported and labelled to a documented scheme, so the person troubleshooting it in three years can find a run from the port map alone.",
      },
      {
        title: "Pathway and riser work",
        description:
          "Pathways, sleeves and supports coordinated with the general contractor and the other trades on site.",
      },
      {
        title: "As-built documentation",
        description:
          "Topology diagrams, port maps and cable schedules updated to match what was actually installed, which is rarely what was drawn.",
      },
    ],
    deliverables: [
      "Certified test results for every copper and fiber run",
      "Topology diagrams and MDF or IDF build sheets",
      "Port maps and cable schedules",
      "Labelling schedule and as-built drawings",
      "Final bill of materials",
    ],
    segments: ["multi-family", "hospitality", "enterprise"],
    faqs: [
      {
        q: "Do you certify every cable run or sample them?",
        a: "Every run. Copper is certified and fiber is loss tested, and the results are handed over as part of closeout documentation rather than kept as an internal record.",
      },
      {
        q: "Can you work alongside the general contractor on new construction?",
        a: "Yes. New construction means coordinating pathways, sleeves and rough-in against the GC's schedule and the other trades, then returning for trim and termination. It is a large part of the multi-family and hospitality work we do.",
      },
      {
        q: "Will you take over a cabling plant somebody else installed?",
        a: "Yes. That starts with a survey and field validation pass to establish what is actually in place, because an existing plant rarely matches its documentation. You get an as-found route map and a readiness assessment before any scope is priced.",
      },
    ],
  },
  {
    slug: "network-wifi",
    name: "Network & Wi-Fi",
    schemaName: "Network and Wi-Fi Installation",
    title: "Commercial Wi-Fi & Network Installation",
    description:
      "Property-wide Wi-Fi and network infrastructure: site surveys, access point design, switching and performance optimisation for apartments, hotels and enterprise sites.",
    h1: "Network and Wi-Fi Solutions",
    lede: "Coverage designed from a survey rather than guessed from a floor plan, then proven after install.",
    image: "/services/wifi.jpg",
    imageAlt: "Technician on a ladder installing a ceiling-mounted wireless access point",
    intro: [
      "Most bad Wi-Fi on a property was designed by counting rooms. Construction type, wall density, resident device load and interference between units decide actual coverage, and none of that is visible on a drawing.",
      "We survey first, design the access point layout against real conditions, install and configure the switching behind it, then validate coverage once the building is finished. Enterprise-grade wireless that scales, with the design rationale documented so the next change is not another guess.",
    ],
    includes: [
      {
        title: "Wi-Fi site surveys",
        description:
          "Predictive design plus on-site validation, accounting for construction materials, interference and the device density the property will actually carry.",
      },
      {
        title: "Access point design and installation",
        description:
          "AP placement plans, mounting, cabling and tuning across units, corridors, amenity spaces and exterior coverage areas.",
      },
      {
        title: "Switching and network design",
        description:
          "Switch selection, port counts, uplinks, PoE budget and segmentation, specified from the device count rather than a default template.",
      },
      {
        title: "Carrier and demarc coordination",
        description:
          "Planning the handoff with the carrier and the ISP so the circuit lands where the design expects it and the cutover has a date that holds.",
      },
      {
        title: "Network segmentation and security guidance",
        description:
          "Separating resident, guest, staff and building systems traffic, so a camera or a thermostat is not sharing a broadcast domain with residents.",
      },
      {
        title: "Post-install performance validation",
        description:
          "Coverage and throughput verified after construction is complete, with results against the design rather than an assurance that it works.",
      },
    ],
    deliverables: [
      "Predictive and validated wireless heat maps",
      "Access point placement plans",
      "Switch port maps and PoE budget",
      "Segmentation and addressing documentation",
      "Phased cutover plan",
    ],
    segments: ["multi-family", "hospitality", "enterprise"],
    faqs: [
      {
        q: "Do you survey before designing coverage?",
        a: "Yes. A predictive design comes first, then field validation confirms it against the real building. Construction type and wall density change AP counts enough that designing from a floor plan alone is how coverage gaps get built in.",
      },
      {
        q: "Can you deliver property-wide managed Wi-Fi for an apartment community?",
        a: "Yes. That means a building-wide network rather than per-unit service: a fiber backbone, APs through units and common areas, and segmentation separating resident, guest and building systems traffic.",
      },
      {
        q: "Do you handle the internet circuit as well?",
        a: "We coordinate carrier and demarc planning so the circuit lands where the design needs it, and we plan the cutover around it. The circuit itself is contracted with the carrier or ISP.",
      },
    ],
  },
  {
    slug: "video-surveillance",
    name: "Video Surveillance",
    schemaName: "Video Surveillance System Installation",
    title: "Commercial Security Camera Installation",
    description:
      "Smart video surveillance design and installation: cloud video management, AI analytics, multi-site administration and integration with cameras already on the property.",
    h1: "Smart Video Surveillance",
    lede: "Cloud video that an operations team can actually run across a portfolio, not one building at a time.",
    image: "/services/surveillance.jpg",
    imageAlt: "Video management dashboard on a monitor showing camera feeds and event analytics",
    intro: [
      "Surveillance stops being useful at the point where reviewing footage takes a site visit and a password nobody has. The platform matters as much as the cameras, because the value is in retrieving the right clip quickly and proving it to an insurer or a court.",
      "We design and install cloud-managed video surveillance with analytics that surface events instead of burying them, administered across every site in a portfolio from one place. Where usable cameras already exist, we integrate them rather than replacing them.",
    ],
    includes: [
      {
        title: "Cloud-based video management",
        description:
          "Platform selection, licensing and configuration, with retention set to the policy the property or its insurer actually requires.",
      },
      {
        title: "AI-powered analytics",
        description:
          "People and vehicle detection, loitering and line-crossing events, and search that returns a clip rather than a shift of footage to scrub through.",
      },
      {
        title: "Camera design and installation",
        description:
          "Camera selection, placement and field-of-view planning for entries, corridors, amenities, parking and perimeter, then mounted, aimed and cabled.",
      },
      {
        title: "Multi-site management",
        description:
          "One administrative view across a portfolio, with role-based access so regional staff see their sites and corporate sees all of them.",
      },
      {
        title: "Existing camera integration",
        description:
          "Bringing serviceable cameras onto the new platform where the optics still hold up, so the budget goes to coverage gaps instead of replacing working hardware.",
      },
      {
        title: "Licensing and handover",
        description:
          "Platform licensing, camera enrolment and handover to the operations team, so the system is running under your account rather than ours.",
      },
    ],
    deliverables: [
      "Camera placement plans and field-of-view coverage maps",
      "Platform configuration and retention policy",
      "User roles and multi-site administration structure",
      "Operations team handover and training",
      "Closeout documentation and warranty registration",
    ],
    segments: ["multi-family", "hospitality", "enterprise"],
    faqs: [
      {
        q: "Can you use the cameras already installed on the property?",
        a: "Often yes. Existing camera integration is part of the scope where the optics and placement are still serviceable, which keeps budget pointed at coverage gaps rather than at replacing hardware that works.",
      },
      {
        q: "Which surveillance platforms do you install?",
        a: "We work with cloud-managed video platforms rather than a single product line. Platform choice follows the retention, analytics and multi-site requirements rather than the reverse. Ask us which platforms we currently carry.",
      },
      {
        q: "How long is footage retained?",
        a: "Retention is configured to the policy the property or its insurer requires, and it is a licensing and storage decision made during design rather than something discovered after an incident.",
      },
    ],
  },
  {
    slug: "access-control",
    name: "Access Control",
    schemaName: "Access Control System Installation",
    title: "Commercial Access Control Installation",
    description:
      "Cloud access control for apartments, hotels and enterprise buildings: mobile credentials, self-guided tours, occupancy monitoring and identity management integration.",
    h1: "Access Control Systems",
    lede: "Credentials that can be issued and revoked from anywhere, on doors, gates and amenity spaces.",
    image: "/services/access-control.jpg",
    imageAlt: "Phone being used as a mobile credential to unlock a keypad door lock",
    intro: [
      "Access control is where a building's security policy either works or quietly stops working. A system that needs a staff member on site to issue a fob ends up with fobs that are never collected back, and a door that nobody can audit.",
      "We install cloud-based access control for multi-family, hospitality and enterprise buildings: mobile credentials, occupancy visibility, and integration with the identity systems a business already runs, so access reflects who currently belongs there.",
    ],
    includes: [
      {
        title: "Mobile credentials",
        description:
          "Phone-based access issued and revoked remotely, which removes the fob collection problem and gives every entry an auditable identity.",
      },
      {
        title: "Cloud access platforms",
        description:
          "Cloud-managed access platforms, including Brivo, configured and handed over with schedules, groups and door rules documented.",
      },
      {
        title: "Door, gate and amenity access",
        description:
          "Entries, perimeter gates, package rooms, fitness and pool areas, elevators and back-of-house doors, each with hardware suited to its exposure.",
      },
      {
        title: "Self-guided tours",
        description:
          "Credentialed prospect access on a schedule, so leasing can show units without staffing every showing.",
      },
      {
        title: "Occupancy monitoring",
        description:
          "Visibility into which spaces are being used and when, which informs amenity decisions as much as security ones.",
      },
      {
        title: "Identity management integration",
        description:
          "Tying access to the directory a business already maintains, so onboarding and offboarding move credentials without a second process.",
      },
    ],
    deliverables: [
      "Door schedule with hardware and reader specification",
      "Credential, group and access-rule configuration",
      "Integration documentation for identity systems",
      "Administrator training and handover",
      "As-built drawings and warranty coordination",
    ],
    segments: ["multi-family", "hospitality", "enterprise"],
    faqs: [
      {
        q: "Do mobile credentials replace key fobs entirely?",
        a: "They can, and usually should for residents and staff. Fobs and cards remain useful for vendors, contractors and anyone without a suitable phone, and the platforms we install support both on the same door.",
      },
      {
        q: "Can access control tie into our existing user directory?",
        a: "Yes. Identity management integration is part of the scope, so adding or removing someone in the directory moves their building access with them rather than leaving a credential active.",
      },
      {
        q: "Does this cover gates and amenity spaces, or just entry doors?",
        a: "Doors, perimeter gates, package rooms, fitness and pool areas, elevators and back-of-house access all come in scope. Each gets hardware suited to its exposure, since a pool gate and an office door are not the same problem.",
      },
    ],
  },
  {
    slug: "voip-phone-systems",
    name: "VoIP Phone Systems",
    schemaName: "VoIP Phone System Installation",
    title: "VoIP Phone System Installation",
    description:
      "Cloud VoIP phone systems with a 99.99% uptime SLA and 24/7 support: handset deployment, call flow configuration, number porting and cutover with no downtime.",
    h1: "VoIP Phone Services",
    lede: "Cloud phone systems deployed and cut over without a day where nobody can reach the front desk.",
    image: "/services/voip.jpg",
    imageAlt: "VoIP desk phone on an office desk with a cloud network graphic above it",
    intro: [
      "A phone cutover is the most visible change a property can make, because the failure mode is a customer who cannot reach anyone. The risk is almost never the handsets, it is the porting schedule and the call flow nobody documented before the switch.",
      "We deploy cloud-based VoIP with a 99.99% uptime SLA and 24/7 support, and we plan the cutover around the porting dates rather than hoping they land. Feature-rich, straightforward to scale, and configured to how the business actually routes a call.",
    ],
    includes: [
      {
        title: "Cloud phone system deployment",
        description:
          "Platform configuration, extensions, handset provisioning and desk or common-area placement across one site or many.",
      },
      {
        title: "Call flow and auto attendant",
        description:
          "Menus, hunt groups, after-hours routing and overflow built to how calls are actually handled, documented so it can be changed later.",
      },
      {
        title: "Number porting and cutover",
        description:
          "Porting coordinated with the carrier on a dated plan, with the old service live until the new one answers correctly.",
      },
      {
        title: "Call recording",
        description:
          "Recording and retention configured where the business needs it for training, dispute resolution or compliance.",
      },
      {
        title: "Voicemail to email",
        description:
          "Voicemail delivered as email with audio attached, so messages reach people who are not at a desk.",
      },
      {
        title: "Network readiness for voice",
        description:
          "Quality of service, PoE budget and switching checked before deployment, because most call quality complaints are a network problem wearing a phone costume.",
      },
    ],
    deliverables: [
      "Extension and handset assignment schedule",
      "Documented call flow and auto attendant configuration",
      "Dated porting and cutover plan",
      "Quality of service and network readiness notes",
      "Administrator training and support handover",
    ],
    segments: ["multi-family", "hospitality", "enterprise"],
    faqs: [
      {
        q: "Will we lose phone service during the switch?",
        a: "No. The old service stays live until the new system answers correctly, and porting is scheduled with the carrier on a dated plan rather than attempted in one cutover window.",
      },
      {
        q: "Can we keep our existing phone numbers?",
        a: "Yes. Number porting is part of the scope, coordinated with the carrier. Porting timelines are set by the carrier, which is why the cutover plan is built around them instead of the other way round.",
      },
      {
        q: "What causes poor call quality on VoIP?",
        a: "Almost always the network rather than the phone system: no quality of service configuration, a saturated uplink or a PoE budget that is over-subscribed. We check all three before deployment, which is why voice work and network work are quoted together.",
      },
    ],
  },
  {
    slug: "audio-video",
    name: "Audio & Video",
    schemaName: "Commercial Audio Video Installation",
    title: "Commercial Audio & Video Installation",
    description:
      "Commercial audio and video installation designed in-house: conference room systems, distributed audio, video walls and control systems for amenity and corporate spaces.",
    h1: "Audio and Video Solutions",
    lede: "Conference rooms, amenity spaces and video walls designed in-house and commissioned properly.",
    image: "/services/av.jpg",
    imageAlt: "Large-format display and conference audio system in a meeting room",
    intro: [
      "AV is judged in the first thirty seconds of a meeting. If the room needs a person who knows the trick to make it work, the install failed regardless of what was specified.",
      "Our in-house design team specifies and commissions commercial audio and video using equipment from the manufacturers we partner with: conference and boardroom systems, distributed audio through amenity spaces, video walls, and the control layer that makes a room usable by whoever walks into it.",
    ],
    includes: [
      {
        title: "Conference and boardroom systems",
        description:
          "Displays, cameras, microphones and codec integration specified for the room's size and acoustics rather than a standard kit.",
      },
      {
        title: "Distributed audio",
        description:
          "Zoned audio through lobbies, amenity spaces, fitness areas and exteriors, with paging where the property needs it.",
      },
      {
        title: "Video walls and large-format displays",
        description:
          "Lobby, amenity and operations displays, including mounting structure, processing and content source planning.",
      },
      {
        title: "Control systems",
        description:
          "One-touch control so a room starts a meeting without instructions, with the programming documented rather than locked in a dealer's head.",
      },
      {
        title: "Digital signage",
        description:
          "Display hardware, mounting and content playback for amenity, wayfinding and resident or guest communication.",
      },
      {
        title: "Commissioning and training",
        description:
          "Rooms tuned and signed off against the design, then handed to the people who will use them daily.",
      },
    ],
    deliverables: [
      "Room-by-room AV design and equipment schedule",
      "Rack elevations and signal flow diagrams",
      "Control system programming and documentation",
      "Commissioning results per room",
      "End-user and administrator training",
    ],
    segments: ["hospitality", "enterprise", "multi-family"],
    faqs: [
      {
        q: "Do you design the AV yourselves or resell a vendor's design?",
        a: "Designed in-house. Our own design team specifies each room, using equipment from the manufacturers we partner with, which is what makes it possible to tune the design to the room rather than fit the room to a package.",
      },
      {
        q: "Can AV be installed on the same project as cabling and network?",
        a: "Yes. AV depends on the cabling and the network, so scoping them together avoids the common sequence where AV arrives after the pathways are closed up and has to be worked around.",
      },
      {
        q: "Who supports the rooms after handover?",
        a: "Control programming and commissioning results are documented and handed over, and our partner support covers structured troubleshooting and warranty coordination after go-live rather than ending at sign-off.",
      },
    ],
  },
  {
    slug: "prop-tech-consulting",
    name: "Prop-Tech Consulting",
    schemaName: "Property Technology Consulting",
    title: "Prop-Tech Consulting for Property Owners",
    description:
      "Property technology consulting for owners and developers: technology roadmapping, vendor selection, ROI analysis and implementation oversight across a portfolio.",
    h1: "Prop-Tech Consulting",
    lede: "Independent advice on what to install, what to skip, and what it will actually return.",
    image: "/services/prop-tech.jpg",
    imageAlt: "Illustration of connected property technology systems and performance charts",
    intro: [
      "Property technology is sold hard and bought optimistically. The packages that get installed are frequently the ones with the best sales team rather than the ones that pay back, and the cost of finding out is a portfolio-wide rollout.",
      "We advise owners, developers and operators on where technology genuinely improves property management, tenant experience, investment performance and sustainability, and where it does not. Then we oversee the implementation, because a recommendation nobody executes correctly is the same as no recommendation.",
    ],
    includes: [
      {
        title: "Technology roadmapping",
        description:
          "A sequenced plan across a property or a portfolio, so systems land in an order where each one can use the infrastructure the last one left behind.",
      },
      {
        title: "Vendor selection",
        description:
          "Shortlisting and evaluating platforms against the property's actual requirements, including what happens at renewal and what the exit looks like.",
      },
      {
        title: "ROI analysis",
        description:
          "What a system costs installed, what it costs annually, and what it credibly returns in operations, retention or asset value.",
      },
      {
        title: "New construction technology scope",
        description:
          "Writing the technology scope while it is still cheap to change, which is before the pathways and risers are built.",
      },
      {
        title: "Bulk internet and connectivity strategy",
        description:
          "Evaluating bulk, managed and retail models for resident or guest connectivity, including the revenue and service implications of each.",
      },
      {
        title: "Implementation oversight",
        description:
          "Holding vendors to the design through installation and closeout, so what gets built matches what was approved.",
      },
    ],
    deliverables: [
      "Technology roadmap by property or portfolio",
      "Vendor evaluation and recommendation",
      "ROI model and total cost of ownership",
      "Technology scope for new construction",
      "Implementation oversight and closeout review",
    ],
    segments: ["multi-family", "hospitality", "enterprise"],
    faqs: [
      {
        q: "Are you independent, or recommending what you install?",
        a: "We install some of the platforms we advise on, and we tell you which ones up front. The value of the consulting is the ROI analysis and the vendor evaluation against your requirements, and part of that work is telling you when a system does not pay back.",
      },
      {
        q: "When should prop-tech consulting start on new construction?",
        a: "Before pathways and risers are designed. Technology scope written after the building is drawn gets limited by decisions made without it, and the retrofit cost of that is the most avoidable expense in the whole project.",
      },
      {
        q: "Can you advise on bulk internet versus retail service?",
        a: "Yes. Bulk, managed and retail models each carry different revenue, service and capital implications, and the right answer depends on the asset, the market and the hold period rather than on which is generally better.",
      },
    ],
  },
]

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug)

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
