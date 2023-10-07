import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <h1 className="font-semibold text-2xl">
            Oops! This Page Could Not Be Found
          </h1>

          <Link to={"/"}>
            <button
              type="button"
              className="px-4 py-2 text-xl font-semibold rounded bg-blue-500 text-gray-50 hover:text-gray-200"
            >
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
