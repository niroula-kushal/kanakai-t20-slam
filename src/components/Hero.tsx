import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Calendar, Download, Printer, Link as LinkIcon } from "lucide-react";
import heroImage from "@/assets/nep-cri-2.png";
import logo from "@/assets/logo.png";
import tiesheet from "@/assets/kanakai-t20-fixture.png";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  // const [open, setOpen] = useState(false); // no longer used
  const [registerOpen, setRegisterOpen] = useState(false);
  const [tiesOpen, setTiesOpen] = useState(false);
  const { toast } = useToast();
  useEffect(() => {
    const sc = () => {
      if (window.location.hash === '#tiesheet') {
        const el = document.getElementById('tiesheet');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    // run once after mount
    sc();
    window.addEventListener('hashchange', sc);
    return () => window.removeEventListener('hashchange', sc);
  }, []);
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <img src={logo} alt="Logo" className="h-7 w-7 rounded-full bg-white p-1 border border-accent" />
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
            <Button size="lg" variant="hero" className="group" onClick={() => setRegisterOpen(true)}>
              Register Your Team
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
              <DialogContent className="max-w-md text-center">
                <img src={logo} alt="Logo" className="mx-auto mb-4 h-14 w-14 rounded-full bg-white p-2 border border-accent shadow" />
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-2 text-center">Registration Coming Soon</DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground mb-2">We will soon add a form for team registration.<br />Stay tuned!</p>
                <Button onClick={() => setRegisterOpen(false)} className="mt-2 w-full" variant="secondary">Close</Button>
              </DialogContent>
            </Dialog>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:border-primary/40"
              onClick={() => setTiesOpen(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Schedule
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent">9+</div>
              <div className="text-sm text-muted-foreground mt-1">Teams Competing</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent">T20</div>
              <div className="text-sm text-muted-foreground mt-1">Match Format</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent">Rs. 50,000</div>
              <div className="text-sm text-muted-foreground mt-1">First Prize</div>
            </div>
          </div>

          {/* Tiesheet spotlight */}
          <div className="mt-12 flex justify-center">
            <div id="tiesheet" className="relative max-w-3xl w-full">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-border bg-gradient-to-tr from-white/60 via-background/30 to-white/40 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Official Tie Sheet</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" onClick={() => setTiesOpen(true)} aria-label="Open tie sheet">
                      View
                    </Button>
                    <a href={tiesheet} download="kanakai-t20-fixture.png" className="inline-flex">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </a>
                    <Button size="sm" variant="secondary" onClick={() => printImage(tiesheet)}>
                                            <Printer className="h-4 w-4 mr-2" />
                      Print
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={async () => {
                        try {
                          const base = window.location.href.split('#')[0];
                          const url = `${base}#tiesheet`;
                          await navigator.clipboard.writeText(url);
                          toast({ title: "Link copied", description: "Tie sheet link copied to clipboard" });
                        } catch (e) {
                          toast({ title: "Could not copy", description: "Please copy the link manually" });
                        }
                      }}
                      className="flex items-center gap-2"
                    >
                      <LinkIcon className="h-4 w-4" />
                      Copy link
                    </Button>
                  </div>
                </div>

                <button
                  onClick={() => setTiesOpen(true)}
                  className="mt-4 w-full rounded-lg overflow-hidden bg-white/60 hover:scale-[1.01] transition-transform border border-border"
                  aria-label="Open tie sheet full-screen"
                >
                  <img src={tiesheet} alt="Kanakai T20 Tie Sheet" className="w-full h-64 object-contain bg-neutral-100" />
                </button>
              </div>
            </div>
          </div>

          {/* Tiesheet modal */}
          <Dialog open={tiesOpen} onOpenChange={setTiesOpen}>
            <DialogContent className="max-w-4xl w-full">
              <DialogHeader>
                <DialogTitle>Official Tie Sheet</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-stretch">
                <img src={tiesheet} alt="Kanakai T20 Tie Sheet" className="w-full h-[70vh] object-contain" />
                <div className="mt-4 flex justify-end gap-2">
                  <a href={tiesheet} download="kanakai-t20-fixture.png">
                    <Button variant="outline" className="flex items-center gap-2"><Download className="h-4 w-4"/> Download</Button>
                  </a>
                  <Button onClick={() => printImage(tiesheet)} className="flex items-center gap-2"><Printer className="h-4 w-4"/> Print</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};


export default Hero;

function printImage(src: string) {
  const w = window.open('', '_blank');
  if (!w) return;
  const html = `<!doctype html><html><head><title>Print Tie Sheet</title><meta charset="utf-8" /><style>html,body{height:100%;margin:0}body{display:flex;align-items:center;justify-content:center;background:#fff}</style></head><body><img src="${src}" style="max-width:100%;height:auto;"/></body></html>`;
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => {
    try {
      w.print();
    } catch (e) {
      // ignore
    }
  }, 300);
}
