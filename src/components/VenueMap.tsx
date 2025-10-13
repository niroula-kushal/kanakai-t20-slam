import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Navigation } from "lucide-react";
import { VENUE_COORDS, GOOGLE_MAPS_LINK } from "./venue-constants";

// Fix for default marker icon in Leaflet with Vite
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const VenueMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;


  // Use constants for coordinates
  const latitude = VENUE_COORDS.latitude;
  const longitude = VENUE_COORDS.longitude;


  map.current = L.map(mapContainer.current).setView([latitude, longitude], 13);

    // Define base layers
    const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    });
    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 19,
    });
    const hybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: 'Map data ©2025 Google',
      maxZoom: 19,
    });
    hybrid.addTo(map.current);

    // Add layer control
    L.control.layers({ 'Hybrid': hybrid, 'Satellite': satellite, 'Map': osm }).addTo(map.current);


    // Add marker with cricket bat emoji and popup
    const cricketBatIcon = L.divIcon({
      html: '<span style="font-size:2rem;">🏏</span>',
      className: '',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });
    const marker = L.marker([latitude, longitude], { icon: cricketBatIcon }).addTo(map.current);
    marker.bindPopup(`
      <b>Cricket Ground</b><br>Tournament Venue<br>
      <a href='https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving' target='_blank' rel='noopener noreferrer' style='color:#2563eb;text-decoration:underline;'>Navigate with Google Maps</a>
    `).openPopup();

    // Add a custom control button for navigation
    const navControl = L.Control.extend({
      onAdd: function() {
        const btn = L.DomUtil.create('button', 'leaflet-bar leaflet-control leaflet-control-custom');
        btn.innerHTML = '🧭';
        btn.title = 'Navigate with Google Maps';
        btn.style.background = '#fff';
        btn.style.width = '34px';
        btn.style.height = '34px';
        btn.style.cursor = 'pointer';
        btn.onclick = () => {
          window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving`, '_blank');
        };
        return btn;
      },
      onRemove: function() {}
    });
    map.current.addControl(new navControl({ position: 'topright' }));

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <section id="venue" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Find Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tournament <span className="text-primary">Venue</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located at our local cricket ground with excellent facilities
          </p>
        </div>


          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border relative">
              <div 
                ref={mapContainer} 
                className="h-[400px] md:h-[500px] w-full"
              />
            </div>
            {/* Navigation button just below the map, centered */}
            <div className="w-full flex justify-center mt-4">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl text-lg font-semibold border-2 border-white hover:bg-primary/90 transition-all"
                style={{ boxShadow: '0 8px 32px 0 rgba(37,99,235,0.25)' }}
                title="Navigate with Google Maps"
              >
                <Navigation className="w-6 h-6" />
                Navigate with Google Maps
              </a>
            </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-sm text-muted-foreground">
                Local Cricket Ground<br />
                [Address to be updated]
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <svg className="h-8 w-8 text-accent mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-semibold mb-2">Timings</h4>
              <p className="text-sm text-muted-foreground">
                9:00 AM - 6:00 PM<br />
                All three days
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <svg className="h-8 w-8 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h4 className="font-semibold mb-2">Facilities</h4>
              <p className="text-sm text-muted-foreground">
                Parking, Seating,<br />
                Refreshments Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;
