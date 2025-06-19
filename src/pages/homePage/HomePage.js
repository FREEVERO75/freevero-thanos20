import { Footer } from '../../components/footer/Footer';
import { MainLayout } from '../../styles/styles';
import { CallToActionSection } from './components/callToActionSection/CallToActionSection';
import { FrequentQuestionsSection } from './components/frequentQuestions/FrequentQuestionsSection';
import { HowItWorksSection } from './components/howItWorks/HowItWorksSection';
import { HeroSection } from './components/hero/HeroSection';
import { OwnerSection } from './components/owner/OwnerSection';
import { UsersReviewSection } from './components/userReview/UsersReviewSection';
import { Map } from './components/map/Map';

export const HomePage = () => {
  return (
    <MainLayout className='d-flex flex-column gap-4'>
      <HeroSection />
      <HowItWorksSection />
      <OwnerSection />
      <Map />
      <UsersReviewSection />
      <FrequentQuestionsSection />
      <CallToActionSection />
      <Footer />
    </MainLayout>
  );
};
