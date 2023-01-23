import React, {useState} from 'react'
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroll-component";

import RecipeItem from "./RecipeItem";
import { loadMore } from "../../../actions/filterActions";

/** 
 * Display the searched results
 * @component
 */
function Recipes() {
    const { recipes, loading, results } = useSelector(state => state.filters);
    const [items, setItems] = useState([]);
    const recipeItems = recipes.map((value, index) => <RecipeItem key={uuidv4()} item={value.recipe} />);

    return (
        <div className="py-4 px-sm-3">
            <div className="clearfix">
                <div className="float-start"><h4>Results</h4></div>
                {!loading && <div className="float-end">{recipes.length} <b>of</b> {results.count} <b>results</b></div> }
            </div>
            { loading && <div className="text-center" style={{fontSize: '100px', height: '400px', lineHeight: '400px'}}><span className="fa fa-spinner fa-spin"></span></div> }
            { recipeItems.length > 0 && (
                <InfiniteScroll
                    dataLength={recipeItems.length}
                    next={() => {
                        loadMore();
                    }}
                    hasMore={true}
                    height={800}
                    className="custom-scroll"
                    loader={<div><span className="fa fa-spinner fa-spin"></span> Loading more...</div>}
                >
                    {recipeItems}
                </InfiniteScroll>
            )}
        </div>
    )
}

export default Recipes