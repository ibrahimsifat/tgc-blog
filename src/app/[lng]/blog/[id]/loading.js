export default function Loading() {
  return <LoadingSkeleton />;
}
const LoadingSkeleton = () => {
  return (
    <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"></h1>
          </header>
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
        </article>
      </div>
    </main>
  );
};
