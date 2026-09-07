import type {
  NavLink, Stat, Feature, Category, WhyChoose, Course,
  Instructor, Testimonial, BlogPost,
} from '../types'

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    href: '#',
    children: [
      { label: 'Home One', href: '#' },
      { label: 'Home Two', href: '#' },
    ],
  },
  { label: 'About', href: '#about' },
  {
    label: 'Courses',
    href: '#courses',
    children: [
      { label: 'Course One', href: '#' },
      { label: 'Course Two', href: '#' },
      { label: 'Course Details', href: '#' },
    ],
  },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'Instructor', href: '#instructors' },
      { label: 'Pricing Plan', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const stats: Stat[] = [
  { value: '136', label: 'Courses' },
  { value: '299', label: 'Teachers' },
  { value: '684', label: 'Students' },
  { value: '941', label: 'Awards' },
]

export const aboutFeatures: Feature[] = [
  {
    icon: 'GraduationCap',
    title: 'Online Courses',
    description: 'Learn from industry experts with structured curriculum designed for real-world skills.',
  },
  {
    icon: 'Award',
    title: 'Expert Teachers',
    description: 'Our instructors bring years of practical experience and deep subject matter expertise.',
  },
  {
    icon: 'ScrollText',
    title: 'Certifications',
    description: 'Earn recognized certificates upon completion to boost your career prospects.',
  },
]

export const features: Feature[] = [
  {
    icon: 'Trophy',
    title: 'Award Winning',
    description: 'Award-winning platform recognized globally for excellence in online education.',
    link: '#',
  },
  {
    icon: 'BookOpen',
    title: 'Quality Education',
    description: 'High-quality curriculum designed by top educators and industry professionals.',
    link: '#',
  },
  {
    icon: 'Users',
    title: 'Expert Teachers',
    description: 'Learn from certified experts with years of teaching and industry experience.',
    link: '#',
  },
  {
    icon: 'Headphones',
    title: 'Life Time Support',
    description: 'Enjoy lifetime access to course materials and dedicated support whenever you need it.',
    link: '#',
  },
]

export const categories: Category[] = [
  { name: 'IT & Software', count: '71 Courses', color: '#EEF4FF', icon: 'Monitor' },
  { name: 'Digital Marketing', count: '59 Courses', color: '#F0FDF4', icon: 'TrendingUp' },
  { name: 'Web Development', count: '68 Courses', color: '#FFF7ED', icon: 'Globe' },
  { name: 'Health & Fitness', count: '83 Courses', color: '#FEF2F2', icon: 'Heart' },
  { name: 'Music Production', count: '37 Courses', color: '#F5F3FF', icon: 'Music' },
  { name: 'Graphic Design', count: '51 Courses', color: '#ECFDF5', icon: 'Palette' },
  { name: 'UI/UX Design', count: '38 Courses', color: '#FFFBEB', icon: 'Layers' },
  { name: 'Math & Physics', count: '43 Courses', color: '#F8FAFC', icon: 'Sigma' },
]

export const whyChoose: WhyChoose[] = [
  {
    icon: 'BookOpen',
    title: 'Learn More Anywhere',
    description: 'Access your courses anytime, anywhere with our mobile-friendly platform.',
    link: '#',
  },
  {
    icon: 'Briefcase',
    title: 'Expert Instructor',
    description: 'Learn from certified professionals with proven track records in their fields.',
    link: '#',
  },
  {
    icon: 'Users',
    title: 'Team Management',
    description: 'Efficient tools for managing learning paths and tracking team progress.',
    link: '#',
  },
  {
    icon: 'ClipboardList',
    title: 'Course Planning',
    description: 'Structured learning paths designed to take you from beginner to advanced.',
    link: '#',
  },
  {
    icon: 'BarChart3',
    title: 'Teacher Monitoring',
    description: 'Advanced analytics to monitor teacher performance and student engagement.',
    link: '#',
  },
  {
    icon: 'Headphones',
    title: '24/7 Strong Support',
    description: 'Round-the-clock support team ready to help with any questions or issues.',
    link: '#',
  },
]

export const courses: Course[] = [
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    category: 'Data Science',
    title: 'Professional Ceramic Moulding for Beginners',
    rating: '5.0',
    lessons: '25',
    duration: '8 hours',
    instructor: 'Theme Ocean',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    students: '2k',
    price: '$150',
  },
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    category: 'Management',
    title: 'Ultimate Photoshop Training: From Beginner',
    rating: '5.0',
    lessons: '25',
    duration: '8 hours',
    instructor: 'Theme Ocean',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    students: '2k',
    price: '$120',
  },
  {
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&q=80',
    category: 'Graphics',
    title: 'Basic Fundamentals of Interior & Graphics Design',
    rating: '5.0',
    lessons: '25',
    duration: '8 hours',
    instructor: 'Theme Ocean',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    students: '2k',
    price: '$170',
  },
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    category: 'Development',
    title: 'WordPress for Beginners – Master WordPress',
    rating: '5.0',
    lessons: '25',
    duration: '8 hours',
    instructor: 'Theme Ocean',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    students: '2k',
    price: '$140',
  },
]

export const instructors: Instructor[] = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    name: 'Stephen Cronin',
    role: 'Designer',
    courses: '5',
    students: '12',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    name: 'Rachel Park',
    role: 'Developer',
    courses: '19',
    students: '41',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    name: 'Dan Billson',
    role: 'Marketer',
    courses: '14',
    students: '33',
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    name: 'Gina Mellow',
    role: 'Co-founder',
    courses: '11',
    students: '27',
  },
]

export const testimonials: Testimonial[] = [
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    name: 'Kallu Mastan',
    role: 'Bissa Batpar',
    rating: 5,
    text: 'I immediately shared the results with a friend who could not believe it was written by an AI. Is worth every Yaley and then some. Describe my business along with my business name.',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
    name: 'Kader Kaku',
    role: 'Mitthay Expert',
    rating: 5,
    text: 'I immediately shared the results with a friend who could not believe it was written by an AI. Is worth every Yaley and then some. Describe my business along with my business name.',
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
    name: 'Mittha Hasina',
    role: 'Lotpat Company',
    rating: 5,
    text: 'I immediately shared the results with a friend who could not believe it was written by an AI. Is worth every Yaley and then some. Describe my business along with my business name.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    name: 'Hasau Mahmud',
    role: 'Mastan Group',
    rating: 5,
    text: 'I immediately shared the results with a friend who could not believe it was written by an AI. Is worth every Yaley and then some. Describe my business along with my business name.',
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    name: 'Kutta League',
    role: 'Kutta Inc',
    rating: 5,
    text: 'I immediately shared the results with a friend who could not believe it was written by an AI. Is worth every Yaley and then some. Describe my business along with my business name.',
  },
]

export const blogPosts: BlogPost[] = [
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    category: 'Education',
    title: 'Professional Mobile Painting and Sculpting',
    date: 'August 26, 2025',
    href: '#',
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    category: 'Design',
    title: 'Professional Ceramic Moulding for Beginner',
    date: 'August 28, 2025',
    href: '#',
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    category: 'Marketing',
    title: 'Education Is About Create Leaders For Tomorrow',
    date: 'August 30, 2025',
    href: '#',
  },
]
