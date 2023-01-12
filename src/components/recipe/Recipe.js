import React, { useState, useEffect } from 'react'
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import Nutrients from "./nutrients/Nutrients";
import Search from "./search/Search";
import Filter from "./filter/Filter";
import Results from "./results/Results";

function Recipe() {
    const [tab, setTab] = useState('search');
    const [showResults, setShowResults] = useState(false);
    const results = useSelector(state => state.filters.results);

    useEffect(() => {
        if(results.hits) setShowResults(true);
    }, [results]);

    useEffect(() => {
        setShowResults(false);
    }, [tab])

    return (
        <div>
            <div className="px-4 py-5 text-center bgr-home recipe-api-demo">
                <h1 className="display-5 fw-bold text-white home-title col-8 mx-auto">Food and Recipe Search API Demo</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4"></p>
                </div>
            </div>

            <div className="container col-xl-10 py-5">
                <div className="rounded-3 shadow">
                    <div className="row">
                        <div className="col-md-3 px-4 py-4">
                            <div className="small text-muted">Choose one or more methods</div>
                            <div>
                                <div className={classnames("px-0 py-3 mt-2 h5 fw-normal tab", {"border-bottom border-success text-success" : tab === 'search'})} onClick={e => setTab('search')}>Searching by keyword</div>
                            </div>
                            <div>
                                <div className={classnames("px-0 py-3 h5 fw-normal tab", {"border-bottom border-success text-success" : tab === 'nutrients'})} onClick={e => setTab('nutrients')}>Nutrients</div>
                            </div>
                        </div>
                        <div className="col-md-6 border-start border-end middle-form">
                            { (tab === 'search' && !showResults) && <Search /> }
                            { (tab === 'nutrients' && !showResults) && <Nutrients /> }
                            { showResults && <Results />}
                        </div>
                        <div className="col-md-3 bg-light py-3">
                            <Filter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Recipe