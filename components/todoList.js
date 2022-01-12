import utilStyles from '../styles/utils.module.css'
import Todo from './todo';
import React, {useEffect, useState} from "react"
import { dbService, storageService } from "../lib/fbase";

const TodoList = ({userObj}) => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        // getNweets();
        // onSnapshot 은 기본적으로 DB 에 무슨 일이 있을 때 알림을 받음.(CRUD 전부)
        dbService.collection(`${userObj.email}`).onSnapshot(snapshot => {
            const todoArray = snapshot.docs.map(
                doc => ({
                    id: doc.id,
                    ...doc.data(),
                }),
            );
            setTodos(todoArray);
        });
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        storageService.ref().child(`${userObj.email}/`);
        await dbService.collection(`${userObj.email}`).add({
            text: todo,
            done: false,
            userId: userObj.uid,
        });
        setTodo("");
    };
    const onChange = (event) => {
        const {target: {value}} = event;
        setTodo(value);
    };

    return (
        <section className={utilStyles.headingMd}>
            <b>[Todo List]</b>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} maxLength={120} placeholder="What's your todo?" value={todo}></input>
                <input type="submit" value="Todo" />
            </form>
            <div>
            {todos.map(todo =>
                <Todo key={todo.id} nweetObj={todo} todoObj={todo} />
            )}
            </div>
        </section>
    )
}

export default TodoList;