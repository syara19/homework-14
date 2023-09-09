import Link from "next/link";

export default function Books({ id,title, author, image, year }) {
  return (
    <Link href={`/books/${id}`}>
      <div className="card card-compact w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={`http://localhost:3000/${image}`}
            alt="img"
            className="aspect-1/1 object-fill"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title} ({year})
          </h2>
          <p>{author}</p>
        </div>
      </div>
    </Link>
  );
}
