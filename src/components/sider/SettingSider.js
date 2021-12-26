import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import SiderSettingEmployee from "./item/SettingEmployee";
import { useRouteMatch } from "react-router-dom";

const { Sider } = Layout;

const MySettingSider = (props) => {
	return (
		<div id={props.id}>
			<Sider
				style={{
					height: "100vh",
					color: "white",
					background: "white",
					borderRight: "1px solid #000",
				}}
			>
				<SiderSettingEmployee path={"/setting"} />
			</Sider>
		</div>
	);
};

export default MySettingSider;
