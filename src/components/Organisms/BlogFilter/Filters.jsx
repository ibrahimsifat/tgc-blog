"use client";
import { useTranslation } from "@/src/app/i18n/client";
import Badge from "@components/atoms/Badge/Badge";
import { useEffect, useState } from "react";
const HomeFilter = ({ lng, handleFilter }) => {
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const { t } = useTranslation(lng);
  let CATEGORY_URL = process.env.NEXT_PUBLIC_SERVER_CATEGORY_URL;
  let TAG_URL = process.env.NEXT_PUBLIC_SERVER_TAG_URL;

  // check local
  if (lng === "ar-SA") {
    CATEGORY_URL = CATEGORY_URL.replace("categories", "categories_ar");
    TAG_URL = TAG_URL.replace("tags", "tags_ar");
  }
  // fetch category data and tag data
  useEffect(() => {
    fetch(TAG_URL)
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, [TAG_URL]);

  useEffect(() => {
    fetch(CATEGORY_URL)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [CATEGORY_URL]);

  const handleCategoryClick = (e) => {
    handleFilter("category", e);
  };
  const handleTagClick = (e) => {
    handleFilter("tag", e);
  };

  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">{t("filter.category")}</p>

        <div className="flex flex-wrap gap-3">
          {categories?.map((category) => (
            <Badge
              key={category.id}
              label={category.name}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">{t("filter.tag")}</p>
        <div className="flex flex-wrap gap-3">
          {tags?.map((tag) => (
            <Badge
              key={tag.id}
              label={tag.name}
              onClick={() => handleTagClick(tag.id)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};
export default HomeFilter;
