import React from 'react'
import { Button, Layout } from "antd"
import { Link, Route, Switch } from 'react-router-dom'
import SiderEmployee from './item/SiderEmployee'
import SiderAccount from './item/SiderAccount';
import { useRouteMatch } from 'react-router-dom';

const {Sider} = Layout

const MySider = (props) => {
    let { url } = useRouteMatch();

    return (
        <div>
            <Sider style={{ height: "100vh", color: "white" }}>
                <Switch>
                    <Route path={"/employee"}>
                        <SiderEmployee/>
                    </Route>
                    <Route path={"/account"}>
                        <SiderAccount/>
                    </Route>
                </Switch>
                <Link to={"/setting"}>
                    <Button>
                        Setting
                    </Button>
                </Link>
            </Sider>
        </div>
    )
}

export default MySider
