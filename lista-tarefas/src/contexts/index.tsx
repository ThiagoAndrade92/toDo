import React, { createContext, useContext, useEffect, useReducer, type Dispatch } from "react";
import type { ActionType, StateTodo } from "../types";

const initialState: StateTodo = {
   todo: [],
   filter: {
      showCompleted: true,
      showPending: true,
   }
};

const TodoContext = createContext<{
   state: StateTodo;
   dispatch: Dispatch<ActionType>;
}>({
   state: initialState,
   dispatch: () => null,
});

const todoReducer = (
   state: StateTodo,
   action: ActionType
): StateTodo => {
   switch (action.type) {
      case "ADD_TODO":
         return { ...state, todo: [...state.todo, action.payload] }
      case "TOGGLE_TODO":
         return {...state, todo: state.todo.map(t => 
            t.id === action.payload
            ? {...t, completed: !t.completed}
            : t
         )
      }
      case "REMOVE_TODO":
         return {...state, todo: state.todo.filter(t => 
            t.id !== action.payload
         )}
      case "RESET_TODO":
         return {...state, todo: []};
      case "SET_FILTER": 
         return {...state,
         filter: action.payload
      }
      default:
         return state;
   }
}

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
   const getInitialState = (): StateTodo => {
  const saved = localStorage.getItem('dadosSalvos');
  return saved ? JSON.parse(saved) : initialState;
};

   const [state, dispatch] = useReducer(todoReducer, undefined, getInitialState);

   useEffect(() => {
  localStorage.setItem('dadosSalvos', JSON.stringify(state));
}, [state]);

   return (
      <TodoContext.Provider value={{ state, dispatch }}>
         {children}
      </TodoContext.Provider>
   );
}

export const useContextTodo = () => {
   return useContext(TodoContext);
}