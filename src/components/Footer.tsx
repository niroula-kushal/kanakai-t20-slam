import { Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Kanakai 8 Youth Club</h3>
              <p className="text-sm text-muted-foreground">Cricket Championship 2025</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Organized with passion for cricket
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © 2025 Kanakai 8 Youth Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
