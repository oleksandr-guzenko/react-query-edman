import React from 'react'
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import ResultItem from "./ResultItem";

/** 
 * Display the searched results
 * @component
 */
function Results() {
    const results = useSelector(state => state.filters.results.hits);
    const resultsLoading = useSelector(state => state.filters.loading);
    const resultItems = results.map((value, index) => <ResultItem key={uuidv4()} item={value.recipe} />);

    return (
        <div className="py-4 px-sm-3">
            <div className="h4">Recipes</div>
            { resultsLoading && <div className="text-center" style={{fontSize: '100px', height: '400px', lineHeight: '400px'}}><span className="fa fa-spinner fa-spin"></span></div> }
            
            <div>
                {resultItems}
            </div>
        </div>
    )
}

export default Results