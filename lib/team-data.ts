export type TeamProfile = {
  name: string
  role: string
  initials: string
  image?: string
  imageAlt?: string
  bio: string
  department: string
  email?: string
  credential?: string
}

export type OrgNode = {
  id: string
  name: string
  role: string
  image?: string
  initials?: string
  department?: string
  children?: OrgNode[]
}

// Bios stay conservative where full supporting detail was not recoverable.
export const leadership: TeamProfile[] = [
  {
    name: "Carlos Castro",
    role: "FOUNDER & CEO",
    initials: "CC",
    image: "/team/carlos-castro-profile.jpg",
    imageAlt: "Carlos Castro CRS founder and CEO profile portrait",
    bio: "Carlos Castro founded Controlled Risk Services after nearly three decades in construction and oil field operations. He leads CRS with a field-first approach: protect the people doing the work, support the safety professionals guiding the work, and give clients accountable leadership on demanding projects.",
    department: "EXEC",
    email: "carlos.castro@controlledriskservices.com",
    credential: "Construction and oil field safety leadership",
  },
]

export const teamMembers: TeamProfile[] = [
  {
    name: "April Donley",
    role: "HSE PROFESSIONAL",
    initials: "AD",
    bio: "April Donley is a Health, Safety, and Environmental professional with nine years across petrochemical, oil and gas, pipeline, and construction projects. Her experience spans safety management systems, hazard and risk assessments, PTW, LOTO, incident investigation, fall protection, confined space, and site training on projects including Golden Pass LNG, LyondellBasell, Chevron Phillips, and Freeport LNG.",
    department: "HSE",
    credential: "NCCER CSST, CPR/First Aid, High Angle Rescue",
  },
  {
    name: "David Armstrong",
    role: "SENIOR SITE SAFETY MANAGER",
    initials: "DA",
    bio: "David Armstrong is a senior safety leader with more than 20 years across safety management and human resources on major construction projects. His background spans heavy civil, substations, EPC solar farms, disaster relief operations, mining, transmission and distribution, vegetation management, healthcare, data centers, power generation, and utility work.",
    department: "SITE",
    credential: "SMP, CHST, CUSP, OSHA 500, EM 385-1, NFPA 70E",
  },
  {
    name: "Francisco",
    role: "SAFETY PROFESSIONAL",
    initials: "FR",
    bio: "Francisco supports CRS client projects as a safety professional focused on practical field coverage, hazard awareness, and steady communication with project teams.",
    department: "SAFE",
    credential: "Field safety support",
  },
  {
    name: "Marco Arita",
    role: "USACE REGIONAL SAFETY MANAGER",
    initials: "MA",
    bio: "Marco Arita supports CRS safety coverage as a USACE-focused regional safety manager with field-ready planning, jobsite coordination, and compliance-minded support for construction and industrial environments.",
    department: "SAFE",
    credential: "USACE safety management",
  },
  {
    name: "Maria D. Moreno",
    role: "SAFETY PROFESSIONAL",
    initials: "MM",
    bio: "Maria D. Moreno supports CRS safety staffing with site documentation, day-to-day coordination, and practical communication for active project teams.",
    department: "OPS",
    credential: "Project safety coordination",
  },
  {
    name: "Nelson Altamirano",
    role: "CSST / CSSS SAFETY PROFESSIONAL",
    initials: "NA",
    image: "/team/nelson-altamirano-profile.jpg",
    imageAlt: "Nelson Altamirano CRS safety professional profile portrait",
    bio: "Nelson Altamirano brings CSST and CSSS safety credentials to CRS client coverage where certified site safety experience and field coordination are needed.",
    department: "FIELD",
    credential: "CSST / CSSS",
  },
  {
    name: "Sean McDermott",
    role: "FIELD SAFETY PROFESSIONAL",
    initials: "SM",
    bio: "Sean McDermott supports CRS field safety coverage with construction-site hazard awareness, professional communication, and practical on-site safety support.",
    department: "FIELD",
    credential: "Field safety coverage",
  },
  {
    name: "Roberto Alonzo",
    role: "FIELD SAFETY DIRECTOR",
    initials: "RA",
    bio: "Roberto C. Alonzo serves CRS as a field safety director with years of FAA safety experience and more than a decade across oil and gas, piping construction, scaffold and fall protection, asbestos, refinery, airport expansion, and industrial operations. His experience includes OSHA and USACE EM 385-1-1 compliance, contractor safety documentation, incident investigation, audits, confined space, excavation, MEWP oversight, and bilingual safety orientations.",
    department: "AVI",
    credential: "FAA safety, OSHA 30, EM 385-1-1, English/Spanish",
  },
  {
    name: "Eoin Sexton",
    role: "LEAD COST MANAGER / PROJECT CONTROLS",
    initials: "ES",
    bio: "Eoin Sexton is a lead cost manager focused on data centers and mission-critical infrastructure. His work spans commercial management, procurement strategy, forecasting, change management, claims support, risk mitigation, capital planning, contractor negotiations, final accounts, and executive reporting for hyperscale programs.",
    department: "COST",
    credential: "Data centers, GMP procurement, forecasting, change management",
  },
  {
    name: "Kingsley Ifah",
    role: "PROJECT / CONSTRUCTION MANAGER",
    initials: "KI",
    image: "/team/kingsley-ifah.jpg",
    imageAlt: "Kingsley Ifah professional headshot",
    bio: "Kingsley Ifah is a project and construction manager with more than 12 years delivering telecom, IT, and engineering projects from concept through completion. His background includes construction management, telecom network builds, cloud migration, ERP work, budgets, schedules, vendor coordination, stakeholder updates, site inspections, quality checks, and risk mitigation.",
    department: "PM",
    credential: "PMP, Lean Six Sigma Black Belt, CSM, SAFe, OSHA 30",
  },
  {
    name: "Michael Aswell Sr.",
    role: "SENIOR SAFETY PROFESSIONAL",
    initials: "MS",
    image: "/team/michael-aswell-profile.jpg",
    imageAlt: "Michael Aswell Sr. CRS senior safety professional profile portrait",
    bio: "Michael Aswell Sr. is a senior safety professional with more than 40 years across commercial construction and industrial work, including more than 20 years as a safety director. His experience includes site safety management, data center work, owner-representative safety, safety walks, audits, toolbox talks, scaffold inspections, hot-work coordination, accident prevention, and training teams toward zero-incident goals.",
    department: "SAFE",
    credential: "OSHA Authorized Trainer, Master, SHEP, CSHO, SSH",
  },
  {
    name: "East Coast Bilingual Safety Professional",
    role: "BILINGUAL SAFETY PROFESSIONAL",
    initials: "EC",
    bio: "This East Coast bilingual safety professional supports projects that need clear field communication, safety coordination, and multilingual support for diverse work crews.",
    department: "EAST",
    credential: "Bilingual field communication",
  },
]

