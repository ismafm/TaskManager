import { useEffect, useState } from 'react';
import { getTask, updateTask } from '../services/taskService';
import { useParams } from 'react-router-dom';

export default function EditTask() {
    const { id } = useParams();

    const [task, setTask] = useState(null)

    const getTaskFunc = async () => {
        const data = await getTask(id);
        setTask(data);
    }
    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateTask(id, task);
    }

    useEffect(() => {
        getTaskFunc();
    }, [id])

    if (!task) return <div>Cargando...</div>;

    return (
        <form onSubmit={handleSubmit}>

            <input value={task.name}
                onChange={handleChange}
                name="name"
            ></input>

            <button type="submit">Guardar</button>


        </form>
    );
}