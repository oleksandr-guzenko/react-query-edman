import { Provider } from 'react-redux'

import Header from "./components/layouts/Header";
import Recipe from "./components/recipe/Recipe";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Recipe />
      </main>
    </Provider>
  );
}

export default App;
