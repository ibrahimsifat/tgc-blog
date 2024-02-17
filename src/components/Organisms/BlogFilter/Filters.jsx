import Badge from "@components/atoms/Badge/Badge";
const HomeFilter = () => {
  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">About Us</p>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <Badge laval={"Tag"} />
          <Badge laval={"Tag"} />
          <Badge laval={"Tag"} />
          <Badge laval={"Tag"} />
          <Badge laval={"Tag"} />
        </div>
        <a
          href="#"
          className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
        >
          Get to know us
        </a>
      </div>

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">Instagram</p>
        <div className="grid grid-cols-3 gap-3">
          <Badge laval={"Tag"} />
          <Badge laval={"Tag"} />
          <Badge laval={"Tag"} />
          <Badge laval={"Tag"} />
          <Badge laval={"Tag"} />
        </div>
        <a
          href="#"
          className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
        >
          <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
        </a>
      </div>
    </aside>
  );
};
export default HomeFilter;
