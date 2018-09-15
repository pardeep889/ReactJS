import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import Header from './components/header';
import Footer from './components/footer';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
const App1 =()=>{
    return (
    <section>
    <h1>Date and Time is: {Date()}</h1>
    <div className="test">Timestamp is: {Date.now()}</div>
    <div className="year"> Current Year is: {getYear()}</div>
    </section>
    )
}


const App2 =()=>{
    return React.createElement('div',{className: 'container'},'I am inside container class');
}

// Components
const App3 = () =>{
    return (      
          <Header/>       
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

//watch 9th vedio