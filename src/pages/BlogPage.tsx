import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../api/blogs";
import BlogList from "../components/BlogList";
import Navbar from "../components/Navbar";
import BlogHero from "../components/BlogHero";
import Footer from "../components/Footer";


export default function BlogsPage() {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  const location = useLocation();

  if (!data?.length) return null;

  const isIndexPage = location.pathname === "/blogs";

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <BlogHero />

      {/* BLOG LAYOUT */}
      <div
        className="px-6 sm:px-10 py-8
    grid grid-cols-1 md:grid-cols-12
    gap-6 md:gap-8
    bg-gray-100"
      >
        {/* LEFT */}
        <aside className="md:col-span-4 order-2 md:order-1 pr-4 sticky top-24 h-fit">
          <h3 className="text-lg mb-4 font-semibold text-gray-900">
            Latest Articles
          </h3>
          <BlogList />
        </aside>

        {/* RIGHT */}
        <main className="md:col-span-8 order-1 md:order-2">
          {isIndexPage && <Navigate to={`/blogs/${data[0].id}`} replace />}
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
