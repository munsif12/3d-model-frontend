import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate()
    const collapseSidebarIfBreakpointIsLessThen996 = (isBreakpointHit) => setCollapsed(isBreakpointHit);
    return (
        <Layout style={AdminLayoutStyles.layout} >
            <Sider
                width={"20vw"}
                trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint={"lg"}
                collapsedWidth={100}
                onBreakpoint={collapseSidebarIfBreakpointIsLessThen996}
            >
                <div className="logo" style={AdminLayoutStyles.logo} />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Dashboard',
                            onClick: () => navigate('/dashboard'),

                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Models',
                            onClick: () => navigate('/models'),
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Logs',
                            onClick: () => navigate('/logs'),
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div className="hamburger" style={AdminLayoutStyles.hamburger}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                            style: { fontSize: '25px' },
                        })}
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};


const AdminLayoutStyles = {
    layout: {
        minHeight: '100vh',
    },
    hamburger: {
        height: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        padding: '0 24px',
    },
    logo: {
        height: "40px",
        margin: "12px 25px",
        background: "rgba(255, 255, 255, 0.2)",
    }
};
export default AdminLayout;