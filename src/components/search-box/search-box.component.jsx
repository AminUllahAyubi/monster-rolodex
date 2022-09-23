import React from "react";
import './search-box.style.css';
export const SearchBox = (props) => {
    return (
        <div>
            <input type='search' className="search-box"
                placeholder={props.placeholder}
                onChange={(e) => { props.onChange(e) }}>
            </input>
        </div>
    );
} 