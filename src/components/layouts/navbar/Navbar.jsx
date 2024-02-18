"use client";
import Logo from "@assets/images/logo.svg";
import Container from "@components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { languages } from "../../../app/i18n/settings";

const AR_FLAG =
  "https://upload.wikimedia.org/wikipedia/commons/f/f8/Saudi_arabia_flag_large.png";

const EN_FLAG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/800px-Flag_of_the_United_States.png?20110131151900";

const Navbar = ({ lng }) => {
  const { query } = useRouter();
  const pathname = usePathname();
  return (
    <>
      <div className="bg-white sticky top-0 z-20">
        <Container>
          <div className="h-6  flex items-center justify-between  mx-auto">
            <Link
              href={`/${lng}`}
              className="mr-3 lg:mr-12 xl:mr-12 text-white font-extrabold text-xl"
            >
              <Image width={110} height={40} src={Logo} alt="logo" />
            </Link>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0 ">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30"></div>
            </div>
            <div className=" items-center flex  pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="sm:block">
                {languages
                  .filter((l) => lng !== l)
                  .map((l) => {
                    return (
                      <span key={l}>
                        <Link
                          href={`/${l}/${pathname.slice(7)}?${query ?? ""}`}
                        >
                          <Image
                            width={40}
                            height={15}
                            src={l === "ar-SA" ? AR_FLAG : EN_FLAG}
                            className="ml-2"
                            alt="logo"
                          />
                        </Link>
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
export default Navbar;
