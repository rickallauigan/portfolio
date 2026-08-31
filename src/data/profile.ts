export const profile = {
  name: 'Roderick “Rick” Allauigan',
  shortName: 'Rick Allauigan',
  location: 'Norway',
  headline:
    'Software Engineer | Platform Engineering, DevSecOps and Cloud Security',
  introduction:
    'I build reliable backend systems and apply software-engineering practices to delivery, infrastructure, and security controls.',
  github: 'https://github.com/rickallauigan',
  repository: 'https://github.com/rickallauigan/portfolio',
  linkedin: null as string | null,
  email: null as string | null,
  cv: null as string | null,
};

export const navigation = [
  { href: '/projects', label: 'Projects' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const technologyGroups = [
  {
    title: 'Backend systems',
    items: ['Go', 'PostgreSQL', 'Hasura GraphQL', 'Redis', 'Keycloak'],
  },
  {
    title: 'Delivery & platform',
    items: ['Docker', 'Kubernetes / k3s', 'GitLab CI/CD', 'AWS'],
  },
  {
    title: 'Operations',
    items: ['Grafana', 'CloudWatch', 'Proxmox', 'OPNsense', 'WireGuard'],
  },
  {
    title: 'Security direction',
    items: [
      'DevSecOps',
      'Cloud security',
      'Policy as code',
      'Security automation',
    ],
  },
];

export const projects = [
  {
    title: 'Secure delivery pipeline',
    status: 'Planned',
    summary:
      'A reproducible pipeline design for scanning, producing an SBOM, enforcing gates, and establishing artifact provenance.',
    href: '/case-studies/secure-ci-cd-pipeline',
  },
  {
    title: 'Policy-enforced infrastructure',
    status: 'Planned',
    summary:
      'A lab for combining IaC misconfiguration checks with organization-specific policy decisions before deployment.',
    href: '/case-studies/policy-enforced-infrastructure',
  },
  {
    title: 'Runtime detection and observability',
    status: 'Planned',
    summary:
      'A detection-to-response lab connecting runtime signals, telemetry, alert routing, and documented investigation.',
    href: '/case-studies/runtime-detection-observability',
  },
];
