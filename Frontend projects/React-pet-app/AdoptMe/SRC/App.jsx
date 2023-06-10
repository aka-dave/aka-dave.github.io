
import { createRoot} from "react-dom/client";
import Pet from './Pet'
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
    return (

     <BrowserRouter>
     <header>
            <Link to="/"> Adopt Me! </Link>   
     </header>
 
  <Routes>
    <Route path="/Details/:id" element={<Details />} />
    <Route path="/" element={<SearchParams />} />
  </Routes>
</BrowserRouter>   
    );
};




const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);

