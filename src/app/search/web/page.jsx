import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  const result = data.items;
  if (!result) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try saerching the web or images for something else
          <Link className="text-blue-500" href="/">
            {" "}
            Home
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div>
      {result &&
        result.map((result) => <h1 key={result.title}>{result.title}</h1>)}
    </div>
  );
}
