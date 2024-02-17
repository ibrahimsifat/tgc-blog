const Badge = ({ laval }) => {
  return (
    <button className="px-3 py-2 text-slate-800 hover:text-white  bg-gray-100 dark:bg-slate-800 text-sm hover:bg-primary  rounded-sm dark:shadow-gray-800 transition-all duration-300 ease-out border">
      {laval ?? ""}
    </button>
  );
};
export default Badge;
