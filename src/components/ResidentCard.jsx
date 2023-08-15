import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);
  const residentStatus = {
    Alive: "bg-green-600",
    Dead: "bg-red-600",
    unknown: "bg-zinc-900",
  };
  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="mx-auto max-w-md p-4 grid justify-items-center border-2 border-green-400 border-solid my-4">
      <header>
        <img src={residentInfo?.image} alt="Rick Sanchez" />
        <div className="flex items-center gap-2 p-2">
          <div className="statusResident flex gap-4">
            <div className="flex items-center">
              <div
                className={`h-4 w-4 bg-green-400 rounded-full ${
                  residentStatus[residentInfo?.status]
                }`}
              ></div>
            </div>

            <div className="text-white bg-stone-950 bg-opacity-50 p-2 rounded-md">
              {residentInfo?.status}
            </div>
          </div>
        </div>
      </header>
      <section className="text-center">
        <h3>{residentInfo?.name}</h3>
        <ul>
          <li>Species: {residentInfo?.species} </li>
          <li>Origin: {residentInfo?.origin.name}</li>
          <li>Times appear: {residentInfo?.episode.length} </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
