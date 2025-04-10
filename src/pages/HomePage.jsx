import { useEffect } from "react";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const backendPort = import.meta.env.VITE_BACKEND_PORT;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}:${backendPort}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data.data));
  }, []);

  return (
    <div className="container">
      <div className="row flex-column gy-3 my-5">
        {projects.map((project) => (
          <div className="col">
            <ProjectCard key={project.id} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
