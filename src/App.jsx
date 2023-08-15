import React, { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./utils/random";
import axios from "axios";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import LocationForm from "./components/LocationForm";
import Portal from "./Portal";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const randomDimension = getRandomDimension(126);
    fetchDimension(randomDimension);
  }, []);

  return (
    <main className="fira-code min-h-screen text-white main-background">
      <div>
        <Portal />
      </div>
      <div className="text-black">
        <LocationForm handleSubmit={fetchDimension} />
      </div>
      <LocationInfo currentLocation={currentLocation} />
      <div>
        <ResidentList
          residents={currentLocation?.residents ?? []}
          currentLocation={currentLocation}
        />
      </div>
    </main>
  );
}

export default App;
