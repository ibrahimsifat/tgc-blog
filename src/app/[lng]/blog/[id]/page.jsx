import BlogCard from "@/src/components/Molecules/blog/Card";
import AuthorProfile from "@components/Molecules/authorProfile";
import Image from "next/image";
export default async function Page({ params: { lng, id } }) {
  // url
  let URL = process.env.NEXT_PUBLIC_SERVER_SINGLE_BLOG_URL;
  let RelatedURL = process.env.NEXT_PUBLIC_SERVER_BLOG_URL;

  if (lng === "ar-SA") {
    URL = URL.replace("blogs", "blogs_ar");
    RelatedURL = RelatedURL.replace("blogs", "blogs_ar");
  }
  console.log("jhe", lng);
  // single blog
  const blogUrl = URL.replace("id", id);
  const res = await fetch(`${blogUrl}`);
  const blog = await res.json();

  // related blogs
  const relatedBlogs = await fetch(
    `${RelatedURL}&categoryId=${blog?.categoryId}`
  );
  const relatedBlogsJson = await relatedBlogs.json();
  const relatedBlogsData = relatedBlogsJson.filter(
    (blog) => blog.id !== blog?.categoryId
  );
  // console.log("relatedBlogs", relatedBlogsData);
  return (
    <>
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <AuthorProfile user={blog?.user} />
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {blog?.title}{" "}
              </h1>
            </header>
            <figure>
              <Image
                width={1184}
                height={1376}
                src={blog?.image}
                alt={blog?.title}
              />

              <div className="mt-5  text-sm  uppercase pb-4 flex justify-between">
                <div>
                  <strong>Category:</strong>
                  {blog?.category?.name}
                </div>
                <div>
                  <strong>Tag:</strong> {blog?.tag?.name}
                </div>
              </div>
              <div
                className="mt-6"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              />
            </figure>
          </article>
        </div>
      </main>

      {/* related blog by category */}
      <aside
        aria-label="Related articles"
        class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div class="px-4 mx-auto max-w-screen-xl">
          <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2>
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedBlogsData.length > 0 &&
              relatedBlogsData.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            {/* ))} */}
          </div>
        </div>
      </aside>
    </>
  );
}
