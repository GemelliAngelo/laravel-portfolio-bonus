import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPage() {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const apiPort = import.meta.env.VITE_BACKEND_PORT;
  const { id } = useParams();

  const [project, setProject] = useState();

  useEffect(() => {
    fetch(`${apiUrl}:${apiPort}/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data.data));
  }, []);

  return (
    <div className="container">
      {project ? (
        <>
          <div className="my-5">
            <h1>{project.name.toUpperCase()}</h1>
            <small>{project.worked_on_date}</small>
          </div>
          <div className="d-flex gap-2 my-3">
            {project.technologies.map((technology) => (
              <span
                key={technology.id}
                className="badge"
                style={{ backgroundColor: technology.color }}
              >
                {technology.name}
              </span>
            ))}
          </div>
          <p>{project.content}</p>
          <hr />
          <h3>{project.type.name}</h3>
          <p>{project.type.description}</p>
        </>
      ) : (
        <div className="position-absolute top-50 start-50 translate-middle">
          <i className="fa-solid fa-spin fa-circle-notch fa-2xl"></i>
        </div>
      )}
    </div>
  );
}
