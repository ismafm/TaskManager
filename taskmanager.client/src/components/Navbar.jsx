import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "#eee" }}>
            <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
            <Link to="/CreateTask">Crear tarea</Link>
            <Link to="/ListTasks">Lista de tareas</Link>
        </nav>
    );
}