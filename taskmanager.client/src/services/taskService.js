import { useState } from 'react';

export async function createTask(name) {

        const res = await fetch('/api/taskItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });

        alert('Tarea creada');

    return res.json()
}
export async function listTasks() {
    const res = await fetch('/api/taskItem', {
        method: 'GET'
    });
    return res.json();
}
export async function deleteTask(id) {
    const res = await fetch(`api/taskItem/${id}`, {
        method: 'DELETE'
    })
};