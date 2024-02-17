import Logo from "@assets/images/logo.svg";
import Button from "@components/atoms/Button/Button";
import Container from "@components/atoms/Container";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-white sticky top-0 z-20">
        <Container>
          <div className="h-6  flex items-center justify-between  mx-auto">
            <Link
              href="/"
              className="mr-3 lg:mr-12 xl:mr-12 text-white font-extrabold text-xl"
            >
              <Image width={110} height={40} src={Logo} alt="logo" />
              {/* <Text color="dark" weight="extrabold" size="2xl">
                Blog
              </Text> */}
            </Link>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0 ">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30"></div>
            </div>
            <div className=" items-center flex absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <div className="hidden sm:block">
                <Button size="md" bg="primary">
                  About Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
// export default Navbar;
