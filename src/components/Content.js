import React from 'react'
import { Layout } from "antd"
import { Route, Switch } from 'react-router-dom'
import ContentListEmployee from './item/ContentListEmployee';
import ContentCreateEmployee from './item/ContentCreateEmployee';
import ContentSettingEmployee from './item/ContentSettingEmployee';
import ContentCreateAccount from './item/ContentCreateAccount';
import ContentListAccount from './item/ContentListAccount';

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
                <Route path="/setting/setting-employee">
                    <ContentSettingEmployee />
                </Route>

                
                
                <Route path="/account/list-account">
                    <ContentListAccount />
                </Route>
                <Route path="/account/create-account">
                    <ContentCreateAccount />
                </Route>
            </Switch>
        </Content>
    )
}

export default MyContent
