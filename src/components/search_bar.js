import React from 'react';

// functional component becuase there is no use of state remove render and this from functional components its react rule
const SearchBar = (props) => {
        return(
            <div className='text-center'>
                <input type='text' onChange={props.getkeys} className='form-control' placeholder='search item...'/>
            </div>
        )
}
export default SearchBar;




// we can also use class based component like below:

// class SearchBar extends React.Component{
//     render(){
//         return(
//             <div className='text-center'>
//                 <input type='text' onChange={this.props.getkeys} className='form-control' placeholder='search item...'/>
//             </div>
//         )
//     }
// }