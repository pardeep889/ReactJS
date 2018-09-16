import React from 'react';
// class based component
import '../css/style.css'

class Footer extends React.Component{

    state = {
        keywords: 'hello'
    }

    myclickFunction(){
      
        console.log('i was clicked')
    }
    getText(event){
        this.setState({
            keywords:event.target.value
        })
        // console.log(event.target.value)
        // console.log('i was clicked')
    }
    render(){
        // console.log('i am rendering');
        console.log(this.state.keywords);
        return(
            <footer className='text-center'>
                <div className='footer' onClick={this.myclickFunction}>
                    Copyright &copy 2018
                </div>
                <div>
                    <input type='text' onChange={this.getText.bind(this)}/>
                </div>
            </footer>
        )
    }
}

export default Footer;