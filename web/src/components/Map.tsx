import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
  //   useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import React, { useRef, useState } from "react";

import L from "leaflet";
import "leaflet-routing-machine";

interface Props {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}

const center = {
  lat: 27.7172,
  lng: 85.324,
};

const GetCods: React.FC<Props> = ({ setAddress }) => {
  const map = useMap();

  const markerRef = useRef<L.Marker<any>>(null);
  const [position, setPosition] = useState(center);
  L.Routing.control({
    waypoints: [
      L.latLng(position.lat, position.lng),
      L.latLng(27.671, 85.4298),
    ],
    lineOptions: {
      styles: [{ color: "black" }],
      extendToWaypoints: false,
      missingRouteTolerance: 0,
    },
    addWaypoints: false,
  })
    .addTo(map)
    .on("routesfound", function (e) {
      const route = e.routes[0]; // Get the first (and usually the only) route
      const coordinates = route.coordinates; // Array of route coordinates
      const coordinatesArray = coordinates.map((c: any) => [c.lat, c.lng]);
      const busStationCoords = [27.67477, 86.36107];
      const isBusStationOnRoute = isPointOnPolyline(
        busStationCoords,
        coordinatesArray
      );
      console.log(isBusStationOnRoute);
    });

  useMapEvents({
    click(e) {
      console.log(e.latlng);

      setPosition({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return (
    <Marker position={center} ref={markerRef} draggable={false}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

const Map: React.FC<Props> = ({ setAddress }) => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GetCods setAddress={setAddress} />
    </MapContainer>
  );
};

export default Map;

function distanceSquared(point1: any, point2: any) {
  const dx = point1[0] - point2[0];
  const dy = point1[1] - point2[1];
  return dx * dx + dy * dy;
}

// Function to check if a point lies on a polyline (route)
function isPointOnPolyline(point: any, polyline: any, tolerance = 0.0001) {
  for (let i = 0; i < polyline.length - 1; i++) {
    const start = polyline[i];
    const end = polyline[i + 1];

    const d2 = distanceSquared(start, end);
    const dot =
      ((point[0] - start[0]) * (end[0] - start[0]) +
        (point[1] - start[1]) * (end[1] - start[1])) /
      d2;

    if (dot < 0 || dot > 1) {
      continue;
    }

    const closestX = start[0] + dot * (end[0] - start[0]);
    const closestY = start[1] + dot * (end[1] - start[1]);
    const distance2 = distanceSquared(point, [closestX, closestY]);

    if (distance2 < tolerance * tolerance) {
      return true;
    }
  }

  return false;
}

// Example usage:
