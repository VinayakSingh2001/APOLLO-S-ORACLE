import React from 'react';
import { useEffect } from 'react';
import { message } from 'antd';
import { getUserInfo } from '../apicalls/users';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {
  HomeOutlined,
  BookOutlined,
  HourglassOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;


const ProtectedRoute = ({ children }) => {
  const Navigate = useNavigate();
  const [menu, setMenu] = useState([]);

  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const response = await getUserInfo();
      if (response.success) {
        dispatch(setUser(response.data));
        if (response.data.isAdmin) {
          setMenu(adminMenu);
        } else {
          setMenu(userMenu);
        }
      } else {
        message.error(response.message)
      }
    } catch (error) {
      message.error(error.message)
    }
  }

  const userMenu = [
    {
      title: "Home",
      paths: ["/dashboard"],
      icon: <HomeOutlined />,
      onClick: () => Navigate("/dashboard")
    },
    {
      title: "Exam",
      paths: ["/exam"],
      icon: <BookOutlined />,
      onClick: () => Navigate("/exam")
    },
    {
      title: "Attempts",
      paths: ["/attempts"],
      icon: <HourglassOutlined />,
      onClick: () => Navigate("/attempts")
    },
    {
      title: "Profile",
      paths: ["/profile"],
      icon: <UserOutlined />,
      onClick: () => Navigate("/profile")
    },
    {
      title: "Logout",
      paths: ["/logout"],
      icon: <LogoutOutlined />,
      onClick: () => {
        localStorage.removeItem('token');
        Navigate('/login');
      },
    }
  ]

  const adminMenu = [];


  useEffect(() => {
    getUserData()
  }, [])


  const [collapsed, setCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setCollapsed(!collapsed);
  // };

  // Replace the profileImgURL with the URL of the user's profile picture
  const profileImgURL = "https://example.comhttps://m.media-amazon.com/images/M/MV5BYzBiZTRlMzAtZWIwZC00YjM3LTk5YTAtMTRkNmFhYjRjMTdiXkEyXkFqcGdeQXJoYW5uYWg@._V1_.jpg/profile.jpg";

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        theme="dark"
      >
        <div className="logo p-3 text-white text-xl ml-14">Quizify</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
          {menu.map((item, index) => (
            <Menu.Item key={index} onClick={item.onClick} >
              {item.icon}
              <span className='text-white'>{item.title}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="flex items-center justify-between px-3 mr-4">
            <div className="flex items-center"></div>
            <div className="flex items-center">
              <div className="mr-3">
                <Avatar size="large" src={profileImgURL} />
              </div>
              <div className="ml-3">
                <h3 className="text-white text-xl" style={{ fontSize: '1.2em' }}>{user?.name}</h3>
              </div>
              {/* Add any additional header options here */}
            </div>
          </div>
        </Header>
        <Content className="p-4">
          {/* Content of your dashboard goes here */}
          <div className="bg-white p-4 rounded-md shadow-md">
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default ProtectedRoute;
