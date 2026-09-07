import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import FeaturesSection from './sections/FeaturesSection'
import CategoriesSection from './sections/CategoriesSection'
import WhyChooseSection from './sections/WhyChooseSection'
import CoursesSection from './sections/CoursesSection'
import VideoSection from './sections/VideoSection'
import InstructorsSection from './sections/InstructorsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import BlogSection from './sections/BlogSection'
import PromoSection from './sections/PromoSection'
import NewsletterSection from './sections/NewsletterSection'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <CategoriesSection />
        <WhyChooseSection />
        <CoursesSection />
        <VideoSection />
        <InstructorsSection />
        <TestimonialsSection />
        <BlogSection />
        <PromoSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
