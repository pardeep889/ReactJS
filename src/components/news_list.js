import React from 'react';

const NewsList = (props)=>{
    console.log(props.news);
    return(
        <div>
            {props.news[0].title}
        </div>
    )
}
export default NewsList;