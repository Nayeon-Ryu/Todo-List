import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css'
import Comments from "../../components/comments";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import { dbService } from "../../lib/fbase";

export default function Post() {
    const [post, setPost] = useState();
    const [init, setInit] = useState(false);
    const router = useRouter()
    const postId = router.query.postId
    const userId = router.query.userId
    useEffect(() => {
        const bucket = dbService.collection(`posts`)
        bucket.doc(`/${postId}`).get()
        .then((doc) => {
            setPost(doc.data());
            setInit(true)
        });
    }, []);

    return (<>
        {init ?(
            // console.log(post.id)
            <>
                <Layout>
                    <Head>
                        <title>{post.title}</title>
                    </Head>
                        <article>
                        <h1 className={utilStyles.headingxl}>{post.title}</h1>
                        <div className={utilStyles.lightText}>
                            <Date dateString={post.date} />
                        </div>
                        <div>{post.content}</div>
                        </article>
                        <Comments postId={postId} userId={userId}/>
                </Layout>
            </>
            )
        : <p>Initailizing</p>}
        </>
    )
}
