/** All site copy lives here. Adapted from the Redport company profile (2026). */

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'approach', label: 'How we work' },
  { id: 'why', label: 'Why Redport' },
  { id: 'contact', label: 'Contact' },
]

export const CONTACT = {
  phones: [
    { label: '0806 885 4427', href: 'tel:+2348068854427' },
    { label: '0904 419 5911', href: 'tel:+2349044195911' },
  ],
  email: 'info@redportconsulting.com',
  address: ['5 Barr J I Okeke Close', 'Lekky County Estate, Ikota', 'Lagos State, Nigeria'],
}

export const DISCIPLINES = ['Cybersecurity', 'AI Governance', 'Cloud', 'Infrastructure', 'Managed Services', 'Compliance']

export const CAPABILITIES = [
  {
    id: 'cyber', img: 'capCyber', title: 'Cybersecurity & Risk',
    summary: 'Protecting networks, applications, endpoints and data across the technology environment.',
    items: ['Network & application security', 'Vulnerability assessment', 'Penetration testing', 'Endpoint security', 'Firewall management', 'DDoS protection & encryption'],
  },
  {
    id: 'soc', img: 'capSoc', title: 'Managed Security & SOC',
    summary: 'Day-to-day security operations, run with control, from design through to remediation.',
    items: ['SOC design & planning', 'SOC operations', 'Remediation services', 'DNS services', 'Data classification & storage'],
  },
  {
    id: 'cloud', img: 'capCloud', title: 'Cloud & Infrastructure',
    summary: 'Modernise the technology foundation so it can scale with flexibility and stay resilient.',
    items: ['Cloud services', 'SaaS & Security as a Service', 'Hybrid security solutions', 'Network management & SD-WAN', 'Best-of-breed networks'],
  },
  {
    id: 'ai', img: 'capAI', title: 'AI Governance & Security',
    summary: 'Helping organizations adopt AI with appropriate security, accountability, privacy and risk controls.',
    items: ['AI governance frameworks', 'AI risk & security assessment', 'Data & privacy controls', 'GenAI security', 'Responsible AI adoption'],
  },
  {
    id: 'gov', img: 'capGov', title: 'Governance & Compliance',
    summary: 'Aligning technology decisions with risk, accountability and recognized compliance frameworks.',
    items: ['Technology governance', 'Risk analysis', 'GDPR', 'PCI-DSS', 'HIPAA & SOX'],
  },
]

export const PLAYBOOKS = [
  {
    id: 'security', tab: 'Cybersecurity', img: 'pbSec',
    title: 'Security by design',
    flow: ['Assessment', 'Protection', 'Testing', 'Remediation'],
    blurb: 'A practical security portfolio spanning network, application and endpoint controls.',
    steps: [
      { name: 'Assess', text: 'Network audit, vulnerability assessment and risk analysis.' },
      { name: 'Protect', text: 'Network security, endpoint security, firewall management and encryption.' },
      { name: 'Test', text: 'Penetration testing, application security, SS7 and IP security.' },
      { name: 'Respond', text: 'Remediation services and DDoS protection.' },
    ],
  },
  {
    id: 'ai', tab: 'AI governance', img: 'pbAI',
    title: 'Secure AI. Responsible AI.',
    flow: ['Governance', 'Risk', 'Data', 'Security', 'Oversight'],
    blurb: 'A practical approach to managing the risks introduced by AI and generative AI across the enterprise.',
    steps: [
      { name: 'Govern', text: 'AI governance frameworks, policies, roles and accountability.' },
      { name: 'Assess', text: 'AI risk assessments, use-case reviews and third-party AI risk.' },
      { name: 'Protect', text: 'AI application security, data protection, access controls and privacy.' },
      { name: 'Adopt', text: 'Responsible GenAI adoption, secure deployment and awareness.' },
      { name: 'Oversee', text: 'Monitoring, control reviews and governance reporting.' },
    ],
  },
]

export const SERVICES = [
  { id: 'managed', img: 'svcManaged', kind: 'Managed services', title: 'Operate with control', items: ['SOC operations', 'Data classification', 'Data storage solutions', 'DNS services', 'DDoS protection'] },
  { id: 'cloud', img: 'svcCloud', kind: 'Cloud services', title: 'Scale with flexibility', items: ['Software as a Service', 'Security as a Service', 'Hybrid security solutions', 'Secure cloud architecture'] },
  { id: 'infra', img: 'svcInfra', kind: 'IT infrastructure', title: 'Connect with resilience', items: ['Best-of-breed networks', 'Network management', 'Network solutions', 'Traffic solutions', 'SD-WAN services'] },
]

export const FRAMEWORKS = ['Technology Governance', 'Risk Analysis', 'GDPR', 'PCI-DSS', 'HIPAA', 'SOX']

export const VISION = 'To be a catalyst for growth and innovation, delivering transformative solutions that empower organizations and communities to succeed in an ever-evolving world.'
export const MISSION = 'To solve real-world challenges through expert-driven strategies, impactful solutions and long-term value across technology, business and beyond.'

export const VALUES = [
  { name: 'Excellence', text: 'Highest standards' },
  { name: 'Integrity', text: 'Honesty and accountability' },
  { name: 'Innovation', text: 'Forward-thinking' },
  { name: 'Client success', text: 'Long-term success' },
  { name: 'Agility', text: 'Adapt quickly' },
  { name: 'Collaboration', text: 'Work together' },
]

export const WHY = [
  { name: 'Breadth', text: 'Security, AI governance, cloud, infrastructure, managed services and compliance in one portfolio.' },
  { name: 'Practical focus', text: 'Assessment, implementation, operations and remediation across the whole service set.' },
  { name: 'Client orientation', text: 'Integrity, collaboration, agility and long-term client success guide how we work.' },
]

export const CLIENTS = ['Pandar', 'ArcelorMittal', 'The Concept Group', 'ATB Tech', 'Richway Microfinance Bank']
export const OEMS = ['Palo Alto Networks', 'Fortinet', 'Checkmarx', 'Netskope', 'Sophos', 'Cisco', 'Tenable', 'Seceon', 'SentinelOne', 'Microsoft']
export const RIBBON = ['rb1', 'rb2', 'rb3', 'rb4', 'rb5', 'rb6', 'rb7', 'rb8']
