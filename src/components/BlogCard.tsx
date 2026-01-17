import { Link, useLocation } from "react-router-dom";
import type { Blog } from "../types/blog";

type Props = { blog: Blog };

export default function BlogCard({ blog }: Props) {
  const location = useLocation();
  const isActive = location.pathname === `/blogs/${blog.id}`;

  return (
    <Link to={`/blogs/${blog.id}`} className="block">
      <div className="relative p-4 rounded-xl bg-white border border-gray-100 hover:shadow-md transition">
        {isActive && (
          <span className="absolute left-0 top-4 h-10 w-1 rounded-r bg-indigo-600" />
        )}

        <div className="flex justify-between text-xs uppercase mb-1">
          <span className="text-indigo-600 font-semibold">
            {blog.category.join(", ")}
          </span>
          <span className="text-gray-400">{blog.date}</span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 leading-snug">
          {blog.title}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2">{blog.description}</p>
      </div>
    </Link>
  );
}
