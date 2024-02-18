import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Pagination = ({ currentPage, totalPages, baseRoute }) => {
  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="container bg-gray-100 flex flex-wrap ">
      <nav className="flex items-center mx-auto py-6 ">
        {prevPage && (
          <Link
            href={`${baseRoute}?page=${prevPage}`}
            className="h-10 w-10 font-semibold text-gray-800 hover:text-white-900  text-sm flex items-center justify-center  mx-2"
          >
            <div className="hover:text-blue-800 flex items-center">
              <FaChevronLeft />
              Prev
            </div>
          </Link>
        )}

        {range(1, totalPages).map((page) => (
          <Link
            key={page}
            href={`${baseRoute}?page=${page}`}
            className={`h-10 w-10  hover:bg-blue-600 font-semibold text-gray-800 text-sm flex items-center justify-center pagination-link hover:text-white ${
              page === currentPage ? "active bg-blue-800 text-white" : ""
            }`}
          >
            <p>{page}</p>
          </Link>
        ))}

        {nextPage && (
          <Link
            href={`${baseRoute}?page=${nextPage}`}
            className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center  mx-2"
          >
            <div className="hover:text-blue-800 flex items-center">
              Next
              <FaChevronRight />
            </div>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
