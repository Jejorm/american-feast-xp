import FoodDrinkSection from '@/components/food-drink-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import LineupSection from '@/components/lineup-section';
import LocationSection from '@/components/location-section';
import Navbar from '@/components/navbar';
import TickerTape from '@/components/ticker-tape';
import TicketHandler from '@/components/ticket-handler';

export default function FoodFestivalPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-festival-yellow">
      <Navbar />
      <HeroSection />
      <TickerTape />
      <LineupSection />
      <FoodDrinkSection />
      <LocationSection />
      <TicketHandler />
      <Footer />
    </main>
  );
}
