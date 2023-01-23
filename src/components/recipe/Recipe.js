import React, { useState, useEffect } from 'react'
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import Nutrients from "./nutrients/Nutrients";
import Search from "./search/Search";
import Filter from "./filter/Filter";
import Recipes from "./results/Recipes";

function Recipe() {
    const [tab, setTab] = useState('search');
    const [showResults, setShowResults] = useState(false);
    const results = useSelector(state => state.filters.results);
    const resultsLoading = useSelector(state => state.filters.loading);

    useEffect(() => {
        if(results.hits) setShowResults(true);
    }, [results]);

    const changeTab = (str) => {
        setTab(str);
        setShowResults(false);
    }

    return (
        <div className="mt-5 pt-5">
            <div className="container py-5">
                <h1 className="text-center mb-5" style={{textShadow: '0 3px 6px'}}>Search Recipes</h1>
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
                        { (showResults || resultsLoading) && <Recipes />}
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