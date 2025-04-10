export default function HomePage() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const backendPort = import.meta.env.VITE_BACKEND_PORT;

  fetch(`${backendUrl}:${backendPort}/api/projects`)
    .then((res) => res.json())
    .then((data) => console.log(data));

  return <h1></h1>;
}
