import { useState } from "react";

export default function Redirects() {
  const [redirects, setRedirects] = useState([
    { id: 1, name: "Survey A", status: "active" },
    { id: 2, name: "Survey B", status: "inactive" },
  ]);

  return (
    <div>
      <h1>Survey Redirects</h1>
      <ul>
        {redirects.map((redirect) => (
          <li key={redirect.id}>
            {redirect.name} - {redirect.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
