import React from 'react'
import { Button, Layout } from "antd"
import { Link, Route, Switch } from 'react-router-dom'
import SiderEmployee from './item/SiderEmployee'
import SiderSetting from './item/SettingEmployee'

const {Sider} = Layout

const MySider = (props) => {
    return (
        <div>
            <Sider style={{ height: "100vh", color: "white" }}>
                <Switch>
                    <Route path={"/employee"}>
                        <SiderEmployee/>
                    </Route>
                </Switch>
                <Link to="setting">
                    <Button id={props.id}>
                        Setting
                    </Button>
                </Link>
            </Sider>
        </div>
    )
}

export default MySider