export const homepageTeam = [
  leadership[0],
  teamMembers.find((member) => member.name === "David Armstrong"),
  teamMembers.find((member) => member.name === "Michael Aswell Sr."),
].filter((member): member is TeamProfile => Boolean(member))

export const orgData: OrgNode = {
  id: "founder",
  name: "Carlos Castro",
  role: "FOUNDER & CEO",
  image: "/team/carlos-castro-profile.jpg",
  children: [
    {
      id: "client-delivery",
      name: "Client Delivery",
      role: "PROJECT MANAGEMENT & STAFFING",
      department: "OPS",
      children: [
        {
          id: "project-safety",
          name: "Project Safety",
          role: "SITE COORDINATION",
          department: "PROJ",
          children: [
            {
              id: "maria-moreno",
              name: "Maria D. Moreno",
              role: "SAFETY PROFESSIONAL",
              initials: "MM",
              department: "OPS",
            },
          ],
        },
        {
          id: "field-safety",
          name: "Field Safety",
          role: "ON-SITE SAFETY COVERAGE",
          department: "FIELD",
          children: [
            {
              id: "david-armstrong",
              name: "David Armstrong",
              role: "SENIOR SITE SAFETY MANAGER",
              initials: "DA",
              department: "SITE",
            },
            {
              id: "april-donley",
              name: "April Donley",
              role: "HSE PROFESSIONAL",
              initials: "AD",
              department: "HSE",
            },
            {
              id: "sean-mcdermott",
              name: "Sean McDermott",
              role: "FIELD SAFETY PROFESSIONAL",
              initials: "SM",
              department: "FIELD",
            },
            {
              id: "francisco",
              name: "Francisco",
              role: "SAFETY PROFESSIONAL",
              initials: "FR",
              department: "SAFE",
            },
            {
              id: "michael-aswell",
              name: "Michael Aswell Sr.",
              role: "SENIOR SAFETY PROFESSIONAL",
              image: "/team/michael-aswell-profile.jpg",
              initials: "MS",
              department: "SAFE",
            },
            {
              id: "marco-arita",
              name: "Marco Arita",
              role: "USACE REGIONAL SAFETY MANAGER",
              initials: "MA",
              department: "SAFE",
            },
            {
              id: "nelson-altamirano",
              name: "Nelson Altamirano",
              role: "CSST / CSSS SAFETY PROFESSIONAL",
              image: "/team/nelson-altamirano-profile.jpg",
              initials: "NA",
              department: "FIELD",
            },
          ],
        },
      ],
    },
    {
      id: "specialized-safety",
      name: "Specialized Safety",
      role: "TECHNICAL & INDUSTRY SUPPORT",
      department: "TECH",
      children: [
        {
          id: "roberto-alonzo",
          name: "Roberto Alonzo",
          role: "FIELD SAFETY DIRECTOR",
          initials: "RA",
          department: "AVI",
        },
        {
          id: "east-coast-bilingual-safety",
          name: "East Coast Bilingual Safety Professional",
          role: "BILINGUAL SAFETY PROFESSIONAL",
          initials: "EC",
          department: "EAST",
        },
      ],
    },
    {
      id: "business-support",
      name: "Business Support",
      role: "HR, FINANCE & ADMINISTRATION",
      department: "ADMIN",
      children: [
        {
          id: "cost-controls",
          name: "Cost Controls",
          role: "COST MANAGEMENT & FORECASTING",
          department: "COST",
          children: [
            {
              id: "kingsley-ifah",
              name: "Kingsley Ifah",
              role: "PROJECT / CONSTRUCTION MANAGER",
              image: "/team/kingsley-ifah.jpg",
              initials: "KI",
              department: "PM",
            },
            {
              id: "eoin-sexton",
              name: "Eoin Sexton",
              role: "LEAD COST MANAGER / PROJECT CONTROLS",
              initials: "ES",
              department: "COST",
            },
          ],
        },
        {
          id: "hr",
          name: "Human Resources",
          role: "SAFETY PROFESSIONAL SUPPORT",
          department: "HR",
        },
        {
          id: "finance",
          name: "Finance",
          role: "ACCOUNTING & CONTROLS",
          department: "FIN",
        },
      ],
    },
  ],
}
