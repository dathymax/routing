import { Menu } from "antd";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

const SiderSettingEmployee = (props) => {
	const currentURL = window.location.pathname;

	return (
		<Menu>
			<Menu.Item>
				<Link to={currentURL + "/setting/setting-employee"}>
					Setting Employee
				</Link>
			</Menu.Item>
		</Menu>
	);
};

export default SiderSettingEmployee;
