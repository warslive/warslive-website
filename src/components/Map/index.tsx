import React from "react";
import styled from "styled-components";

import { MAPBOX_TOKEN } from "@services/mapbox";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map: React.FC = () => {
  mapboxgl.accessToken = MAPBOX_TOKEN;

  const mapRef = React.useRef<HTMLDivElement>(null);
  const [, setMap] = React.useState<mapboxgl.Map | null>(null);

  React.useEffect(() => {
    const currentMap = new mapboxgl.Map({
      container: mapRef.current || "",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [2.35, 48.85],
      zoom: 5,
    });

    currentMap.addControl(new mapboxgl.NavigationControl(), "bottom-left");
    setMap(currentMap);
  }, []);

  return <Container ref={mapRef} />;
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 75%;
`;

export default Map;
