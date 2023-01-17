import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { deleteFilter } from "../../../actions/filterActions";

/** 
 * Display a filter item
 * @component
 * @param {Object} item - filter information
 * @param {number} index - index of selected filter in all selected filters
 */
function FilterItem({item, index}) {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters);

  /** 
   * Remove a filter
   * @function
   */
  const onClick = () => {
    filters.splice(index, 1)
    dispatch(deleteFilter(filters));
  }

  return (
    <span className="border border-secondary rounded-pill px-3 py-1 d-inline-block mb-2 me-1">
        {item.type} - {`${item.min}-${item.max}${item.unit}`} {" "}
        <span className="fa fa-times" style={{cursor: 'pointer'}} onClick={onClick}></span>
    </span>
  )
}

export default FilterItem