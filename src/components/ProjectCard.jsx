import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2>{project.name.toUpperCase()}</h2>
        <Link to={`${project.id}`} className="btn btn-primary">
          Visualizza
        </Link>
      </div>
      <div className="card-body">
        <h3 className="card-title">{project.type.name}</h3>
        <p>{project.type.description}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <small className="bg-info">
          {project.created_at.slice(0, 19).replace("T", " ")}
        </small>
        <small className="bg-info">
          {project.updated_at.slice(0, 19).replace("T", " ")}
        </small>
      </div>
    </div>
  );
}
