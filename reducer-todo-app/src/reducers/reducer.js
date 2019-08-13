export const reducer = (state, action) => 
{
    switch(action.type)
    {
        case 'ADD':
            return {...state, notNeeded: [...state.notNeeded, action.todo]}
        case 'TOGGLE_COMPLETED':
            return {
                ...state, 
                notNeeded: state.notNeeded.map(el => el.id === action.id ? {...el, completed: !el.completed, timeCompleted: Date.now()} : el)
            }
        case 'CLEAR_COMPLETED':
            return {...state, notNeeded: state.notNeeded.filter(el => el.completed === false) }
        default:
            return state
    }
}

export const initialState = 
{
    notNeeded:
    [
        {
            item: "Learn about reducers",
            completed: false,
            id: Date.now(),
            timeCompleted: ''
        }
    ]
}