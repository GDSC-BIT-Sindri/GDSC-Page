import { AnimatedBox } from '../../components/AnimatedObjects';
import HomeAbout from './HomeAbout';
import HomeBanner from './HomeBanner';
import HomeChannels from './HomeChannels';
import HomeInstitute from './HomeInstitute';
import HomePartner from './HomePartner';
import HomeTeam from './HomeTeam';
import HomeTestimonials from './HomeTestimonials';

function Home() {
  return (
    <main className="home">
      <AnimatedBox />
      <HomeBanner />
      <HomeAbout />
      <HomeTeam />
      <HomeTestimonials />
      <HomePartner />
      <HomeChannels />
      <HomeInstitute />
    </main>
  );
}

export default Home;
