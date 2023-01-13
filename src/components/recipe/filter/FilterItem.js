import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { deleteFilter } from "../../../actions/filterActions";

// description - Component to display a filter item
// params - item: filter information, index: index of selected filter in all selected filters

function FilterItem({item, index}) {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters);

  // description - remove the filter 

  const onClick = e => {
    filters.splice(index, 1)
    dispatch(deleteFilter(filters));
  }

  return (
    <span className="border border-secondary rounded-pill px-3 py-1 d-inline-block mb-2 me-1">
        {item.type} - {`${item.min}-${item.max}mg`} {" "}
        <span className="fa fa-times" style={{cursor: 'pointer'}} onClick={onClick}></span>
    </span>
  )
}

export default FilterItem