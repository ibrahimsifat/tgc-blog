"use client";
import Pagination from "@components/Molecules/Pagination";
import Hero from "@components/Molecules/hero/Hero";
import HomePageSkelton from "@components/skeleton/HomePage";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Blog from "./blogs";
export default function Home({ params: { lng } }) {
  const [blogs, setBlogs] = useState([]);
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const query = searchParams.get("q") || "";
  const URL = process.env.NEXT_PUBLIC_SERVER_BLOG_URL;
  const perPage = 10;
  const totalPage = Math.ceil(30 / perPage);
  const router = useRouter();

  useEffect(() => {
    // Redirect to the default language path if the current path is '/'
    if (router.pathname === "/") {
      router.replace("/en-SA");
    }
  }, [router]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = [];
        if (lng === "ar-SA") {
          res = await fetch(
            `${URL?.replace(
              "blogss",
              "blogs_ar"
            )}&_page=${currentPage}&_per_page=${perPage}&q=${query}`
          );
        } else {
          res = await fetch(
            `${URL}&_page=${currentPage}&_per_page=${perPage}&q=${query}`
          );
        }

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setBlogs(result);
        // Set the original blogs when fetching data
        setOriginalBlogs(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setBlogs([]);
        setOriginalBlogs([]);
      }
    };

    fetchData();
  }, [URL, query, currentPage, lng]);

  // Filter blogs by category or tag
  const handleFilter = (target, value) => {
    if (!value) {
      setBlogs(originalBlogs);
      return;
    }

    const filteredBlogs = originalBlogs.filter(
      (blog) => blog[target]?.id === value
    );
    setBlogs(filteredBlogs);
  };

  return (
    <>
      <Hero lng={lng} />
      <Suspense key={query + currentPage} fallback={<HomePageSkelton />}>
        <Blog
          query={query}
          currentPage={currentPage}
          blogs={blogs}
          handleFilter={handleFilter}
          lng={lng}
        />
        {blogs?.length >= 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPage}
            baseRoute="/blogs"
            lng={lng}
          />
        )}
      </Suspense>
    </>
  );
}
