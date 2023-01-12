import React from 'react'
import { useSelector } from "react-redux";

import ResultItem from "./ResultItem";

function Results() {
    const results = useSelector(state => state.filters.results.hits);
    const resultItems = results.map((value, index) => <ResultItem key={`recipe-${index}`} item={value.recipe} />);

    return (
        <div>
            Recipes
            <div>
                {resultItems}
            </div>
        </div>
    )
}

export default Results