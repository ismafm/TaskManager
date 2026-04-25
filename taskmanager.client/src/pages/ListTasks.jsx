import { useEffect, useState } from 'react';
import { listTasks, deleteTask } from '../services/taskService';
import { Link } from 'react-router-dom';

export default function ListTasks() {

    const [tasks, setTasks] = useState([])

    const deleteClick = async (id) => {
        await deleteTask(id);
        setTasks(actual => actual.filter(t => t.id !== id))
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
                            <link to="/EditTask/{}"></link>    
                            <button onClick={() => deleteClick(t.id)}>BORRAR</button>

                        </td>

                    </tr>
                )}

            </tbody>
        </table>
    );
}