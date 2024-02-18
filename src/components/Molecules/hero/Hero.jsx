"use client";
import { useTranslation } from "@/src/app/i18n/client";
import SearchBar from "@/src/components/Molecules/searchBar/SearchBar";
import Text from "@components/atoms/Text/Text";
import Link from "next/link";
import Container from "../../atoms/Container";

const Hero = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <section className="relative table w-full py-8 lg:py-10 bg-gradient-to-br to-secondary/20 via-primary/20 from-primary/20">
      <Container>
        <div className="grid grid-cols-1 justify-center text-center">
          <div className="">
            <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl  bg-clip-text text-transparent bg-gradient-to-r from-darkPrimary to-primary">
              {t("hero.title")}
            </h1>
            <div className=" max-w-xl mx-auto ">
              <Text color="lime-800" size="max-w-xl">
                Search for anything you want to learn, from programming to
                cooking to gardening.
              </Text>
            </div>
            <div className="mt-6 mb-3">
              <SearchBar />
            </div>

            <Text>
              Looking for help?
              <Link href="" className="text-primary">
                Get in touch with us
              </Link>
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
