import React, { useState } from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
// import "./NycTrip.css";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

// ---------- Route Data ---------- //
const routes = {
  day1: {
    color: "red",
    stops: [
      { name: "Grand Central Terminal", coords: [40.7527, -73.9772], photos: ["/images/day1/grand1.jpg"] },
      { name: "The Local (Hostel)", coords: [40.7447, -73.9486], photos: ["/images/day1/local1.jpg"] },
      { name: "433 Broadway", coords: [40.7188, -74.0006], photos: ["/images/day1/433_1.jpg"] },
      { name: "Museum of Ice Cream", coords: [40.7220, -73.9985], photos: ["/images/day1/ice1.jpg"] },
      { name: "High Line", coords: [40.747992, -74.004764], photos: ["/images/day1/high1.jpg"] },
      { name: "Cucina Alba", coords: [40.7426, -74.0015], photos: ["/images/day1/alba1.jpg"] },
      { name: "Times Square", coords: [40.7580, -73.9855], photos: ["/images/day1/times1.jpg"] }
    ]
  },
  day2: { color: "blue", stops: [] },
  day3: { color: "green", stops: [] },
  day4: { color: "orange", stops: [] }
};

export default function NycTrip() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0 });
  const [visibleDays, setVisibleDays] = useState({
    day1: true, day2: true, day3: true, day4: true
  });

  const toggleDay = (day) => {
    setVisibleDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const openLightbox = (images, index = 0) => {
    setLightbox({ isOpen: true, images, index });
  };

  const allCoords = Object.values(routes).flatMap(d => d.stops.map(s => s.coords));
  const center = allCoords.length
    ? [
        allCoords.reduce((sum, c) => sum + c[0], 0) / allCoords.length,
        allCoords.reduce((sum, c) => sum + c[1], 0) / allCoords.length
      ]
    : [40.75, -73.98];

  return (
    <div className="nyc-trip">
      <header className="nyc-header">
        <h1>My NYC Trip</h1>
        <div className="day-toggles">
          {Object.keys(routes).map(day => (
            <label key={day} style={{ color: routes[day].color }}>
              <input
                type="checkbox"
                checked={visibleDays[day]}
                onChange={() => toggleDay(day)}
              />
              {day.toUpperCase()}
            </label>
          ))}
        </div>
      </header>

      <MapContainer center={center} zoom={12} style={{ height: "calc(100vh - 90px)" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Object.entries(routes).map(([day, data]) =>
          visibleDays[day] && data.stops.length > 0 ? (
            <React.Fragment key={day}>
              <Polyline
                positions={data.stops.map(s => s.coords)}
                color={data.color}
                weight={4}
              />
              {data.stops.map((stop, i) => (
                <Marker key={i} position={stop.coords}>
                  <Popup>
                    <h3>{stop.name}</h3>
                    {stop.photos.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt=""
                        style={{ width: "100%", margin: "5px 0", cursor: "pointer" }}
                        onClick={() => openLightbox(stop.photos, idx)}
                      />
                    ))}
                  </Popup>
                </Marker>
              ))}
            </React.Fragment>
          ) : null
        )}
      </MapContainer>

      {lightbox.isOpen && (
        <Lightbox
          mainSrc={lightbox.images[lightbox.index]}
          nextSrc={lightbox.images[(lightbox.index + 1) % lightbox.images.length]}
          prevSrc={lightbox.images[(lightbox.index + lightbox.images.length - 1) % lightbox.images.length]}
          onCloseRequest={() => setLightbox({ ...lightbox, isOpen: false })}
          onMovePrevRequest={() =>
            setLightbox({
              ...lightbox,
              index: (lightbox.index + lightbox.images.length - 1) % lightbox.images.length
            })
          }
          onMoveNextRequest={() =>
            setLightbox({
              ...lightbox,
              index: (lightbox.index + 1) % lightbox.images.length
            })
          }
        />
      )}
    </div>
  );
}
