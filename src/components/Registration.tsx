import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Registration = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <MessageCircle className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-accent">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about the tournament? Reach out to us directly
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">+91 [Phone Number]</p>
              <p className="text-sm text-muted-foreground mt-2">
                Call us for tournament inquiries
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">kanakai8youthclub@email.com</p>
              <p className="text-sm text-muted-foreground mt-2">
                Send us your questions
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Follow us on Facebook for the latest tournament updates, match schedules, and results
              </p>
              <a 
                href="https://www.facebook.com/profile.php?id=61582349186357" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow Kanakai 8 Youth Club
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Registration;
