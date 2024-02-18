import Image from "next/image";
import Link from "next/link";
import ProfileAvatar from "../../Molecules/authorProfile";

export default function BlogCard({ blog, lng }) {
  return (
    <article className="flex flex-col shadow rounded-lg">
      <div className="hover:opacity-75">
        <Image src={blog.image} alt={blog.title} width={500} height={350} />
      </div>
      <Link href={`/${lng}/blog/${blog.id}`}>
        <div className="bg-white flex flex-col justify-start p-6">
          <div className="text-blue-700 text-sm font-bold uppercase pb-4 flex justify-between">
            <p>{blog?.category?.name}</p>
            <p> {blog?.tag?.name}</p>
          </div>
          <p className="md:text-2xl text-xl font-bold hover:text-gray-700 h-20 pb-4">
            {blog.title}
          </p>
          <div className="text-sm pb-3">
            <ProfileAvatar user={blog?.user} />{" "}
          </div>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: blog?.content?.slice(0, 200) }}
          />
          <div className=" mt-3 font-bold text-gray-600 hover:text-blue-800">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </Link>
    </article>
  );
}
