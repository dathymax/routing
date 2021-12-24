import React from 'react'
import { Layout } from "antd"
import { Route, Switch } from 'react-router-dom'

const {Sider} = Layout

const MySettingSider = () => {
    return (
        <Sider>
            <Switch>
                <Route path="setting">
                    <SiderSetting id="sider-setting"/>
                </Route>
            </Switch>
        </Sider>
    )
}

export default MySettingSider
