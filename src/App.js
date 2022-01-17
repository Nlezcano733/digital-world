import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./Context/ProductsContext";
import Layout from "./Layout";
import Home from "./Routes/Home";
import "./App.css";

function App() {
	return (
		<ProductsProvider>
			<Router>
				<Layout>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/data" element={<Home />} />
					</Routes>
				</Layout>
			</Router>
		</ProductsProvider>
	);
}

export default App;
