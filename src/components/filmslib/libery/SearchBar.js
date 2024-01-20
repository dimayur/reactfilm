import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [active, setActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const searchToggle = () => {
        setActive(!active);
        if (!active) {
            setSearchValue('');
        }
    };

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        setSearchValue(value);
        onSearch(value);
    };

    return (
        <div className={`search-wrapper ${active ? 'active' : ''}`}>
            <div className="input-holder">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Type to search"
                    value={searchValue}
                    onChange={handleInputChange}
                />
                <button className="search-icon" onClick={searchToggle}>
                    <span></span>
                </button>
            </div>
            <span className="close" onClick={searchToggle}></span>
        </div>
    );
};

export default SearchBar;
