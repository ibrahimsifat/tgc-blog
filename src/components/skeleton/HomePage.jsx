import BlogSkeleton from "./Blog";
import HomeFilter from "./HomeFilter";
const blogs = Array.from({ length: 6 }).map((_, index) => ({
  id: index + 1,
}));
const HomePageSkelton = () => (
  <div className="bg-gray-100">
    <div className="container mx-auto flex flex-wrap py-6">
      <section className="w-full md:w-2/3 items-center px-3">
        <div className="grid gap-6 md:grid-cols-2 my-4">
          {blogs.map((blog) => (
            <BlogSkeleton key={blog.id} blog={blog} />
          ))}
        </div>
        {/* <PaginationSkeleton /> */}
      </section>
      <HomeFilter />
    </div>
  </div>
);

export default HomePageSkelton;
