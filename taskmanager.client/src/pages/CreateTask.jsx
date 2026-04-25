import { useState } from 'react';
import { createTask } from '../services/taskService';

export default function CreateTask() {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createTask(title);

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título"
            />  
            <button type="submit">Guardar</button>
        </form>
    );
}