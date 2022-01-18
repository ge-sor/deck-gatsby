import React from "react"

const Article = ({
                     content: {
                         title,
                         banner: {
                             file: {
                                 url
                             }
                         },
                         createdAt
                     }
                 }) => {

    return <div>
        <h2>{title}</h2>
        <img src={url} alt={title}/>
        <h5>{createdAt}</h5>
    </div>
}


export default Article