import Hero from "@components/Molecules/hero/Hero";
import Blog from "./blogs";

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <Blog />
      <h1>Hello</h1>
    </>
  );
}
