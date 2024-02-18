import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CiFaceFrown } from "react-icons/ci";

export default function NotFound({ lng }) {
  const { t } = useTranslation(lng);
  return (
    <main className="md:mt-20 mt-10 flex h-full flex-col items-center justify-center gap-2">
      <CiFaceFrown size={100} color="red" className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">{t("blogs.notfound1")}</h2>
      <p>{t("blogs.notfound2")}</p>
      <Link
        href={`/${lng}`}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        {t("blogs.notfound.back")}
      </Link>
    </main>
  );
}
