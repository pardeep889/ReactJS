import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props)=>{
    // console.log(props.news);

    const items = props.news.map((item)=>{
        return(
            <NewsItem key={item.id} item={item}/>
        )
    });

    // const iterable = props.news
    //     Object.keys( iterable ).forEach( key => {
    //         console.log( iterable[key] );
    //     });
    return(
        <div>        
            {items}
        </div>
    )
}
export default NewsList;