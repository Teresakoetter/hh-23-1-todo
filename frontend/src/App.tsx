import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import TodoGallery from "./TodoGallery";
import AddTodo from "./AddTodo";
import useTodos from "./useTodos";
import {ToastContainer} from "react-toastify";

function App() {

    const {todos, addTodo, deleteTodo, updateTodo} = useTodos()

    return (
        <div className="App">
            <ToastContainer autoClose={3000}/>
            <Header/>
            <TodoGallery todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            <AddTodo addTodo={addTodo}/>
        </div>
    );
}

export default App;
