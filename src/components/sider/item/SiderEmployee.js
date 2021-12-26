import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const SiderEmployee = () => {
	return (
		<Menu>
			<Menu.Item>
				<Link to="/employee/list-employee">List Employee</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="/employee/create-employee">Create Employee</Link>
			</Menu.Item>
		</Menu>
	);
};

export default SiderEmployee;
