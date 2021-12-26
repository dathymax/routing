import React, { useState } from "react";
import { Button, Layout } from "antd";
import { Link, Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import SiderEmployee from "./item/SiderEmployee";
import SiderAccount from "./item/SiderAccount";

const { Sider } = Layout;

const MySider = (props) => {
	return (
		<div id={props.id}>
			<Sider style={{ height: "100vh", color: "white" }}>
				<Switch>
					<Route path={"/employee/"}>
						<SiderEmployee />
					</Route>
					<Route path={"/account/"}>
						<SiderAccount />
					</Route>
				</Switch>
				<Button onClick={props.onShowContentSetting}>Setting</Button>
			</Sider>
		</div>
	);
};

export default MySider;
