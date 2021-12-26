import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MyHeader from "./components/header/Header";
import MySider from "./components/sider/Sider";
import MyContent from "./components/content/Content";
import { useState } from "react";

function App() {
	const currentURL = window.location.pathname;

	const [holdURL, setHoldURL] = useState(currentURL);

	console.log("holdURL:", holdURL);

	const handleHoldURL = () => {
		setHoldURL(holdURL);
		console.log("set hold url: ", holdURL);
	};

	return (
		<div className="App">
			<Router>
				<Layout>
					<MyHeader onClick={handleHoldURL} />
					<Layout>
						<MySider path={holdURL} />
						<MyContent path={holdURL} />
					</Layout>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
