const BlogSkeleton = () => {
  return (
    <article className="w-full flex flex-col shadow rounded-lg">
      <div className="bg-gray-200 aspect-w-36 aspect-h-44 h-44"></div>
      <div className="bg-white flex flex-col justify-start p-6">
        <div className="bg-gray-400 h-4 w-30 mb-4"></div>
        <div className="bg-gray-500 h-8 mb-4"></div>
        <div className="bg-gray-500 h-4 mb-3 w-1/4"></div>
        <div className="bg-gray-500 h-4 mb-6"></div>
        <div className="bg-gray-400 h-4 w-36"></div>
      </div>
    </article>
  );
};

export default BlogSkeleton;
