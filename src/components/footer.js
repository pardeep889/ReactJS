import React from 'react';
// class based component
import classes from '../css/style.css'

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
        console.log(this.props.keywords);
        const style1 = {
            background: 'blue'
        };
        console.log('i am rendering');
        console.log(this.state.keywords);

        if(this.state.keywords === ''){
            style1.background = 'red'
        }
        // else{
        //     style1.background = 'green'
        // }

        return(        
            <footer className='text-center'>
                <div className={classes.footer} onClick={this.myclickFunction}>
                    Copyright &copy 2018
                </div>
                <div style={style1}>
                    <input type='text' onChange={this.getText.bind(this)}/>
                </div>
            </footer>
        )
    }
}

export default Footer;