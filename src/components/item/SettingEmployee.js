import { Menu } from 'antd'
import React from 'react'
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom'

const SiderSettingEmployee = (props) => {
    let { path } = useRouteMatch();
    console.log(path);

    return (
        <Menu>
            <Menu.Item>
                <Link to="/setting/setting-employee">
                    Setting Employee
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default SiderSettingEmployee
