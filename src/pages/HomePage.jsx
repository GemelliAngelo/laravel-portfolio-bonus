import { useEffect } from "react";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const apiPort = import.meta.env.VITE_BACKEND_PORT;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}:${apiPort}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data.data));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">Boolean Projects</h1>

      <div className="row row-cols-1 row-cols-xxl-2 g-3 my-5">
        {projects ? (
          projects.map((project) => (
            <div key={project.id} className="col">
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className="position-absolute top-50 start-50 translate-middle">
            <i className="fa-solid fa-spin fa-circle-notch fa-2xl"></i>
          </div>
        )}
      </div>
    </div>
  );
}
