import React, { useState } from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import ContentListEmployee from "./item/ContentListEmployee";
import ContentCreateEmployee from "./item/ContentCreateEmployee";
import ContentSettingEmployee from "./item/ContentSettingEmployee";
import ContentListAccount from "./item/ContentListAccount";
import ContentCreateAccount from "./item/ContentCreateAccount";
import ContentSetting from "./ContentSetting";

const { Content } = Layout;

const MyContent = (props) => {
	return (
		<div id={props.id}>
			<Content style={{ height: "100vh", color: "black" }}>
				<Switch>
					<Route path="/employee/list-employee">
						<ContentListEmployee />
					</Route>
					<Route path="/employee/create-employee">
						<ContentCreateEmployee />
					</Route>

					<Route path="/account/list-account">
						<ContentListAccount />
					</Route>
					<Route path="/account/create-account">
						<ContentCreateAccount />
					</Route>
				</Switch>
			</Content>
		</div>
	);
};

export default MyContent;
