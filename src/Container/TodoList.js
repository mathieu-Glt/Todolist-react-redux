import { connect } from 'react-redux'
import TodoList from '../TodoList'
//import { v4 as uuidv4 } from 'uuid';
import { addTaskTodo, deleteTodo, setDone, emptyTodo } from '../store'


const mapStateToProps = state => {
    console.log({state});
    return {
        todos: state.todos,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTaskToTodo: item => {
            dispatch(addTaskTodo(item))
        },

        deleteTaskTodo: itemId => {
            dispatch(deleteTodo(itemId))
        },

        setDoneTask: id => {
            dispatch(setDone(id))
        },

        resetTodos: item => {
            dispatch(emptyTodo())
        }
                
        
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoContainer;

