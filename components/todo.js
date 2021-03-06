import { dbService } from "../lib/fbase";
import React, {useState} from "react";
import utilStyles from '../styles/utils.module.css'

const Todo = ({todoObj}) => {
    const [editing, setEditing] = useState(false);
    const [checked, setChecked] = useState(todoObj.done);
    const [newTodo, setNewTodo] = useState(todoObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if (ok) {
            // delete nweet
            await dbService.doc(`todo_lists/${todoObj.id}`).delete();
        }
    }
    const toggleEditing = () => setEditing(prev => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`todo_lists/${todoObj.id}`).update({
            text: newTodo,
        });
        setEditing(false);
    }
    const onChange = (event) => {
        setNewTodo(value);
        const {
            target: {value},
        } = event;
    }

    const check = async (event) => {
        setChecked((prev) => !prev)
        console.log(checked)
        await dbService.doc(`todo_lists/${todoObj.id}`).update({
            done: checked,
        });
    }
    return (
        <div>
            { editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} type="text" placeholder="Edit your todo" value={newTodo} required />
                        <input type="submit" value="Update Todo" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                    {checked
                        ? (
                            <>
                                <p className={utilStyles.checkedTodo}>{todoObj.text}</p>
                                <input type="checkbox" onChange={check} checked></input>
                            </>
                        )
                        : (
                            <>
                                <p className={utilStyles.unCheckedTodo}>{todoObj.text}</p>
                                <input type="checkbox" onChange={check}></input>
                            </>
                        ) 
                    }
                    <img src="images/trashCan.jpg" onClick={onDeleteClick} width="25" height="25"></img>
                    <button onClick={toggleEditing}>Edit</button>
                </>
            )}
        </div>
    );
};

export default Todo;