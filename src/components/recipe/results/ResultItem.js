import React from 'react';
import { v4 as uuidv4 } from "uuid";

import DigestItem from "./DigestItem";

/** 
 * Display a searching result item
 * @component
 * @param {string} item - a result item information
 */
function ResultItem({item}) {
    const digests = item.digest;
    const digestItems = digests.map((value, index) => 
        <DigestItem item={value} key={uuidv4()} />
    );

    return (
        <div className="rounded-2 border shadow my-4">
            <div className="container pt-4">
                <div className="row p-2">
                    <div className="col-lg-4">
                        <img src={item.image} alt="" className="w-100 img-thumbnail mb-2" />
                    </div>
                    <div className="col-lg-8">
                        <div className="h5 mb-2">{item.label}</div>
                        <div className="">
                            {item.dietLabels.map(value => (
                                <div className="d-inline-block rounded-pill border py-1 px-2 border-secondary me-1 mb-1">{value.replaceAll('-', ' ')}</div>
                            ))}
                            {item.healthLabels.map(value => (
                                <div className="d-inline-block rounded-pill border py-1 px-2 border-secondary me-1 mb-1">{value.replaceAll('-', ' ')}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="py-3">
                    <div className="row">
                        <div className="col-lg-4 text-center mb-2">
                            <div className="text-muted fw-bold">{item.yield} SERVINGS</div>
                            <div><span className="h1 fw-light">{Math.floor(item.calories / item.yield)}</span> <span className="fw-bold text-muted">kcal</span></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                { digestItems }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultItem