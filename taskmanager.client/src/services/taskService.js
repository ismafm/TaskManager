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

export async function updateTask(id, task) {

        const res = await fetch(`/api/taskItem/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
    if (!res.ok) {
        alert("Ha ocurrido un error al crear la tarea");
        console.log("Error", await res.json());
        return;
    };

    alert('Tarea actualizada');
}
export async function listTasks() {
    const res = await fetch('/api/taskItem', {
        method: 'GET'
    });
    return res.json();
}
export async function getTask(id) {
    const res = await fetch(`/api/taskItem/${id}`, {
        method: 'GET'
    });
    return res.json();
}
export async function deleteTask(id) {
    const res = await fetch(`api/taskItem/${id}`, {
        method: 'DELETE'
    })
};