import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function CreateBlog() {
  const qc = useQueryClient();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      await fetch("http://localhost:3001/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, author }),
      });
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blogs"] }),
  });

  return (
    <div>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Author" onChange={e => setAuthor(e.target.value)} />
      <textarea placeholder="Content" onChange={e => setContent(e.target.value)} />
      <button onClick={() => mutation.mutate()}>Create</button>
    </div>
  );
}
