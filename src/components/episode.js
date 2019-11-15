import React from "react"
import {
    useStaticQuery,
    graphql,
    Link
} from "gatsby"

const Episode = ({
    children
}) => {
    const data = useStaticQuery(graphql `
      query PodcastQuery {
        allFeedSongwriters {
            edges {
                node {
                    title
                    itunes {
                        image {
                            attrs {
                            href
                            }
                        }
                    }
                }
            }
        }
      }
    `)


    return ( 
    <Link to = "/">
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src={data.allFeedSongwriters.edges[0].node.itunes.image.attrs.href} alt="Placeholder image" />
                </figure>
            </div>
        <p> {data.allFeedSongwriters.edges[0].node.title } </p>
        </div>
        
    </Link>
    )
}



export default Episode