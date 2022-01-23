import { dbService } from "../lib/fbase";
import React, {useState} from "react";
import utilStyles from '../styles/utils.module.css';
import {Button, Form, Input} from "antd";

const Comment = ({commentObj, postId}) => {
    const [editing, setEditing] = useState(false);
    const [newComment, setNewComment] = useState(commentObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this comment?");
        if (ok) {
            await dbService.doc(`posts/${postId}/comments/${commentObj.id}`).delete();
        }
    }
    const toggleEditing = () => setEditing(prev => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`posts/${postId}/comments/${commentObj.id}`).update({
            text: newComment,
        });
        setEditing(false);
    }
    const onChange = (event) => {
        setNewComment(value);
        const {
            target: {value},
        } = event;
    }
    const addComment = (event) => {
        setNewComment(value);
        const {
            target: {value},
        } = event;
    }

    return (
        <div>
            { editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} type="text" placeholder="Edit your comment" value={newComment} required />
                        <button type="submit">Update Comment</button>
                        <Button onClick={toggleEditing}>Cancel</Button>
                    </form>
                </>
            ) : (
                <div className={utilStyles.comment}>
                    <p>{commentObj.text}</p>
                    <img src="../images/trashCan.jpg" onClick={onDeleteClick} width="25" height="25"></img>
                    <Button onClick={toggleEditing}>Edit</Button>
                    <Button onClick={addComment}>Add Comment</Button>
                </div>
            )}
        </div>
    );
};

export default Comment;