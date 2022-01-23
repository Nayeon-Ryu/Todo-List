import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link'
import Date from '../components/date'
import TodoList from "../components/todoList";
import React, {useState, useEffect} from "react"
import { authService } from "../lib/fbase";
import Auth from "./Auth";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }
      setInit(true);
    });
  }, []);
  const isLoggedIn = Boolean(userObj)
  const logOut = () => {
    authService.signOut()
    window.location.href = "/"
  }

  return (
    <>
      {init ?
        <BrowserRouter>
          {isLoggedIn ? (
              <>
                <button onClick={logOut}>LogOut</button>
                <Layout>
                  <Head>
                    <title>{siteTitle}</title>
                  </Head>
                  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                      {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                          <Link href={`/posts/${id}`}>
                            <b className={utilStyles.blogTitle}>{title}</b>
                          </Link>
                          <br />
                          <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                          </small>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <TodoList userObj={userObj}/>
                  <br/>
                </Layout>
              </>
            ) : (
              <>
                <Auth />
              </>
          )}
        </BrowserRouter>
      : "Initializing..."}
      </>
  )
}
