import utilStyles from '../styles/utils.module.css'
import Todo from './todo';
import React, {useEffect, useState} from "react"
import { dbService, storageService } from "../lib/fbase";
import {Form, Input, Checkbox, Button} from "antd";

const TodoList = ({userObj}) => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    // const getTodos = async () => {
    //     const dbNweets = await dbService.collection("todo_lists").get();
    //     dbNweets.forEach(document => {
    //         const nweetObject = {
    //             ...document.data(),
    //             id: document.id,
    //         }
    //         setTodos(prev => [nweetObject, ...prev]);
    //     });
    //     console.log(todos);
    // }
    useEffect(() => {
        // getTodos();
        // onSnapshot 은 기본적으로 DB 에 무슨 일이 있을 때 알림을 받음.(CRUD 전부)
        dbService.collection("todo_lists").orderBy("create_date").onSnapshot(snapshot => {
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
        if (todo != "") {
            console.log("here")
            await dbService.collection("todo_lists").add({
                text: todo,
                done: false,
                author_uid: userObj.uid,
                create_date: Date(),
            });
            setTodo("");
        } else {
            const ok = window.confirm("Enter first.");
        }
    };
    const onChange = (event) => {
        const {target: {value}} = event;
        setTodo(value);
    };

    return (
        <section className={utilStyles.headingMd}>
            <b>[Todo List]</b>
            <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onChange}
      onFinishFailed={onChange}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>


            <hr/>
            <Form onSubmit={onSubmit}>
                <Input type="text" onChange={onChange} maxLength={120} placeholder="What's your todo?" value={todo}></Input>
                <Input type="submit" value="Todo" />
            </Form>
            <div>
                {todos.map(todo => {
                    if (todo.author_uid == userObj.uid)
                        return <Todo key={todo.id} todoObj={todo} />
                })}
            </div>
        </section>
    )
}

export default TodoList;