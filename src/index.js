import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import NewsList from './components/news_list';
import JSON   from './db.json';


//class based component start for sending data to all components
class App extends React.Component {
    state = {
        news:JSON
    }
    render(){
        // console.log(this.state.news);
        return(
            <div>
                <Header/>       
                <NewsList news = {this.state.news}/>
            </div>
        )
    }
}
// const App5 = ()=>{
//     return (      
//         <App/>       
//       )
// }
// ReactDOM.render(<App5/>,document.querySelector('#main')); // with function
ReactDOM.render(<App/>,document.querySelector('#nav')); // without function
// end


const App1 =()=>{
    return (
    <section>
    <h1>Date and Time is: {Date()}</h1>
    <div className="test">Timestamp is: {Date.now()}</div>
    <div className="year"> Current Year is: {getYear()}</div>
    </section>
    )
}



// other way to create a component
const App2 =()=>{
    return React.createElement('div',{className: 'container'},'I am inside container class');
}

// Components  call functional
const App3 = () =>{
    return (      
            <div>Head</div>     
        )
}
// class based component call (footer)
const App4 = ()=>{
    return (
        <Footer/>
    )
}


// function 
const getYear = () =>{
    const newDate = new Date();
    return newDate.getFullYear(); 
}


ReactDOM.render(<App1/>,document.querySelector('#section-2'));
ReactDOM.render(<App2/>,document.querySelector('#section-3'));
ReactDOM.render(<App3/>,document.querySelector('#header'));
ReactDOM.render(<App4/>,document.querySelector('#footer'));

//watch 13th vedio section 2