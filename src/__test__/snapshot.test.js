import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

import store from "../store";

import Header from '../components/layouts/Header';
import Recipe from '../components/recipe/Recipe';
import Search from '../components/recipe/search/Search';
import Recipes from "../components/recipe/results/Recipes";
import RecipeItem from "../components/recipe/results/RecipeItem";
import DigestItem from "../components/recipe/results/DigestItem";
import Nutrients from "../components/recipe/nutrients/Nutrients";
import NutrientItem from "../components/recipe/nutrients/NutrientItem";
import Filter from "../components/recipe/filter/Filter";
import FilterItem from "../components/recipe/filter/FilterItem";
import DescriptionItem from "../components/recipe/results/DescriptionItem";

import mock_results from "./mock-results.json";

it('check if Header component works', () => {
  const component = renderer.create(
    <Header />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('check if Recipe component works', () => {
    const component = renderer.create(
        <Provider store={store}><Recipe /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('check if Search component works', () => {
    const component = renderer.create(
        <Provider store={store}><Search /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('check if Recipes component works', () => {
    const component = renderer.create(
        <Provider store={store}><Recipes /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('check if RecipeItem component works', () => {
    const item = mock_results.hits[0].recipe;

    const component = renderer.create(
        <Provider store={store}><RecipeItem item={item} /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('check if DigestItem component works', () => {
    const item = mock_results.hits[0].recipe.digest;
    const component = renderer.create(
        <Provider store={store}><DigestItem item={item} /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('check if Nutrients component works', () => {
    const component = renderer.create(
        <Provider store={store}><Nutrients /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('check if NutrientItem component works', () => {
    const item = {
        unit: 'g',
        type: 'Fat',
        tag: 'FAT'
    };
    const component = renderer.create(
        <Provider store={store}><NutrientItem item={item} /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('check if Filter component works', () => {
    const component = renderer.create(
        <Provider store={store}><Filter /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('check if FilterItem component works', () => {
    const item = {
        min: 0,
        max: 100,
        unit: 'g',
        type: 'Fat'
    };
    const component = renderer.create(
        <Provider store={store}><FilterItem item={item} index={0} /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('check if DescriptionItem component works', () => {
    const item = mock_results.hits[0].recipe.ingredients[0];
    const component = renderer.create(
        <Provider store={store}><FilterItem item={item} index={0} /></Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});