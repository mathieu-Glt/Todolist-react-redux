import React, { useState } from 'react';
import styled from 'styled-components';

const TodoList = (props) => {
    console.log({props});
  /**
   * Defining two local states to store
   * - The newTodo text (from input)
   * - The list of todos coming from the store
   */
  const [newTodo, setNewTodo] = useState('');
  //const [todos, setTodos] = useState([]);

  /**
   * At component mounting, subscribe to the store
   * then call the syncStore() method
   */

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleCreate = (event) => {
    props.onAddTaskToTodo(newTodo)
    setNewTodo('')
  }

  const handleDelete = (itemId) => {
    // console.log(itemId);
    props.deleteTaskTodo(itemId)
    //console.log(props.todos);
  }

  const handleDone = (id) => {
    // console.log(id);
     props.setDoneTask(id)
  }

  const handleReset = () => {
    // console.log('RESET');
    props.resetTodos()
  }





  

  return (
    <Wrapper>
      <NewTodo>
        <Input
          type="text"
          value={newTodo}
          onChange={handleChange}
        />
        <Button onClick={handleCreate}>Créer le todo</Button>
      </NewTodo>

      <ul>
        {typeof props.todos}
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          >
            {todo.content}

            <Button onClick={() => handleDone(todo.id)}>Fait</Button>
            <ButtonDelete onClick={() => handleDelete(todo.id)}>Supprimer</ButtonDelete>

          </TodoItem>
        ))}
      </ul>

      <ResetButton onClick={handleReset}>Réinitialiser les TODO</ResetButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 48rem;
  background: #fff;
  padding: 1rem;
  border-radius: 6px;
`;

const NewTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    margin: 0 0.5rem;
  }
`;  

const Input = styled.input`
  height: 40px;
  padding: 0 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const Button = styled.button`
  height: 40px;
  border: 0;
  background: #5352ed;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 6px;
  padding: 0 2rem;
  margin-left: 1rem;
`;

const ButtonDelete = styled(Button)`
  background:  #ffc031;
  margin: 2rem 0;
`

const ResetButton = styled(Button)`
  background: #ff4757;
  margin: 2rem 0;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f5f5;
  color: ${props => props.todo.done ? '#ccc' : '#404040'};
  text-decoration: ${props => props.todo.done ? 'line-through' : 'initial'};
  opacity: ${props => props.todo.ended ? 0  : 1} 
`;

export default TodoList;
