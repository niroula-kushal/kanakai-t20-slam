import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Calendar, MapPin, Award, Clock } from "lucide-react";
import trophyImage from "@/assets/logo.png";

const TournamentDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "Tournament Dates",
      description: "कार्तिक ७ - १०, २०८२",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Venue",
      description: "Shree Adarsha Vidya Mandir Ghailadubba,jhapa",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Teams",
      description: "9+ Teams, 15 players each",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Format",
      description: "20 Overs, T20 Rules",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Prizes",
      description: "Cash & Trophies",
      color: "text-accent"
    },
    {
      icon: Trophy,
      title: "Registration",
      description: "Open until कार्तिक १, २०८२",
      color: "text-primary"
    }
  ];

  return (
    <section id="details" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tournament <span className="text-primary">Details</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the championship
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mb-12">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((detail, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-border/50">
                  <CardHeader className="pb-3">
                    <detail.icon className={`h-8 w-8 ${detail.color} mb-2`} />
                    <CardTitle className="text-lg">{detail.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{detail.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={trophyImage} 
                alt="Cricket Trophy" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Tournament Format</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-semibold text-accent mb-2">Knock-out Format</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• All matches are knock-out</li>
                  <li>• No round-robin or league stage</li>
                  <li>• Lose and you are eliminated</li>
                  <li>• Winners advance to the next round until the final</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold text-primary mb-2">Rules & Regulations</h4>
              <p className="text-sm text-muted-foreground">
                Standard T20 cricket rules apply. Each team plays 20 overs. Powerplay in first 6 overs. 
                Maximum 4 overs per bowler. 15 players per team, 11 on field.
              </p>
              <p>
                A rule book will be available to download soon.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TournamentDetails;
