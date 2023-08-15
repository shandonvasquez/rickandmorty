const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul>
      {pages.map((page) => (
        <li
          className={`${currentPage == page && "text-red-500"}`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
