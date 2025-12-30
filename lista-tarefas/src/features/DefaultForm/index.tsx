//Css
import style from './DefaultForm.module.css';

//React
import React, { useState } from "react";

//Componets
import { Inputs } from "../../components/Inputs";
import { Label } from "../../components/Label";
import { Buttons } from "../../components/Buttons";

//types
import type { Tasks } from "../../types";

//custom hook
import { useContextTodo } from "../../contexts";

export const DefaultForm = () => {
   // variaveis
   const { state, dispatch } = useContextTodo();

   const [task, setTask] = useState('');

   //Envio do formulário
   const handleSubmit = (e: React.FormEvent) => {

      e.preventDefault();

      //Não enviar campo vazio
      const text = task.trim();

      if (!text) return;

      //Criar nova tarefa
      const newTask: Tasks = {
         id: Date.now(),
         text,
         completed: false
      };

      //enviar o dispatch
      dispatch({ type: "ADD_TODO", payload: newTask });

      //Resetar o input
      setTask('');
   };

   return (
      <form
      className={`${style.form}`}
      onSubmit={handleSubmit}>

         {/* Só a parecer as checkbox se houver tarefas */}
         {state.todo.length > 0 &&
            <div className={`${style.checkboxBox}`}>
               <Label
                  className={`${style.labelCheckbox}`}>
                  <Inputs
                     className={`${style.inputCheckbox}`}
                     type="checkbox"
                     checked={state.filter.showCompleted}
                     onChange={e =>
                        dispatch({
                           type: "SET_FILTER",
                           payload: {
                              showCompleted: e.target.checked,
                              showPending: state.filter.showPending
                           }
                        })
                     }
                  />
                  Tarefas feitas
               </Label>
               <Label
                  className={`${style.labelCheckbox}`}>
                  <Inputs
                     className={`${style.inputCheckbox}`}
                     type="checkbox"
                     checked={state.filter.showPending}
                     onChange={e =>
                        dispatch({
                           type: "SET_FILTER",
                           payload: {
                              showCompleted: state.filter.showCompleted,
                              showPending: e.target.checked,
                           }
                        })
                     }
                  />
                  Tarefas não feitas
               </Label>
            </div>
         }

         <Label htmlFor="task" className={`${style.labelText}`}>
            Nova Tarefa:
         </Label>
         <Inputs
            className={`${style.inputText}`}
            id="task"
            maxLength={50}
            autoComplete='off'
            type="text"
            value={task}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
            placeholder="Digite uma nova tarefa"
         />
         <Buttons
            className={`${style.btnCriar}`}
            type="submit">
            Criar
         </Buttons>
      </form>
   );
};