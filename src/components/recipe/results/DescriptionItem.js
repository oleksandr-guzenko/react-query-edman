import React from 'react'

/**
 * shows ingredients for a recipe
 * @component
 * @param {Object} item - an ingredient info item
 */
function DescriptionItem({item}) {
  return (
        <>
            <div className="col-xl-2 col-md-3 col-2 my-2">
                <img src={item.image} alt="recipe_img" className="w-100 img-thumbnail" />
            </div>
            <div className="col-xl-4 col-md-9 col-10 my-2 fw-bolder">{item.text}</div>
        </>
  )
}

export default DescriptionItem