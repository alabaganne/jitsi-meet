import { Button, Checkbox, Form, Input } from "antd";
import image from "../assets/meet.jpg";
import { Link } from "react-router-dom";

const onFinish = (values: any) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};

type FieldType = {
    email: string;
    name: string;
    username?: string;
    password?: string;
};

const Register = () => {
    return (
        <div className="h-full flex">
            <div className="w-1/2 flex-center">
                <div className="w-full">
                    <h2 className="text-blue-500 text-center mb-14">
                        Register
                    </h2>
                    <Form
                        className="mt-6"
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        size="large"
                    >
                        <Form.Item<FieldType>
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your name!",
                                },
                            ]}
                        >
                            <Input placeholder="John Doe" />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input placeholder="johndoe" />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input
                                type="email"
                                placeholder="johndoe@example.com"
                            />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <p className="text-center text-gray-500">
                        You already have an account?{" "}
                        <Link to="/login">Log in here</Link>
                    </p>
                </div>
            </div>
            <div className="bg-cover bg-center h-full w-1/2 flex-center relative overflow-hidden bg-gray-900 text-white text-center">
                <div className="z-20">
                    <h1>
                        <span className="text-blue-500 textshadow-white-lg">
                            Jitsi Meet
                        </span>
                        <span>!</span>
                    </h1>
                    <p className="-mt-4 text-gray-100 text-lg opacity-80">
                        Business meetings have never been more secure.
                    </p>
                </div>
                <img
                    src={image}
                    alt=""
                    className="absolute top-0 h-full opacity-20 z-10"
                />
            </div>
        </div>
    );
};

export default Register;
