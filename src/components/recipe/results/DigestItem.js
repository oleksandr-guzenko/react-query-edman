import React from 'react'
import { useSelector } from "react-redux";
import classnames from "classnames";
import { v4 as uuidv4 } from "uuid";

import nutrientsInfo from '../nutrients.json';

/** 
 * Display the nutrient quantity
 * @param {Object} item - the nutrient information
 */
function DigestItem({item}) {
    const filters = useSelector(state => state.filters.filters);
    const index = filters.findIndex(value => value.tag === item.tag);
    const subDigestItems = item.sub? item.sub.map(value => <DigestItem item={value} key={uuidv4()} />) : [];

    return (
        <>
            <div className="col-xxl-6">
                <div className={classnames('border py-1 px-2 mb-1 rounded-3 border-secondary', {'text-white bg-secondary': index != -1})}>
                    <div className="clearfix">
                        <div className="float-start">{item.label}</div>
                        <div className="float-end">{Math.floor(item.total)} {nutrientsInfo[item.tag]}</div>
                    </div>
                </div>
            </div>
            { subDigestItems.length > 0 && subDigestItems}
        </>
  )
}

export default DigestItem