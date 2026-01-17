import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../api/blogs";
import type { Blog } from "../types/blog";
import BlogCard from "./BlogCard";

export default function BlogList() {
  const { data, isLoading, error } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs</p>;

  return (
    <div className="flex flex-col gap-4">
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
