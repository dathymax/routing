import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const SiderEmployee = (props) => {
    return (
        <div>
            <Menu>
                <Menu.Item>
                    <Link to="/employee/setting">
                        Setting Employee
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default SiderEmployee
