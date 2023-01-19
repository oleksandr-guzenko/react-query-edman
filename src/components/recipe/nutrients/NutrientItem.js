import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import classnames from 'classnames';

import {
    addFilter
} from "../../../actions/filterActions";

/**
 * Displays a nutrient 
 * @component
 * @param {string} item - nutrient information
 */
function NutrientItem({item}) {
    const {type, unit, tag} = item;
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const filters = useSelector(state => state.filters.filters);
    const dispatch = useDispatch();
    const selected = filters.findIndex(value => value.type === type) !== -1;

    /** 
     * Adds a nutrient filter
     * @function
     */
    const select = () => {
        if(!selected) {
            const filter = {
                type: type,
                min: min,
                max: max,
                unit: unit,
                tag: tag
            }
            
            filters.unshift(filter);
            dispatch(addFilter(filters));
        }
    }

    return (
        <div className="col-xxl-4 col-lg-6 dropdown pb-3">
            <button className={classnames('btn rounded-pill', {'btn-outline-secondary': !selected, 'btn-secondary': selected})} data-bs-toggle="dropdown">
            <span className={classnames('fa', {'fa-plus-circle': !selected, 'fa-check-circle': selected})}></span>
            <span className="small"> {type}</span>
            </button>
            <div className="dropdown-menu p-2">
                <div className="small text-muted" style={{width: '280px'}}>
                    Choose minimum and maximum values for a desired nutrient per serving. For individual foods, the default serving size is 100 g
                </div>
                <div className="fw-bolder text-muted">min</div>
                <input type="number" className="form-control my-2" value={min} min="0" onChange={e => setMin(e.target.value)} />
                <div className="fw-bolder text-muted">max</div>
                <input type="number" className="form-control my-2" value={max} onChange={e => setMax(e.target.value)} />
                <div className="clearfix">
                    <div className="float-start">{unit}</div>
                    <div className="float-end">
                    <button className="btn btn-outline-secondary rounded-circle btn-sm" onClick={e => select()}><span className="fa fa-plus"></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NutrientItem