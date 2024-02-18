import BlogCard from "@components/Molecules/blog/Card";
import HomeFilter from "@components/Organisms/BlogFilter/Filters";
// import { getBlogs } from "@network/index";
const Blog = async ({ query, blogs }) => {
  // const blogs = await getBlogs({ query });

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-wrap py-6">
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <div className="grid gap-6 md:grid-cols-2 my-4">
              {blogs?.map((blog) => {
                return <BlogCard key={blog.id} blog={blog} />;
              })}
            </div>
          </section>
          <HomeFilter />
        </div>
      </div>
    </>
  );
};
export default Blog;
