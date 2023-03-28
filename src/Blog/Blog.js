import { useEffect, useState } from 'react'
import { Card } from './Card.js'

export function Blog() {
    const [blogPostData, setBlogPostData] = useState(null)
    const [err, setErr] = useState(null)

    useEffect(() => {
        fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setBlogPostData(data)
        })
        .catch(e => {
            console.error(e)
            setErr(e)
        })
    }, [])

    if (err !== null) {
        return <div>There was an error retrieving the blog posts.</div>
    }

    if (blogPostData === null) {
        return <div>There are no blog posts.</div>
    }

    return (
        <>
            {
                blogPostData.map((e, i) =>
                    <Card key={i} data={e} />
                )
            }
        </>
    )
}