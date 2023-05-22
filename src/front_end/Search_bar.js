import React from "react";
import './css/SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Search_bar () {
    return (
        <section className="search_bar_section">
            <div>
            <input type="text" placeholder="Praha 4 - Kolbenova" autoComplete="off"/>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            
        </section>
    )
}

export default Search_bar