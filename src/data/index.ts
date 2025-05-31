import { NavItem, Project, Skill, SocialLink, VolunteerRole, Partnership } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'HTML', icon: 'file-code' },
  { name: 'CSS', icon: 'file-type-css' },
  { name: 'JavaScript', icon: 'file-type-js' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Data Science Projects',
    description: 'Machine learning models, data analysis, and visualization projects using Python and R.',
    tags: ['Data Science', 'Python', 'R'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Engineering Projects',
    description: 'Coming Soon - Innovative engineering solutions and mechanical design projects.',
    tags: ['Engineering', 'CAD', 'Simulation'],
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'IoT Projects',
    description: 'Coming Soon - Smart home automation and sensor-based monitoring systems.',
    tags: ['IoT', 'Arduino', 'Raspberry Pi'],
    image: 'https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'ArcGIS Projects',
    description: 'Coming Soon - Geospatial analysis and mapping projects using ArcGIS.',
    tags: ['ArcGIS', 'GIS', 'Mapping'],
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 5,
    title: 'Solar Projects',
    description: 'Coming Soon - Solar energy systems design and implementation projects.',
    tags: ['Solar', 'Renewable Energy', 'Design'],
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 6,
    title: 'Other Projects',
    description: 'Coming Soon - Various innovative projects across different domains.',
    tags: ['Innovation', 'Research', 'Development'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: '#',
    codeLink: '#',
  }
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
  { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
];

export const aboutContent = {
  title: 'About Me',
  description: `Hello! I'm a passionate and dedicated professional with expertise in data science, engineering, IoT, and geospatial analysis. My journey in tech began 5 years ago, and I've been building innovative solutions ever since.

I specialize in creating data-driven solutions and implementing cutting-edge technologies across various domains. My approach combines technical expertise with creative problem-solving to deliver exceptional results that exceed expectations.

When I'm not working on projects, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.`,
  image: 'https://images.pexels.com/photos/3799821/pexels-photo-3799821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  cvLink: '/CURRICULUM VITAE (1).pdf'
};
export const volunteerRoles: VolunteerRole[] = [
  {
    id: 1,
    title: 'Tech Mentor',
    organization: 'Code for Change',
    description: 'Mentoring underprivileged youth in programming and digital skills, helping bridge the technology gap in our community.',
    duration: '2024 - Present',
   // imageUrl: '/images/volunteer-tech-mentor.jpg', // Replace with your image path
  },
  {
    id: 2,
    title: 'STEM Education Volunteer',
    organization: 'Local Schools Initiative',
    description: 'Leading workshops and hands-on activities to inspire the next generation of scientists and engineers.',
    duration: '2024 - Present',
    //imageUrl: '/images/volunteer-stem-education.jpg', // Replace with your image path
  },
  {
    id: 3,
    title: 'IEEE Day Ambassador',
    organization: 'IEEE',
    description: 'Organizing events to help spread the gospel about IEEE.',
    duration: '2024 - 2024',
    //imageUrl: '/images/ieee-day-ambassador.jpg', // <-- Add your image here
  }
];

];

export const partnerships: Partnership[] = [
  {
    id: 1,
    organization: 'Tech Innovation Lab',
    type: 'Research Partnership',
    logo: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Collaborating on cutting-edge research in artificial intelligence and machine learning applications.',
    outcomes: ['Published Research', 'Patent Pending', 'Industry Recognition']
  },
  {
    id: 2,
    organization: 'Sustainable Energy Alliance',
    type: 'Industry Collaboration',
    logo: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Working together to develop innovative solutions for renewable energy implementation and optimization.',
    outcomes: ['Pilot Project', 'Energy Savings', 'Community Impact']
  },
  {
    id: 3,
    organization: 'Smart Cities Initiative',
    type: 'Public-Private Partnership',
    logo: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Developing and implementing IoT solutions for urban infrastructure improvement and monitoring.',
    outcomes: ['Smart Infrastructure', 'Data Analytics', 'Public Safety']
  }
];
