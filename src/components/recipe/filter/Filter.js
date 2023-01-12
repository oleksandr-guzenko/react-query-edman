import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import FilterItem from "./FilterItem";
import { setSearch, doSearch } from "../../../actions/filterActions";

function Filter() {
    const dispatch = useDispatch();
    const { filters, search } = useSelector(state => state.filters);

    const filterItems = filters.map((value, index) => <FilterItem key={`filter-${index}`} index = {index} item={value} />);

    const deleteSearch = () => {
        dispatch(setSearch(''));
    }

    return (
        <div className="pt-3">
            { search !== '' && (
                <span className="border border-secondary rounded-pill px-3 py-1 d-inline-block mb-2 me-1">
                    <span className="fa fa-check-circle text-success"></span>
                    { ` ${search} `}
                    <span className="fa fa-times" onClick={deleteSearch} style={{cursor: 'pointer'}}></span>
                </span>
            )}
            {filterItems}
            <div className="text-center mt-3">
                <button className="btn btn-success px-5" onClick={e => doSearch()}>SEARCH</button>
            </div>
        </div>
    )
}

export default Filter