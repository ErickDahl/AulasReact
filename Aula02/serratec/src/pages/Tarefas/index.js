import React, {useState, useEffect} from 'react';
import {Title, Form, ErrorMessage, Task} from './styles';
import {FiCircle, FiCheckCircle } from "react-icons/fi";

import api from '../../Services/API';

const Tarefas = () => {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const loadTask = async () => {
        try {
            const response = await api.get('tarefas');
            console.log('loadTask', response.data);
            setTask(response.data)
        } catch (error) {
            console.log('loadTask error', error);        
        }     
    }

    useEffect(() => {
        loadTask();
    }, []);

    async function handleAddTask(e){
        e.preventDefault();

        if(newTask === ""){
            setErrorMessage("Digite a tarefa a ser adicionada");
            return;
        }

        const params = {
            descricao: newTask,
            concluido: false
        };

        try {
            await api.post('tarefas', params);

            loadTask();
            setNewTask('');

        } catch (error) {
            console.log('handleAddTask error', error);
        }

        console.log("foi");
    }

     const handleTask = async (task) => {
        const params = {
            ...task,
            concluido: !task.concluido
        }

        await api.put(`tarefas/${task.id}`, params);

        loadTask();
    };

    return(
        <>
            <Title>Tarefas</Title>

            <Form onSubmit={handleAddTask}>
                <input 
                value={newTask} 
                onChange={e => setNewTask(e.target.value)}
                type="text"
                placeholder="Escreve a tarefa"
                />
                <button type='submit'>criar</button>
            </Form>

            {errorMessage &&
                <ErrorMessage>{errorMessage}</ErrorMessage>
            }

            <Task>
                {task.map((task)=>{
                    return(
                        <div key={task.id}>
                            <strong>{task.descricao}</strong>
                            
                            <span>{task.concluido ? (
                                <FiCheckCircle size={22} onClick={() => handleTask(task)}/>
                                ) : (
                                <FiCircle size={22} onClick={() => handleTask(task)}/>
                            )}
                            </span>
                        </div>
                    )
                }) }
            </Task>
        </>
    )
}

export default Tarefas;