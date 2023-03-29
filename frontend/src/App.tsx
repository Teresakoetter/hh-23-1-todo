import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import TodoGallery from "./TodoGallery";
import AddTodo from "./AddTodo";
import useTodos from "./useTodos";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoDetail from "./TodoDetail";

function App() {

    const {todos, addTodo, deleteTodo, updateTodo} = useTodos()

    return (
        <BrowserRouter>
            <div className="App">
            <ToastContainer autoClose={3000}/>
            <Header/>
            <Routes>
                <Route path='/todos' element={
                    <TodoGallery todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                }>

                </Route>
                <Route path='/todos/add'element={<AddTodo addTodo={addTodo}/>} ></Route>
                <Route path='/todos/:id' element={<TodoDetail />}></Route>
            </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
