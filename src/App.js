import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";

import Header from "./components/layouts/Header";
import Recipe from "./components/recipe/Recipe";
import Tags from "./components/tags/Tags";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Recipe />}></Route>
            <Route path="/recipes" element={<Recipe />} />
            <Route path="/tags" element={<Tags />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
