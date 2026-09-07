export interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface Feature {
  icon: string
  title: string
  description: string
  link?: string
}

export interface Category {
  name: string
  count: string
  color: string
  icon?: string
}

export interface WhyChoose {
  icon: string
  title: string
  description: string
  link: string
}

export interface Course {
  image: string
  category: string
  title: string
  rating: string
  lessons: string
  duration: string
  instructor: string
  instructorImage: string
  students: string
  price: string
}

export interface Instructor {
  image: string
  name: string
  role: string
  courses: string
  students: string
}

export interface Testimonial {
  image: string
  name: string
  role: string
  text: string
  rating: number
}

export interface BlogPost {
  image: string
  category: string
  title: string
  date: string
  href: string
}
