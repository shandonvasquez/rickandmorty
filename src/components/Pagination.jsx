const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <div className="flex items-center justify-center ">
      {pages.map((page) => (
        <div className="p-2	">
          <div
            className={`px-2 py-1 cursor-pointer  ${
              currentPage === page
                ? "bg-green-500"
                : " text-white 	 hover:bg-teal-300"
            }`}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
