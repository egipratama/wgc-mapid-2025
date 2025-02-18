import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function Line() {
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

    var geojsonLine = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [107.60981, -6.91474], // Titik awal garis
              [107.62081, -6.91574], // Titik kedua
              [107.63081, -6.92074], // Titik akhir
            ],
          },
          properties: {
            name: "Rute Contoh",
          },
        },
      ],
    };

    // Tambahkan garis setelah peta dimuat
    map.current.on("load", () => {
      console.log("map loaded");

      // Tambahkan GeoJSON sebagai sumber data
      map.current.addSource("line-source", {
        type: "geojson",
        data: geojsonLine,
      });

      // Tambahkan layer untuk menampilkan garis
      map.current.addLayer({
        id: "line-layer",
        type: "line",
        source: "line-source",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#ff0000", // Warna merah
          "line-width": 4, // Ketebalan garis
        },
      });
    });

    return () => map.current?.remove(); // Hapus peta saat komponen unmount
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
}

export default Line;
