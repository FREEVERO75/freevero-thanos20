import { MainLayout } from '../../styles/styles';
import { HeroSection } from './components/Hero/HeroSection';
import { HowItWorksSection } from './components/HowItWorks/HowItWorksSection';
import { OwnerSection } from './components/Owner/OwnerSection';
import { UsersReviewSection } from './components/UserReview/UsersReviewSection';

export const HomePage = () => {
  return (
    <MainLayout className='d-flex flex-column gap-4'>
      <HeroSection />
      <HowItWorksSection />
      <OwnerSection />
      <UsersReviewSection />
    </MainLayout>
  );
};
