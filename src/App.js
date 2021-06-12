import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import './App.css';
import Section from './components/Section';
import List from './components/List';
import axios from 'axios';

const appTitle = "To-Do App";



const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:3002/todo");
      setTodoList(data)
    }

    fetchData();
  }, []);

  const addTodo = async (item) => {
    const { data } = await axios.post("http://localhost:3002/todo", item);
    setTodoList((oldList) => [...oldList, data]);
  }

  const removeTodo = async (id) => {

    await axios.delete(`http://localhost:3002/todo/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id))

  }

  const editTodo = async (id, item) => {
    await axios.put(`http://localhost:3002/todo/${id}`, item)
  }

  return (
    <div className="ui container center aligned">
      <div className="ui card" style={{ width: "80%", marginTop: "15px", marginLeft: "10%" }}>
        <Section>
          <h1>{appTitle}</h1>
        </Section>

        <Section>
          <Form addTodo={addTodo} />
        </Section>

        <Section>
          <List list={todoList} removeTodo={removeTodo} editTodo={editTodo} />
        </Section>
      </div>
    </div>
  );
}

export default App;
