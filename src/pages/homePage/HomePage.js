import { Footer } from '../../components/footer/Footer';
import { MainLayout } from '../../styles/styles';
import { CallToActionSection } from './components/callToActionSection/CallToActionSection';
import { FrequentQuestionsSection } from './components/frequentQuestions/FrequentQuestionsSection';
import { HeroSection } from './components/hero/HeroSection';
import { HowItWorksItem } from './components/howItWorks/HowItWorksItem';
import { OwnerSection } from './components/owner/OwnerSection';
import { UsersReviewSection } from './components/userReview/UsersReviewSection';

export const HomePage = () => {
  return (
    <MainLayout className='d-flex flex-column gap-4'>
      <HeroSection />
      <HowItWorksItem />
      <OwnerSection />
      <UsersReviewSection />
      <FrequentQuestionsSection />
      <CallToActionSection />
      <Footer />
    </MainLayout>
  );
};
