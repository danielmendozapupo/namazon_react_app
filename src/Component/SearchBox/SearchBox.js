import React, {Component} from 'react';

/*class SearchBox extends Component{
    render(){
        const {search, value} = this.props;
        return(
            <input className={'search'}
            placeholder={''}
            onChange={(e) => search(e.target.value)}
            value={value}/>
        );
    }
}*/

const SearchBox = ({handleChange}) =>{ //extracting the values from the props
    return(
        <div className='search'>
            <input type ='search'
                   className='_search'
                   onChange={handleChange}
            />
        </div>
    )
}

export default SearchBox;