import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const MyHeader = (props) => {
	return (
		<Header style={{ color: "white", display: "flex" }}>
			<Link to="/" style={{ margin: "0 10px" }} onClick={props.onClick}>
				Home
			</Link>
			<Link
				to={"/employee"}
				style={{ margin: "0 10px" }}
				onClick={props.onClick}
			>
				This is Employee
			</Link>
			<Link
				to={"/account"}
				style={{ margin: "0 10px" }}
				onClick={props.onClick}
			>
				This is Account
			</Link>
		</Header>
	);
};

export default MyHeader;
