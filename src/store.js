import { configureStore, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const todoSlice = createSlice({
    name: 'todoList',
    initialState: {
        todos: [],
        user: {
            id: Math.floor((Math.random() * 100)),
            username: 'Mathieu',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U'
        }

    },
    reducers: {
        addTaskTodo: (state, action) => {
            const item = {
                id: uuidv4(),
                content: action.payload,
                ended: false,
                done: false
            }
            return {
                ...state,
                todos: [...state.todos, item]
            }

        },

        deleteTodo: (state, action) => {
            const item = state.todos.find((todo) => todo.id === action.payload)

            if (item) {
                console.log('Task fonnd', action.payload)
                item.ended = true
            } else {
                console.log('Task not found', action.payload);
            }
        },

        setDone: (state, action) => {
            const item = state.todos.find((todo) => todo.id === action.payload)
            if (item) {
                console.log('Task fonnd', action.payload)
                 item.done = true
            } else {
                console.log('Task not found', action.payload);
            }


        },

        emptyTodo: (state, action) => {
            console.log('Task reset');

            return {
                ...state,
                todos: []
            }
        }
    }
})

export const { addTaskTodo, deleteTodo, setDone, emptyTodo } = todoSlice.actions
// console.log(addTaskTodo({ id: 123, content: 'Hello World', done: false, ended: false }))

export const store = configureStore({
    reducer: todoSlice.reducer
})


