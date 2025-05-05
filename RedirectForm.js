import { useState } from "react";

export default function RedirectForm() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("active");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like saving the redirect data
    console.log({ name, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Survey Name"
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button type="submit">Add Redirect</button>
    </form>
  );
}
