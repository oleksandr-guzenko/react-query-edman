import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import FilterItem from "./FilterItem";

function Filter() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);

    const filterItems = filters.map((value, index) => <FilterItem key={`filter-${index}`} item={value} />);

    return (
        <div className="pt-3">
            {filterItems}
            <div className="text-center mt-3">
                <button className="btn btn-success px-5">SEARCH</button>
            </div>
        </div>
    )
}

export default Filter