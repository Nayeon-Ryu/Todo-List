import utilStyles from '../styles/utils.module.css'
import Todo from './todo';
import React, {useEffect, useState} from "react"
import { dbService, storageService } from "../lib/fbase";
import Comment from './comment';

const Comments = ({postId, userId}) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    useEffect(() => {
        dbService.collection(`posts/${postId}/comments`)/* .orderBy("date") */.onSnapshot(snapshot => {
            const commentArray = snapshot.docs.map( (doc) => 
                ({
                    id: doc.id, // 자기 document 아이디 넣는 코드
                    ...doc.data(),
                }),
            );
            setComments(commentArray);
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        if (comment != "") {
            await dbService.collection(`posts/${postId}/comments`).add({
                date: Date(),
                text: comment,
                parent: null,
                writer: userId,
            });
            setComment("");
        } else {
            const ok = window.confirm("Enter first.");
        }
    };
    const onChange = (event) => {
        const {target: {value}} = event;
        setComment(value);
    };

    return (
        <section>
            <form onSubmit={onSubmit}>
                comment:
                <input onChange={onChange} type="text" value={comment}></input>
                <button type="submit">submit</button>
            </form>
            <div>
            {comments.map(comment =>
                <Comment key={comment.id} commentObj={comment}  postId={postId} />
            )}
            </div>
        </section>
    )
}

export default Comments;