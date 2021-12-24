import React from 'react'
import { Layout } from "antd"
import { Route, Switch } from 'react-router-dom'
import ContentListEmployee from './item/ContentListEmployee';
import ContentCreateEmployee from './item/ContentCreateEmployee';

const {Content} = Layout

const MyContent = () => {
    return (
        <Content style={{ height: "100vh", color: "black" }}>
            <Switch>
                <Route path="/employee/list-employee">
                    <ContentListEmployee />
                </Route>
                <Route path="/employee/create-employee">
                    <ContentCreateEmployee />
                </Route>
            </Switch>
        </Content>
    )
}

export default MyContent
