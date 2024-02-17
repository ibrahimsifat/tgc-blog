import BlogCard from "@components/Molecules/blog/Card";
import HomeFilter from "@components/Organisms/BlogFilter/Filters";
const Blog = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-wrap py-6">
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <div className="grid gap-6 md:grid-cols-2 my-4">
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
            <Pagination />
          </section>
          <HomeFilter />
        </div>
      </div>
    </>
  );
};
export default Blog;
const Pagination = () => {
  return (
    <div className="flex items-center py-8">
      <a
        href="#"
        className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
      >
        1
      </a>
      <a
        href="#"
        className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
      >
        2
      </a>
      <a
        href="#"
        className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
      >
        Next <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  );
};
