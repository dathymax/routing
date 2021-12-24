import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const SiderSettingEmployee = (props) => {
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
