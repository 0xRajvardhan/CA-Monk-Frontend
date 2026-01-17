import { Routes, Route, Navigate } from "react-router-dom";
import BlogsPage from "./pages/BlogPage";
import BlogDetail from "./components/BlogDetail";
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blogs" replace />} />

      <Route path="/blogs" element={<BlogsPage />}>
        <Route index element={<Navigate to=":first" replace />} />
        <Route path=":id" element={<BlogDetail />} />
      </Route>

      <Route path="/create" element={<CreateBlog />} />
    </Routes>
  );
}

export default App;
