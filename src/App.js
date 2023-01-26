import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/layouts/Header";
import Recipe from "./components/recipe/Recipe";
import Tags from "./components/tags/Tags";
import { getTags } from './actions/tagActions';
import { getRecipeTags } from './actions/recipeTagActions';

import store from "./store";

function App() {
  // get all tags from the server
  getTags();
  // get all recipe tags from the server
  getRecipeTags();
  
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/recipes" />} />
            <Route path="/recipes" element={<Recipe />} />
            <Route path="/tags" element={<Tags />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
