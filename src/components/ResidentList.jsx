import Pagination from "./Pagination";
import ResidentCard from "./ResidentCard";
import { useEffect, useState } from "react";

const ResidentList = ({ residents, currentLocation }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const RESIDENTS_PER_PAGE = 20;
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);
  const INITIAL_PAGE = 1;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [currentLocation]);

  return (
    <section>
      <section className="flex flex-wrap -mx-4">
        {residentsInPage.map((resident) => (
          <div key={resident} className="w-full sm:w-1/2 md:w-1/4 px-4">
            <ResidentCard residentUrl={resident} />
          </div>
        ))}
      </section>
      <section>
        <Pagination
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
    </section>
  );
};

export default ResidentList;
