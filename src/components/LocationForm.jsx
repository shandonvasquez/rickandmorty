import React, { useState } from "react";

const LocationForm = ({ handleSubmit }) => {
  const [locationId, setLocationId] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (locationId && locationId >= 1 && locationId <= 126) {
      handleSubmit(locationId);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center justify-center h-full"
    >
      <input
        value={locationId}
        onChange={(e) => setLocationId(e.target.value)}
        min={1}
        id="newLocation"
        max={126}
        placeholder="Type a location id"
        type="number"
      />
      <button className="bg-green-300 text-white px-4 py-2 rounded hover:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default LocationForm;
