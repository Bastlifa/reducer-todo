export const reducer = (state, action) => 
{
    switch(action.type)
    {
        case 'ADD':
            return {...state, aTodos: [...state.aTodos, action.todo]}
        case 'TOGGLE_COMPLETED':
            return {
                ...state, 
                aTodos: state.aTodos.map(el => el.id === action.id ? {...el, completed: !el.completed, timeCompleted: Date.now()} : el)
            }
        case 'CLEAR_COMPLETED':
            return {...state, aTodos: state.aTodos.filter(el => el.completed === false) }
        default:
            return state
    }
}

export const initialState = 
{
    aTodos:
    [
        {
            item: "Learn about reducers",
            completed: false,
            id: Date.now(),
            timeCompleted: ''
        }
    ]
}