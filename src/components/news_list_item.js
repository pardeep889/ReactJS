import React from 'react';
// import { css } from 'glamor';
import classes from '../css/style.css';

const style = {
    marginBottom: 10
}

const NewsItem = ({item})=>{
    // console.log(props);

    // let news_item = css({
    //     padding:'20px',
    //     boxSizing:'border-box',
    //     borderBottom: '1px solid grey',
    //     textAlign: 'justify',
    //     ':hover': {
    //         color: 'red'
    //     },
    //     '@media(max-width: 500px)':{
    //         color: 'green'
    //     }
    // })

    // let news_item1 = css({
    //     background: 'lightgrey'
    // })
    // <div {...news_item} {...news_item1}>   use like this in the render for first <div>
    return(
        <div className={classes.news_item}>
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

