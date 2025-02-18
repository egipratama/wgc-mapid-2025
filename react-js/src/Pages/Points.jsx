import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function Points() {
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

    // GeoJSON data dengan beberapa titik
    var geojsonData = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [107.60981, -6.91474], // Titik 1
          },
          properties: {
            title: "Lokasi A",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [107.61861, -6.90274], // Titik 2
          },
          properties: {
            title: "Lokasi B",
          },
        },
      ],
    };

    // Tambahkan garis setelah peta dimuat
    map.current.on("load", () => {
      console.log("map loaded");

      map.current.addSource("points", {
        type: "geojson",
        data: geojsonData,
      });

      // Tambahkan layer untuk menampilkan titik
      map.current.addLayer({
        id: "points-layer",
        type: "circle",
        source: "points",
        paint: {
          "circle-radius": 8, // Ukuran titik
          "circle-color": "#ff0000", // Warna merah
        },
      });

      // Event klik pada titik untuk menampilkan popup
      map.current.on("click", "points-layer", function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var title = e.features[0].properties.title;

        new maplibregl.Popup()
          .setLngLat(coordinates)
          .setHTML(`<b>${title}</b>`)
          .addTo(map.current);
      });
    });

    return () => map.current?.remove(); // Hapus peta saat komponen unmount
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
}

export default Points;
