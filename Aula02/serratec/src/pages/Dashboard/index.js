import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {Resumo} from './styles';

import Header from '../../components/Header';
import api from '../../Services/API';

const Dashboard = () => {
  const [task, setTask] = useState([]);

  // const loadTaks = async () =>{
  //   const response = await api.get('tarefas');
  //   setTask(response.data);
  // }

  const loadTaks = useCallback(
    async () => {
      const response = await api.get('tarefas');
      setTask(response.data);
    }, []
  );

  const task_concluded_qtd = useMemo(
    () => {
      const filtered = task.filter(task => {
        return task.concluido === true;
      })

      return filtered.length;

    }, [task]
  )

  const task_qtd = useMemo(
    () => task.length, [task]
  )

  const task_pendente = useMemo(
    () => task_qtd - task_concluded_qtd, [task_qtd, task_concluded_qtd]
  )

  useEffect(() => {
    loadTaks();
  }, [loadTaks]);

  return (
    <>
      <Header title={'Resumo'} />
      <Resumo>
        { task_pendente === 0 ? (
          <h2>Parabéns você concluiu todas as tarefas</h2>
        ) : (
          <h2>Existem {task_pendente} tarefas pendentes</h2>
        )}
      </Resumo>

      <p><b>Total Tarefas: </b>{task_qtd}</p>
      <p><b>Tarefas concluídas: </b>{task_concluded_qtd}</p>
    </>
  )
}

export default Dashboard;
