export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{project.name}</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">{project.type.name}</h5>
        <p>{project.type.description}</p>
        <p></p>
      </div>
    </div>
  );
}
