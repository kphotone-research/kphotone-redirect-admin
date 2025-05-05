import { useState } from "react";
import RedirectForm from "../components/RedirectForm"; // Import the form component

export default function Redirects() {
  const [redirects, setRedirects] = useState([
    { id: 1, name: "Survey A", status: "active" },
    { id: 2, name: "Survey B", status: "inactive" },
  ]);

  const addRedirect = (newRedirect) => {
    setRedirects((prevRedirects) => [...prevRedirects, newRedirect]);
  };

  return (
    <div>
      <h1>Survey Redirects</h1>
      {/* Render the RedirectForm component and pass addRedirect as a prop */}
      <RedirectForm onAddRedirect={addRedirect} />

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

