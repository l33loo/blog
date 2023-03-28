export function Card(data, key) {
    const content = data.data
    const date = new Date(content.date)
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    
    return (
        <div key={key}>
            <div>{content._embedded["wp:term"][2][0] ? content._embedded["wp:term"][2][0].name : "General"}</div>
            <h2>
                <a href={content.link}>{content.title.rendered}</a>
            </h2>
            <img src={content.featured_media} />
            <div>
                By
                &nbsp;
                {
                    content._embedded.author.map(e => 
                        <a key={e.id} href={e.url}>{e.name}</a>    
                    )
                }
                &nbsp;
                on 
                &nbsp;
                {
                    date.toLocaleDateString('en-EN', dateOptions)
                }
            </div>
            <div>{content._embedded["wp:term"][0][0].name}</div>
        </div>
    )
}