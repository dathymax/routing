import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const SiderAccount = () => {
    return (
        <Menu>
            <Menu.Item>
                <Link to="/account/list-account">
                    List
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/account/create-account">
                    Create
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default SiderAccount
