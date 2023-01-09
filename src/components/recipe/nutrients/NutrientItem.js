import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { 
    addFilter
 } from "../../../actions/filterActions";

function NutrientItem({type}) {
    const [selected, setSelected] = useState(false);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const dispatch = useDispatch();

    const select = () => {
        const filter = {
            type: type,
            min: min,
            max: max
        }

        dispatch(addFilter(filter));
    }

    return (
        <div className="col-xxl-4 col-lg-6 dropdown pb-3">
            <button className="rounded-pill btn btn-outline-secondary" data-bs-toggle="dropdown">
            { !selected && <span className="fa fa-plus-circle"></span> }
            { selected && <span className="fa fa-check-circle text-success"></span> }
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
                <div className="float-end">
                <button className="btn btn-outline-secondary rounded-circle btn-sm" onClick={e => select()}><span className="fa fa-plus"></span></button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default NutrientItem