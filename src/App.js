import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import MyContent from './components/Content';
import MyHeader from './components/Header';
import SiderSetting from './components/item/SettingEmployee';
import MySider from './components/Sider';
import logo from './logo.svg';

function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <MyHeader />
                    <Layout>
                        <MySider />
                        <SiderSetting />
                        <MyContent/>
                    </Layout>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
