import React from 'react'
import { Layout } from "antd"
import { Link } from 'react-router-dom'

const {Header} = Layout

const MyHeader = () => {
    return (
        <Header style={{ color: "white", display: "flex" }}>
            <Link to={"/employee"}>
                This is Employee
            </Link>
        </Header>
    )
}

export default MyHeader
