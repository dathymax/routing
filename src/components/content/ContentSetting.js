import React, { useState } from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import MySettingSider from "../sider/SettingSider";
import ContentSettingEmployee from "./item/ContentSettingEmployee";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const { Content } = Layout;

const ContentSetting = (props) => {
	return (
		<Layout>
			<MySettingSider path={props.path} />
			<Content>
				<Switch>
					<Route path={props.path + "/setting/setting-employee"}>
						<ContentSettingEmployee />
					</Route>
				</Switch>
			</Content>
		</Layout>
	);
};

export default ContentSetting;
