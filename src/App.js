import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el Curso de Intro a React.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'LALALA', completed: false},
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch />
    
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
          key = {todo.text}
          text = {todo.text}
          completed = {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
