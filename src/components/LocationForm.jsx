import React from "react";

const LocationForm = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center h-full"
    >
      ={" "}
      <input
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
