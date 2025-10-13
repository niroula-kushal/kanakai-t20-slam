import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration submitted! We'll contact you soon.");
    setFormData({
      teamName: "",
      captainName: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">Join the Tournament</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Register Your <span className="text-accent">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below or contact us directly to secure your spot
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Team Registration</CardTitle>
              <CardDescription>Submit your team details to participate</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="teamName">Team Name</Label>
                  <Input
                    id="teamName"
                    placeholder="Enter your team name"
                    value={formData.teamName}
                    onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="captainName">Captain Name</Label>
                  <Input
                    id="captainName"
                    placeholder="Team captain's name"
                    value={formData.captainName}
                    onChange={(e) => setFormData({...formData, captainName: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Contact number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Any additional details about your team"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-muted-foreground">+91 [Phone Number]</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    Email
                  </h4>
                  <p className="text-muted-foreground">kanakai8youthclub@email.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Social Media</h4>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61582349186357" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Follow us on Facebook
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle>Registration Fee</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Per Team</span>
                    <span className="text-2xl font-bold text-accent">₹5,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Includes tournament registration, team kit, and refreshments for all matches
                  </p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-medium">Payment Details</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Payment information will be shared after registration
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
