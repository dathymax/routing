import React from 'react'
import { Layout } from "antd"
import { Route, Switch } from 'react-router-dom'
import SiderSettingEmployee from './item/SettingEmployee';

const {Sider} = Layout

const MySettingSider = (props) => {
    return (
        <div id={props.id}>
            <Sider style={{ height: "100vh", color: "white" }}>
                <Switch>
                    <Route path="/setting">
                        <SiderSettingEmployee />
                    </Route>
                </Switch>
            </Sider>
        </div>
    )
}

export default MySettingSider
