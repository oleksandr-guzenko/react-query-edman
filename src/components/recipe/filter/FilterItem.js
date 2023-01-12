import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { deleteFilter } from "../../../actions/filterActions";

function FilterItem({item, index}) {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters);

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