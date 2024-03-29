"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BiSearchAlt } from "react-icons/bi";
const SearchBar = ({ t }) => {
  // get pathname and search params
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // handle search input change
  const handleInputChange = (event) => {
    const params = new URLSearchParams(searchParams);
    const { value } = event.target;
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form className="relative max-w-xl mx-auto" onSubmit={handleSubmit}>
      <input
        defaultValue={searchParams.get("q")?.toString()}
        onChange={handleInputChange}
        type="text"
        id="search"
        name="search"
        className="pt-3 pr-40 rtl:pl-40 pb-4 pl-6 rtl:pr-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900/60 shadow dark:shadow-gray-800 border-none focus:ring-2 focus:ring-primary focus:outline-none  duration-200"
        placeholder={t("hero.inputPlaceholder")}
      />
      <button
        type="submit"
        className="ltr:block hidden btn absolute top-[2px] right-[3px] rtl:left-[3px] h-[46px] bg-primary hover:bg-dark_primary text-black rounded-full md:px-4 px-2"
      >
        <BiSearchAlt size={40} />
      </button>
    </form>
  );
};
export default SearchBar;
