interface Todo {
  id: number,
  tarefa: string,
  status: string
}

const initialState: Todo[] = [];

const todos = (state = initialState, action:any ) => {
  switch (action.type) {
    case 'GET-TODOS': 
      return [
        ...action.payload
      ];
    case 'CLEAR-TODOS':
      return [
        ...initialState
      ];
    case 'ADD-TODO':
      return [
        ...state,
        action.payload
      ];
    case 'REMOVE-TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE-TODO':
      return state.map(todo => 
        (todo.id === action.payload) && status === "NAO_FINALIZADO"
        ? {...todo, status: "FINALIZADO"}
        : {...todo, status: "NAO_FINALIZADO"}
        )
    default: 
      return state; 
  }
}

export default todos;