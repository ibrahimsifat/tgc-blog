import BlogCard from "@components/Molecules/blog/Card";
import HomeFilter from "@components/Organisms/BlogFilter/Filters";

const Blog = async ({ handleFilter, blogs, lng }) => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-wrap py-6">
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <div className="grid gap-6 md:grid-cols-2 my-4">
              {blogs?.map((blog) => {
                return <BlogCard key={blog.id} blog={blog} lng={lng} />;
              })}
            </div>
          </section>
          <HomeFilter handleFilter={handleFilter} lng={lng} />
        </div>
      </div>
    </>
  );
};
export default Blog;
