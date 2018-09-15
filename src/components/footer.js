import React from 'react';
// class based component
import '../css/style.css'

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='footer'>
                    Copyright &copy 2018
                </div>
            </footer>
        )
    }
}

export default Footer;