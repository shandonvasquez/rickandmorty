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
      {" "}
      <div className="bg-black text-white  border-green-500 border ">
        <input
          value={locationId}
          onChange={(e) => setLocationId(e.target.value)}
          min={1}
          id="newLocation"
          max={126}
          placeholder="Type a location id"
          type="number"
          className="text-white bg-black p-2"
        />
        <button className="bg-green-300 text-white px-6 py-2  hover:bg-blue-600">
          Search
        </button>
      </div>
    </form>
  );
};
// Delete this comment is just to sent a commit
export default LocationForm;
