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

    let content

    if (err !== null) {
        content = <div>There was an error retrieving the blog posts.</div>
    }  else if (blogPostData === null) {
        content = <i class="p-icon--spinner u-animation--spin"></i>
    } else if (blogPostData.length === 0) {
        content = <div>There are no blog posts.</div>
    } else {
        content = <div className="row">
            {
                blogPostData.map(e =>
                    <Card key={e.id} data={e} />
                )
            }
        </div>
    }

    return (
        <>
            <h1>Blog</h1>
            {content}
        </>
    )
}