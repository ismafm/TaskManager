import { useEffect, useState } from 'react';
import { listTasks, deleteTask } from '../services/taskService';
import { Link } from 'react-router-dom';

export default function ListTasks() {

    const [tasks, setTasks] = useState([])

    const deleteClick = async (id) => {
        await deleteTask(id);
        setTasks(prev => prev.filter(t => t.id !== id))
        alert("Tarea borrada")
    }
    useEffect(() => {
        const fetchTasks = async () => {
            const data = await listTasks();
            setTasks(data);
        }

        fetchTasks();
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(t =>
                    <tr key={t.id}>
                        <td>{t.id}</td>
                        <td>{t.name}</td>
                        <td>
                            <Link to={`/EditTask/${t.id}`}><button>EDITAR</button></Link>    
                            <button onClick={() => deleteClick(t.id)}>BORRAR</button>

                        </td>

                    </tr>
                )}

            </tbody>
        </table>
    );
}