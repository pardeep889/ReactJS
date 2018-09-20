import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import NewsList from './components/news_list';
// import SearchBar from './components/search_bar';
import JSON   from './db.json';


//class based component start for sending data to all components with props
class App extends React.Component {
    state = {
        news:JSON,
        filtered: []
    }
    getKeys = (event) =>{
        let Keyword = event.target.value;
        // console.log(event.target.value)
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(Keyword) > -1
        });
        this.setState({
            filtered
        })
        // console.log(filtered)
    }
    render(){
        // console.log(this.state.news);
        return(
            <div>
                <Header getkeys = {this.getKeys}/>       
                <NewsList news = {this.state.filtered.length === 0 ? this.state.news : this.state.filtered}/>
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
ReactDOM.render(<App/>,document.querySelector('#main')); // without function
// end



// for filters first 
// class Searchbar extends React.Component{
//     getKeys = (event) =>{
//         let Keyword = event.target.value;
//         // console.log(event.target.value)
//         let filtered = JSON.filter(()=>{
//             return JSON.title.indexOf(Keyword);
//         });
//         console.log(filtered)
//     }
//     render(){
//         return(
//             <SearchBar getkeys = {this.getKeys}/>
//         )
//     }
// }
// ReactDOM.render(<Searchbar/>, document.querySelector('#search-bar'));
//end of filters


const App1 =()=>{
    return (
    <section className="container text-center jumbotron">
    <h5>Date and Time is: {Date()}</h5>
    <div className="test">Timestamp is: {Date.now()}</div>
    <div className="year"> Current Year is: {getYear()}</div>
    </section>
    )
}
// other way to create a component
const App2 =()=>{
    return React.createElement('div',{className: 'container'},'I am inside container class');
}

// for style
const style = {
    background: 'orange',
    textAlign: 'center',
    height: 50,
    padding:10
}

// Components  call functional
const App3 = () =>{
    return (      
            <div style={style}> Notice: <b> We will be down for tommorow </b></div>     
        )
}

// getKeyword=()=>{
//     console.log('test')
// }
// class based component call (footer)
const App4 = ()=>{
    return (
        <Footer keywords={this.getKeyword}/>
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

//watch last vedio section 2 for filters