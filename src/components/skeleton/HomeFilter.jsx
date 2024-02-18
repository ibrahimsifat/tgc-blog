const HomeFilter = () => {
  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5 bg-gray-300 h-6 w-3/4 mb-4"></p>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <div className="bg-gray-400 h-12 w-full"></div>
          <div className="bg-gray-400 h-12 w-full"></div>
          <div className="bg-gray-400 h-12 w-full"></div>
          <div className="bg-gray-400 h-12 w-full"></div>
          <div className="bg-gray-400 h-12 w-full"></div>
        </div>
        <div className="bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4 w-full bg-opacity-75"></div>
      </div>

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5 bg-gray-300 h-6 w-3/4 mb-4"></p>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-400 h-12 w-full"></div>
          <div className="bg-gray-400 h-12 w-full"></div>
          <div className="bg-gray-400 h-12 w-full"></div>
          <div className="bg-gray-400 h-12 w-full"></div>
          <div className="bg-gray-400 h-12 w-full"></div>
        </div>
        <div className="bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6 w-full bg-opacity-75">
          <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
        </div>
      </div>
    </aside>
  );
};

export default HomeFilter;
