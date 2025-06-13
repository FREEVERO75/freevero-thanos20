import { MainLayout } from '../../styles/styles';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { OwnerSection } from './components/OwnerSection';
import { UsersReviewSection } from './components/UsersReviewSection';

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
