export interface Tasks {
   id: number;
   text: string;
   completed: boolean;
};

export type ActionType = 
| {type: "ADD_TODO", payload: Tasks}
| {type: "TOGGLE_TODO", payload: number}
| {type: "REMOVE_TODO", payload: number}
| { type: "SET_FILTER"; payload: { showCompleted: boolean; showPending: boolean } }
| {type: "RESET_TODO"};

export interface StateTodo {
   todo: Tasks[]; 
   filter: {
      showCompleted: boolean;
      showPending: boolean;
   };
};