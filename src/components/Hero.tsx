import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Calendar } from "lucide-react";
import heroImage from "@/assets/cricket-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <Trophy className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-foreground">T20 Cricket Tournament</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">Kanakai 8 Youth Club</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
              Cricket Championship 2025
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join us for an electrifying T20 cricket tournament featuring the best local teams. Experience the thrill, passion, and glory of cricket!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="hero" className="group">
              Register Your Team
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
              <Calendar className="mr-2 h-5 w-5" />
              View Schedule
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent">8+</div>
              <div className="text-sm text-muted-foreground mt-1">Teams Competing</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent">T20</div>
              <div className="text-sm text-muted-foreground mt-1">Match Format</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent">₹50K+</div>
              <div className="text-sm text-muted-foreground mt-1">Prize Pool</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
