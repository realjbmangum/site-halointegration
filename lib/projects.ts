/**
 * Completed projects, supplied by the client.
 *
 * Lives here rather than inside the projects page because the audience pages
 * (/services/multi-family, /hospitality, /enterprise) each show the projects
 * in their own category. One array, one place to correct a property name.
 */

export type ProjectCategory = "Multi-Family" | "Hospitality" | "Enterprise"

export type Project = {
  id: number
  title: string
  category: ProjectCategory
  location: string
  units: string
  description: string
  image: string | null
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "300 E 36th – Avery Hall",
    category: "Multi-Family",
    location: "",
    units: "294 units",
    description:
      "High-performance network infrastructure deployment including fiber backbone, MDF/IDF buildouts, and full wireless coverage across a multi-story residential development.",
    image: "/projects/300-e-36th-avery-hall.jpg",
  },
  {
    id: 2,
    title: "Atria Cinco Ranch",
    category: "Multi-Family",
    location: "Cinco Ranch, TX",
    units: "78 units",
    description:
      "Full network infrastructure deployment including structured cabling, fiber distribution, and communications room buildout across a senior living community.",
    image: "/projects/atria-cinco-ranch.jpg",
  },
  {
    id: 3,
    title: "Atria Copeland",
    category: "Multi-Family",
    location: "Tyler, TX",
    units: "79 units",
    description:
      "Underground conduit and coax infrastructure installation connecting multiple buildings, delivering reliable property-wide connectivity.",
    image: "/projects/atria-copeland.jpg",
  },
  {
    id: 4,
    title: "Best Western Hotel Finial Premier",
    category: "Hospitality",
    location: "Anniston, AL",
    units: "61 rooms",
    description:
      "Structured cabling installation and certification across guest rooms and common areas, including MDF/IDF buildouts and fully tested network systems.",
    image: "/projects/best-western-finial-premier.jpg",
  },
  {
    id: 5,
    title: "Candlewood Suites",
    category: "Hospitality",
    location: "Huntsville, AL",
    units: "107 units",
    description:
      "Complete low-voltage infrastructure deployment for a new construction hotel, including structured cabling, CCTV systems, and full network integration.",
    image: "/projects/candlewood-suites-huntsville.jpg",
  },
  {
    id: 6,
    title: "Catalyst Tower",
    category: "Multi-Family",
    location: "Uptown Charlotte, NC",
    units: "462 units",
    description:
      "High-rise network infrastructure deployment including fiber backbone, riser systems, MDF/IDF buildouts, and fully certified structured cabling.",
    image: "/projects/catalyst-tower.jpg",
  },
  {
    id: 7,
    title: "Coast Seattle Downtown Hotel",
    category: "Hospitality",
    location: "Seattle, WA",
    units: "256 rooms",
    description:
      "Fiber network remediation and stabilization, restoring backbone connectivity across MDF and IDFs for a multi-floor hotel system.",
    image: "/projects/coast-seattle-downtown.jpg",
  },
  {
    id: 8,
    title: "Copper Social",
    category: "Multi-Family",
    location: "Marietta, GA",
    units: "264 units",
    description:
      "Network assessment and site survey evaluating fiber backbone, cabling infrastructure, and wireless deployment to support future network redesign and performance improvements.",
    image: "/projects/copper-social.jpg",
  },
  {
    id: 9,
    title: "Fusion @ Rye",
    category: "Multi-Family",
    location: "Houston, TX",
    units: "133 units",
    description:
      "Structured cabling validation and remediation to improve network performance and readiness across a multi-building residential property.",
    image: "/projects/fusion-at-rye.jpg",
  },
  {
    id: 10,
    title: "Hampton Inn",
    category: "Hospitality",
    location: "Orlando, FL",
    units: "123 rooms",
    description:
      "Fiber termination and certification services delivering validated connectivity and ensuring network readiness for deployment.",
    image: "/projects/hampton-inn-orlando.jpg",
  },
  {
    id: 11,
    title: "Homewood Suites",
    category: "Hospitality",
    location: "Tucson, AZ",
    units: "123 rooms",
    description:
      "End-to-end network deployment including structured cabling, WiFi systems, and fiber backbone installation with full certification.",
    image: "/projects/homewood-suites-tucson.jpg",
  },
  {
    id: 12,
    title: "Landing at Lemay",
    category: "Multi-Family",
    location: "Fort Collins, CO",
    units: "344 units",
    description:
      "Fiber and WiFi infrastructure deployment across a multi-building residential community, including MDF/IDF systems, in-unit connectivity, and 300+ fully validated access points.",
    image: "/projects/landing-at-lemay.jpg",
  },
  {
    id: 13,
    title: "Palermo by the Park",
    category: "Multi-Family",
    location: "Frisco, TX",
    units: "384 units",
    description:
      "Fiber and WiFi infrastructure upgrade across a multi-building residential community, including CAT6 post-wire, MDF buildout, in-unit connectivity, and 384 fully deployed access points.",
    image: "/projects/palermo-by-the-park.jpg",
  },
  {
    id: 14,
    title: "Passages at Rye",
    category: "Multi-Family",
    location: "Houston, TX",
    units: "131 units",
    description:
      "Network infrastructure upgrades including cabling remediation, fiber backbone deployment, and organized distribution across multiple buildings.",
    image: "/projects/passages-at-rye.jpg",
  },
  {
    id: 15,
    title: "Reserve at Rye",
    category: "Multi-Family",
    location: "Houston, TX",
    units: "130 units",
    description:
      "Structured cabling upgrades and fiber deployment to enhance network performance and connectivity across residential buildings.",
    image: "/projects/reserve-at-rye.jpg",
  },
  {
    id: 16,
    title: "TownePlace Suites",
    category: "Hospitality",
    location: "Reno, NV",
    units: "96 rooms",
    description:
      "Structured cabling and system integration supporting elevator lobby phone connectivity across multiple floors with fully tested and validated endpoints.",
    image: "/projects/towneplace-suites-reno.jpg",
  },
  {
    id: 17,
    title: "Turtle Creek 2",
    category: "Multi-Family",
    location: "Dallas, TX",
    units: "323 units",
    description:
      "High-rise fiber and WiFi infrastructure deployment across a 20-story residential tower, including MDF/IDF systems, in-unit connectivity, and 300+ access points.",
    image: "/projects/turtle-creek-2.jpg",
  },
  {
    id: 18,
    title: "Vale Luxury",
    category: "Multi-Family",
    location: "Spring, TX",
    units: "350 units",
    description:
      "Full GPON fiber-to-the-unit deployment across a multi-building residential community, including OSP, ISP, and in-unit connectivity.",
    image: "/projects/vale-luxury.jpg",
  },
]

export function projectsByCategory(category: ProjectCategory): Project[] {
  return PROJECTS.filter((p) => p.category === category)
}
