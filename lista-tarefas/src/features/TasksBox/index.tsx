//Css
import style from './TasksBox.module.css';

//custom hook
import { useContextTodo } from "../../contexts";

export const TasksBox = () => {
   //variaveis
   const { state, dispatch } = useContextTodo();

   //Variável para filtrar feitas e não feitas
   const filtered = state.todo.filter(t => {
      if (t.completed && !state.filter.showCompleted) return false;
      if (!t.completed && !state.filter.showPending) return false;
      return true;
   });


   //Função para trocar "concluir" e "desfazer"
   const toggleTodo = (id: number) => {
      dispatch({ type: "TOGGLE_TODO", payload: id });
   };

   //Função para remover a tarefa clicada
   const removeTodo = (id: number) => {
      dispatch({ type: "REMOVE_TODO", payload: id });
   };

   //Função para limpar todas as tarefas
   const resetState = () => {
      dispatch({ type: "RESET_TODO" });
   };

   return (
      <>
         <section>
            <div
               className={`${style.h1Box}`}
            >
               <h1>Tarefas</h1>
               {state.todo.length > 0 &&
                  <button onClick={resetState}>Limpar</button>
               }
            </div>
            <div className={`${style.tasks}`}>
               {state.todo.length <= 0 &&
                  <p
                     className={`${style.empty}`}>
                     Sem Tarefas
                  </p>}
               {filtered.map(t => (
                  <div key={t.id}
                     className={`${style.task} ${t.completed ? style.concluido : ''}`}
                  >
                     <p>{t.text}</p>
                     <div
                        className={`${style.btns}`}
                     >
                        <button
                           className={t.completed ? style.desfazer : style.concluir}
                           onClick={() => toggleTodo(t.id)}>
                           {t.completed ? "Desfazer" : "Concluir"}
                        </button>
                        <button
                           className={style.apagar}
                           onClick={() => removeTodo(t.id)}>
                           Apagar
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </>
   );
};