
import Category from "./components/Category"
import Pages from "./pages/Pages"
import {BrowserRouter} from 'react-router-dom'



function App() {
  // b4045f52ccb7484fa8a60f28f2e4998c

  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App
