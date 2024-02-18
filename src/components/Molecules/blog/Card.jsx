import ProfileAvatar from "@components/molecules/profileAvatar";
import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <article className="flex flex-col shadow rounded-lg">
      <a href="#" className="hover:opacity-75">
        <Image src={blog.image} alt={blog.title} width={500} height={350} />
      </a>
      <div className="bg-white flex flex-col justify-start p-6">
        <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">
          {blog?.category?.name}
        </a>
        <a
          href="#"
          className="md:text-2xl text-xl font-bold hover:text-gray-700 pb-4"
        >
          {blog.title}
        </a>
        <div className="text-sm pb-3">
          <ProfileAvatar user={blog?.user} />{" "}
        </div>
        <a href="#" className="pb-6">
          {blog.content}
        </a>
        <a href="#" className="uppercase text-gray-800 hover:text-blue-800">
          Continue Reading <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </article>
  );
}
