import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/meet.jpg";
import { Button } from "antd";
import {
    PlusOutlined,
    UnlockOutlined,
    UserAddOutlined,
    VideoCameraAddOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";

const Home = () => {
    const isLoggedIn = false;

    return (
        <div className="h-full relative bg-slate-900 flex-center">
            <div className="text-center text-white z-20">
                <h1>
                    Welcome to{" "}
                    <span className="text-blue-500 textshadow-white-lg">
                        Jitsi Meet
                    </span>
                    !
                </h1>
                <p className="-mt-4 text-lg opacity-80">
                    Business meetings have never been more secure.
                </p>
                <div className="mt-10 flex justify-center items-center gap-3">
                    {isLoggedIn ? (
                        <>
                            <Link to="/meetings/new">
                                <Button
                                    size="large"
                                    icon={<VideoCameraAddOutlined />}
                                >
                                    <Link to="/meetings/new">
                                        Create a meeting
                                    </Link>
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button size="large" icon={<UserAddOutlined />}>
                                    <Link to="/login">Login</Link>
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button size="large" icon={<UnlockOutlined />}>
                                    <Link to="/register">Register</Link>
                                </Button>
                            </Link>
                        </>
                    )}

                    <Button
                        type="primary"
                        size="large"
                        icon={<VideoCameraOutlined />}
                    >
                        Join a meeting
                    </Button>
                </div>
            </div>
            <img
                src={image}
                alt=""
                className="w-full h-auto absolute top-0 opacity-10 z-10"
            />
        </div>
    );
};

export default Home;
