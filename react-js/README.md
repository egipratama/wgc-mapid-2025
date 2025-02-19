# PENGGUNAAN MAPID MAPS PADA LIBRARY REACT JS

### Cara Menjalankan Base Code ini Menggunakan React + Vite
1. Seletah clone repository ini, arahkan direktory ke folder react-js
2. Ubah atau Rename .env.example menjadi .env lalu masukan API Key Basemap MAPID dari menu MAP SERVICE di https://geo.mapid.io kedalam file .env pada
```bash
VITE_MAP_SERVICE_KEY="isikan api key basemap disini"
```
3. Install dependencies dengan yarn, npm atau yang lainnya
```bash
yarn
```
atau
```bash
npm install
```
4. Jalankan dengan perintah
```bash
yarn dev
```
atau
```bash
npm run dev
```
5. Buka http://localhost:5173 atau sesuaikan saat menjalankannya

### Berikut list contoh code untuk penggunaan MAPID Maps di React JS

- Cara Menampilkan Peta MAPID MAPS [Maps.jsx](/react-js/src/Pages/Maps.jsx) ([localhost:5173](http://localhost:5173/)) 
- Cara Menambahkan Navigator (plus, min, compas) [Navigator.jsx](/react-js/src/Pages/Navigator.jsx) ([localhost:5173/navigator](http://localhost:5173/navigator))
- Cara Menambahkan Marker [Marker.jsx](/react-js/src/Pages/Marker.jsx) ([localhost:5173/marker](http://localhost:5173/marker))
- Cara Menampilkan Points dari data GEOJSON [Points.jsx](/react-js/src/Pages/Points.jsx) ([localhost:5173/points](http://localhost:5173/points))
- Cara Menampilkan Line dari data GEOJSON [Line.jsx](/react-js/src/Pages/Line.jsx) ([localhost:5173/line](http://localhost:5173/line))
- Cara Menampilkan Polygon dari data GEOJSON [Polygon.jsx](/react-js/src/Pages/Polygon.jsx) ([localhost:5173/polygon](http://localhost:5173/polygon))