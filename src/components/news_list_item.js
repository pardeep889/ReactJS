import React from 'react';
 
const style = {
    marginBottom: 10
}

const NewsItem = ({item})=>{
    // console.log(props);
    return(
        <div className='container jumbotron'>
            <div>
                <h3>{item.title}</h3>
                <div style={style}>
                    {item.feed}
                </div>
            </div> 
        </div>
    )
}

export default NewsItem;

