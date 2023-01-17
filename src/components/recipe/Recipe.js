import React, { useState, useEffect } from 'react'
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import Nutrients from "./nutrients/Nutrients";
import Search from "./search/Search";
import Filter from "./filter/Filter";
import Results from "./results/Results";

// description - Component to display the recipe form

function Recipe() {
    const [tab, setTab] = useState('search');
    const [showResults, setShowResults] = useState(false);
    const results = useSelector(state => state.filters.results);
    const resultsLoading = useSelector(state => state.filters.loading);

    // render results from Edman API

    useEffect(() => {
        if(results.hits) setShowResults(true);
    }, [results]);

    // description - Switch the tab
    // params - str: tab name (e.g. Search By Keyword | Nutrients)

    const changeTab = (str) => {
        setTab(str);
        setShowResults(false);
    }

    return (
        <div>
            <div className="px-4 py-5 text-center bgr-home recipe-api-demo">
                <h1 className="display-5 fw-bold text-white home-title col-8 mx-auto">Food and Recipe Search API Demo</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4"></p>
                </div>
            </div>

            <div className="container py-5">
                <div className="row border rounded-3 shadow">
                    <div className="col-md-3 px-4 py-4 bg-light">
                        <div>
                            <div className="small text-muted">Choose one or more methods</div>
                            <div>
                                <div className={classnames("px-0 py-3 mt-2 h5 fw-normal tab", {"text-success" : tab === 'search'})} onClick={e => changeTab('search')}>Searching by keyword</div>
                            </div>
                            <div>
                                <div className={classnames("px-0 py-3 h5 fw-normal tab", {"text-success" : tab === 'nutrients'})} onClick={e => changeTab('nutrients')}>Nutrients</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 border-md-start border-md-end middle-form py-3">
                        { (tab === 'search' && !showResults && !resultsLoading) && <Search /> }
                        { (tab === 'nutrients' && !showResults && !resultsLoading) && <Nutrients /> }
                        { (showResults || resultsLoading) && (
                            <div style={{maxHeight: '800px', overflowY: 'scroll'}} className="custom-scroll">
                                <Results />
                            </div>
                        )}
                    </div>
                    <div className="col-md-3 bg-light py-3">
                        <Filter />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Recipe