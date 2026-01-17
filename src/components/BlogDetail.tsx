import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { Blog } from "../types/blog";

export default function BlogDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery<Blog>({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3001/blogs/${id}`);
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return null;

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
        <div className="space-y-6">
          {/* Cover Image */}
          <img
            src={data.coverImage}
            className="w-full h-105 object-cover rounded-xl"
          />

          <div className="flex justify-between gap-3">
            {/* Title  */}
            <h1 className="text-3xl font-bold">{data.title}</h1>
            {/* Share Button */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: data.title,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="w-fit inline-flex items-center gap-2 px-2 py-1 text-xs font-medium
               bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              🔗 Share Article
            </button>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-3 gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 mt-4">
            <div className="text-center">
              <p className="text-xs uppercase text-gray-400">Category</p>
              <p className="text-sm font-semibold text-gray-700">
                {data.category.join(", ")}
              </p>
            </div>

            <div className="text-center">
              <p className="text-xs uppercase text-gray-400">Read Time</p>
              <p className="text-sm font-semibold text-gray-700">5 mins</p>
            </div>

            <div className="text-center">
              <p className="text-xs uppercase text-gray-400">Date</p>
              <p className="text-sm font-semibold text-gray-700">
                {new Date(data.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700">{data.description}</p>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-p:text-gray-600">
            {data.content}
          </div>

          {/* Tags */}
          <div className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
            {data.tags?.map((tag) => (
              <span key={tag} className="px-2 py-1 text-sm bg-gray-200 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
