import React from 'react'
import { useSelector } from "react-redux";

import ResultItem from "./ResultItem";

// description - Component to display the searched results

function Results() {
    const results = useSelector(state => state.filters.results.hits);
    const resultsLoading = useSelector(state => state.filters.loading);
    const resultItems = results.map((value, index) => <ResultItem key={`recipe-${index}`} item={value.recipe} />);

    console.log(resultsLoading);
    return (
        <div className="py-4">
            <div className="h4">Recipes</div>
            { resultsLoading && <div className="text-center" style={{fontSize: '100px', height: '400px', lineHeight: '400px'}}><span className="fa fa-spinner fa-spin"></span></div> }
            
            <div>
                {resultItems}
            </div>
        </div>
    )
}

export default Results