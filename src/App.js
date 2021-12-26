import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MyHeader from "./components/header/Header";
import MySider from "./components/sider/Sider";
import MyContent from "./components/content/Content";
import { useState } from "react";
import ContentSetting from "./components/content/ContentSetting";

function App() {
	const currentURL = window.location.pathname;

	const [holdURL, setHoldURL] = useState(currentURL);

	console.log("holdURL:", holdURL);

	const handleHoldURL = () => {
		setHoldURL(holdURL);
		console.log("set hold url: ", holdURL);
	};

	const [showSetting, setShowSetting] = useState();

	const showContentSetting = () => {
		const sider = document.getElementById("sider");
		const content = document.getElementById("content");
		const contentSetting = document.getElementById("content-setting");
		console.log(sider);
		console.log(content);
		console.log(contentSetting);

		content.style.display = "none";
		contentSetting.style.display = "block";
	};

	return (
		<div className="App">
			<Router>
				<Layout>
					<MyHeader onClick={handleHoldURL} />
					<Layout>
						<MySider
							id="sider"
							onShowContentSetting={showContentSetting}
						/>
						<MyContent id="content" />
						<ContentSetting id="content-setting" />
					</Layout>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
