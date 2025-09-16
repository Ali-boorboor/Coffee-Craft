import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import type { LatLngTuple, Icon } from "leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const LOCATION_COORDINATES: LatLngTuple = [
  40.754021435619514, -73.94093738374971,
];

const Map = () => {
  const [locationIcon, setLocationIcon] = useState<Icon | null>(null);

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setLocationIcon(
        leaflet.icon({
          iconUrl: "/image/location-icon.png",
          iconSize: [50, 50],
        })
      );
    });
  }, []);

  if (!locationIcon) return null;

  return (
    <div className="basis-full md:basis-1/2 h-90.5 z-10 border-2 border-primary rounded-md overflow-hidden shadow-xs shadow-primary">
      <MapContainer
        center={LOCATION_COORDINATES}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url={`https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png`}
        />

        <Marker position={LOCATION_COORDINATES} icon={locationIcon}>
          <Popup className="capitalize">coffee craft shop</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
