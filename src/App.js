import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import MyContent from './components/Content';
import MyHeader from './components/Header';
import MySider from './components/Sider';
import './App.css';
import MySettingSider from './components/SettingSider';

function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <MyHeader />
                    <Layout>
                        <MySider />
                        <MySettingSider id="sider-setting"/>
                        <MyContent/>
                    </Layout>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
