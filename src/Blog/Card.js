export function Card(data, key) {
    const content = data.data
    const date = new Date(content.date)
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    
    return (
        <div className='col-4 u-equal-height'>
            <div key={key} className="flex-space-bw p-card u-align-text--left u-no-padding--top u-no-padding--bottom"
                style={{boxShadow: "0px 0px 3px 3px #ebebeb", borderTop: "solid 4px #a87ca0"}}>
                <div>
                    <div className="p-text--small-caps" style={{fontWeight: 300, paddingBottom: "0.4rem"}}>
                        {content._embedded["wp:term"][2][0] ?
                            content._embedded["wp:term"][2][0].name
                            :"General"
                        }
                    </div>
                    <hr className="is-muted" />
                    <img alt="" className="p-card__image" src={content.featured_media} />
                    <h2 className="p-heading--4">
                        <a href={content.link}>{content.title.rendered}</a>
                    </h2>
                </div>
                <div>
                    <div style={{fontWeight: 300, paddingBottom: "0.4rem"}}>
                        <i>
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
                        </i>
                    </div>
                    <hr className="is-muted"/>
                    <div className="p-text--small capitalized" style={{fontWeight: 300}}>
                        {content.type}
                    </div>
                </div>
            </div>
        </div>
    )
}