import React, { useState } from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import MySettingSider from "../sider/SettingSider";
import ContentSettingEmployee from "./item/ContentSettingEmployee";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const { Content } = Layout;

const ContentSetting = (props) => {
	const currentURL = window.location.pathname;

	return (
		<div id={props.id}>
			<Layout>
				<MySettingSider />
				<Content>
					<Switch>
						<Route path={currentURL + "/setting/setting-employee"}>
							<ContentSettingEmployee />
						</Route>
					</Switch>
				</Content>
			</Layout>
		</div>
	);
};

export default ContentSetting;
