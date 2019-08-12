export const reducer = (state, action) => 
{
    switch(action.type)
    {
        case 'ADD':
            return [...state, action.todo]
        case 'TOGGLE_COMPLETED':
            return state.map(el => el.id === action.id ? {...el, completed: !el.completed} : el)
        default:
            return state
    }
}

export const initialState = 
[
    {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589
    }
]