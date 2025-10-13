import Hero from "@/components/Hero";
import TournamentDetails from "@/components/TournamentDetails";
import VenueMap from "@/components/VenueMap";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TournamentDetails />
      <VenueMap />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;
