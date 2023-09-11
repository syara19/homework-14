import { getBookDetail } from "@/app/fetching/book";

export default async function Book({ params }) {
  const { id } = params;
  const book = await getBookDetail(+id);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl p-4">
        <div className="bg-white rounded-xl shadow-2xl p-36">
          <div className="">
            <img
              src={`http://localhost:3000/${book?.image}`}
              alt="Book Cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-8">
            <p className="text-gray-500 text-3xl ">Title: {book?.title}</p>
            <p className="text-gray-500 text-3xl">Author: {book?.author}</p>
            <p className="text-gray-500 text-3xl">Publisher: {book?.publisher}</p>
            <p className="text-gray-500 text-3xl">Pages: {book?.pages}</p>
            <p className="text-gray-500 text-3xl">Year: {book?.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
