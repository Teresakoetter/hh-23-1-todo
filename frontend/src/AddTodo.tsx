import {FormEvent, useState} from "react";
import {NewTodo} from "./Todo";
import {Button, TextField} from "@mui/material";

type AddTodoProps = {
    addTodo: (newTodo: NewTodo) => void
}


export default function AddTodo(props: AddTodoProps) {

    const [description, setDescription] = useState<string>('')


    function onSaveTodo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newTodo: NewTodo = {description: description, status: 'OPEN'}

        props.addTodo(newTodo)
    }

    return (
        <div>
            <form onSubmit={onSaveTodo}>
                <TextField label='Description'
                           value={description}
                           onChange={(event) => {
                               setDescription(event.target.value)
                           }}/>
                <Button className='mybutton' variant='contained' color="success" type='submit'>Save</Button>
            </form>
        </div>
    )
}
