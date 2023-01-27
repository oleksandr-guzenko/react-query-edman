import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { MultiSelect } from "react-multi-select-component";

import DigestItem from "./DigestItem";
import DescriptionItem from "./DescriptionItem";
import { 
    addRecipeTag, 
    deleteRecipeTag 
} from "../../../actions/recipeTagActions";

/** 
 * Display a searching result item
 * @component
 * @param {string} item - a result item information
 */
function RecipeItem({item}) {
    const recipe_ID = item.uri.split('#')[1];
    const tags = useSelector(state => state.tags.tags); // all custom tags
    const recipeTags = useSelector(state => state.recipeTags.recipeTags); // all custom tags added to recipes
    const digests = item.digest;
    const digestItems = digests.map((value, index) => 
        <DigestItem item={value} key={uuidv4()} />
    );

    /**
     * shows selecatable custom tags
     * @funcition
     * @returns {Array} - DOM array to show selectable tags
     */
    const showSelectableTags = () => {
        const selectedTags = recipeTags.filter(recipeTag => recipeTag.recipe_ID === recipe_ID);

        const selectableTags = 
            tags
                .filter(tag => selectedTags.findIndex(recipeTag => recipeTag.tag_ID.id === tag.id) === -1 && tag.active)
                .map(selectableTag => (
                    <button 
                        className="btn-outline-secondary btn rounded-pill me-1 mb-1" 
                        key={uuidv4()}
                        onClick={e => addRecipeTag(selectableTag.id, recipe_ID)}
                    >
                        {selectableTag.label} <span className="fa fa-plus" id={`loading-${recipe_ID}-${selectableTag.id}`}></span>
                    </button>
                ));
        
        return selectableTags.length > 0 ? selectableTags : <div className="text-center text-muted">No Tags</div> ;
    }

    /**
     * show added tags to a recipe
     * @function
     * @returns {Array} - DOM array to show added tags to a recipe
     */
    const showSelectedTags = () => {
        const selectedTags = recipeTags.filter(value => value.recipe_ID === recipe_ID);
        
        return selectedTags.map(recipeTag => {
            const tag_id = recipeTag.tag_ID.id;

            const index = tags.findIndex(tag => tag.id === tag_id);

            if(index === -1) return;
            else {
                if(tags[index].active) return (
                    <button 
                        className="btn btn-outline-secondary rounded-pill px-2 py-1 me-1 mb-1"
                        key={uuidv4()}
                        onClick={e => deleteRecipeTag(recipeTag.id, recipeTag.tag_ID.id)}
                    >
                        {recipeTag.tag_ID.label} <span className="fa fa-remove" id={`loading-${recipeTag.id}`}></span>
                    </button>
                    )
                else return;
            }
        });
    }

    return (
        <div className="rounded-2 border shadow my-4">
            <div className="container pt-4">
                <div className="row p-2">
                    <div className="col-lg-4">
                        <img src={item.image} alt="" className="w-100 img-thumbnail mb-2" />
                    </div>
                    <div className="col-lg-8">
                        <div className="h5 mb-2">{item.label}</div>
                        <div>
                            {item.dietLabels.map(value => (
                                <div className="d-inline-block rounded-pill border py-1 px-2 border-secondary me-1 mb-1" key={uuidv4()}>{value.replaceAll('-', ' ')}</div>
                            ))}
                            {item.healthLabels.map(value => (
                                <div className="d-inline-block rounded-pill border py-1 px-2 border-secondary me-1 mb-1" key={uuidv4()}>{value.replaceAll('-', ' ')}</div>
                            ))}
                            {showSelectedTags()}
                        </div>
                        <div id={recipe_ID} className="mt-3">
                            <div className="card">
                                <div className="card-header p-0 border-0">
                                    <div className="d-grid">
                                        <a className="btn btn-block btn-secondary" data-bs-toggle="collapse" href={`#collapse-${recipe_ID}`}>
                                        Add Tag <span className="fa fa-plus"></span>
                                        </a>
                                    </div>
                                </div>
                                <div id={`collapse-${recipe_ID}`} className="collapse" data-bs-parent={`#${recipe_ID}`}>
                                    <div className="card-body">
                                        { showSelectableTags() }
                                    </div>
                                </div>
                            </div>
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
                <hr />
                <div className="py-3">
                    <div className="clearfix">
                        <div className="float-start"><div className="h3">Ingredients</div></div>
                        <div className="float-end"><a href={item.url} target="_blank" className="text-decoration-none">Instructions <span className="fa fa-question-circle-o"></span></a></div>
                    </div>
                    <div className="row pe-3">
                        { item.ingredients.map(value => <DescriptionItem item={value} key={uuidv4()} />) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem