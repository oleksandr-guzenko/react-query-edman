import React from 'react'

function FilterItem({item}) {
  return (
    <span className="border border-secondary rounded-pill px-3 py-1 d-inline-block mb-2 me-1">
        {item.type} - {`${item.min}-${item.max}mg`} {" "}
        <span className="fa fa-times" style={{cursor: 'pointer'}}></span>
    </span>
  )
}

export default FilterItem