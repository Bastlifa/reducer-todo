export const reducer = (state, action) => 
{
    switch(action.type)
    {
        case 'ADD':
            return [...state, action.todo]
        case 'TOGGLE_COMPLETED':
            return state.map(el => el.id === action.id ? {...el, completed: !el.completed, timeCompleted: Date.now()} : el)
        case 'CLEAR_COMPLETED':
            return state.filter(el => el.completed === false)
        default:
            return state
    }
}

export const initialState = 
[
    {
        item: "Learn about reducers",
        completed: false,
        id: Date.now(),
        timeCompleted: ''
    }
]