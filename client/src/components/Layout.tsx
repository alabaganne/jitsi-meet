import React, { useState } from "react";
import {
    HomeOutlined,
    LockOutlined,
    MenuFoldOutlined,
    MenuOutlined,
    MenuUnfoldOutlined,
    OrderedListOutlined,
    UnlockOutlined,
    UnorderedListOutlined,
    UserAddOutlined,
    UserOutlined,
    VideoCameraAddOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
    const isLoggedIn = false;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();

    const [current, setCurrent] = useState("1");

    function showJoinMeetingModal() {
        alert("Show new meeting modal");
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="font-bold text-2xl text-white text-title px-8 pt-6 pb-4">
                    {collapsed ? "J" : "Jitsi Meet"}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    selectedKeys={[current]}
                    items={[
                        {
                            key: "1",
                            icon: <HomeOutlined />,
                            label: "Home",
                            onClick: () => {
                                setCurrent("1");
                                navigate("/");
                            },
                        },
                        {
                            key: "2",
                            icon: <UnlockOutlined />,
                            label: "Login",
                            onClick: () => {
                                setCurrent("2");
                                navigate("/login");
                            },
                            disabled: isLoggedIn,
                        },
                        {
                            key: "3",
                            icon: <UserAddOutlined />,
                            label: "Register",
                            onClick: () => {
                                setCurrent("3");
                                navigate("/register");
                            },
                            disabled: isLoggedIn,
                        },
                        {
                            key: "4",
                            icon: <VideoCameraOutlined />,
                            label: "Join Meeting",
                            onClick: () => showJoinMeetingModal(),
                            disabled: isLoggedIn,
                        },
                        {
                            key: "5",
                            icon: <MenuOutlined />,
                            label: "My Meetings",
                            onClick: () => {
                                setCurrent("5");
                                navigate("/meetings");
                            },
                            disabled: !isLoggedIn,
                        },
                        {
                            key: "6",
                            icon: <UserOutlined />,
                            label: "Profile",
                            onClick: () => {
                                setCurrent("6");
                                navigate("/profile");
                            },
                            disabled: !isLoggedIn,
                        },
                        {
                            key: "7",
                            icon: <LockOutlined />,
                            label: "Logout",
                            onClick: () => navigate("/logout"),
                            disabled: !isLoggedIn,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{ padding: 0, background: colorBgContainer }}
                    className="flex justify-between items-center"
                >
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className="mr-6 flex gap-2 items-center">
                        <div className="h-9 w-9 rounded-full overflow-hidden bg-gray-100 text-black flex-center">
                            <UserOutlined />
                        </div>
                        <span>
                            Logged in as,{" "}
                            <span className="text-blue-500 text-title text-lg">
                                Guest
                            </span>
                        </span>
                    </div>
                </Header>

                <Content
                    style={{
                        margin: "28px 24px",
                        // padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                    className="rounded-xl overflow-hidden shadow"
                >
                    <Outlet />
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};

export default App;
