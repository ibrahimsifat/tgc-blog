import Link from "next/link";

export default function Page({ params: { lng, id } }) {
  console.log(id);
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>back</Link>
    </>
  );
}
