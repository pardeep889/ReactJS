import React from 'react';
// functional based components
const Header = (props)=>{
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand"> WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a >Home</a></li>
                <li><a >Page 1</a></li>
                <li><a >Page 2</a></li>
                <li><a >Page 3</a></li>
                </ul>
            </div>
            <input type='text' onChange={props.getkeys} className='form-control' placeholder='search item...'/>
        </nav>
    )
}

export default Header;