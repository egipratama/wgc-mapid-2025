import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function Polygon() {
  const MAP_SERVICE_KEY = import.meta.env.VITE_MAP_SERVICE_KEY;
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    // if (map.current) return; // Mencegah inisialisasi ulang
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://basemap.mapid.io/styles/street-new-generation/style.json?key=${MAP_SERVICE_KEY}`, // URL gaya peta
      center: [107.6117887556604, -6.918605247117273],
      zoom: 12,
      pitch: 0,
      bearing: 0,
    });

    var geojsonPolygon = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [107.60581, -6.91074],
                [107.61581, -6.91074],
                [107.61581, -6.92074],
                [107.60581, -6.92074],
                [107.60581, -6.91074],
              ],
            ],
          },
          properties: {
            name: "Area Contoh",
          },
        },
      ],
    };

    // Tambahkan garis setelah peta dimuat
    map.current.on("load", () => {
      console.log("map loaded");

      map.current.addSource("polygon-source", {
        type: "geojson",
        data: geojsonPolygon,
      });

      map.current.addLayer({
        id: "polygon-layer",
        type: "fill",
        source: "polygon-source",
        paint: {
          "fill-color": "#008000",
          "fill-opacity": 0.5,
        },
      });

      map.current.addLayer({
        id: "polygon-outline",
        type: "line",
        source: "polygon-source",
        paint: {
          "line-color": "#000000",
          "line-width": 2,
        },
      });
    });

    return () => map.current?.remove(); // Hapus peta saat komponen unmount
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
}

export default Polygon;
