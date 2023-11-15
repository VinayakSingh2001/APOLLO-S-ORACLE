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
      title: "Reports",
      paths: ["/reports"],
      icon: <HourglassOutlined />,
      onClick: () => Navigate("/reports")
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

  const adminMenu = [
    {
      title: "Home",
      paths: ["/dashboard"],
      icon: <HomeOutlined />,
      onClick: () => Navigate("/dashboard")
    },
    {
      title: "Exams",
      paths: ["/admin/exams"],
      icon: <BookOutlined />,
      onClick: () => Navigate("/admin/exams")
    },
    {
      title: "Reports",
      paths: ["/reports"],
      icon: <HourglassOutlined />,
      onClick: () => Navigate("/admin/reports")
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
  ];


  useEffect(() => {
    getUserData()
  }, [])


  const activeRoute = window.location.pathname;

  const getIsActiveorNot = (paths) => {
    if (paths.includes(activeRoute)) {
      return true;
    } else {
      return false;
    }

  }


  const [collapsed, setCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setCollapsed(!collapsed);
  // };

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
            <Menu.Item key={index} onClick={item.onClick} className={`menu-item ${getIsActiveorNot(item.paths) &&
              activeRoute === item.paths[0] && "active-menu-item"

              }`}>
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
            </div>
          </div>
        </Header>
        <Content className="p-4">
          <div className="bg-white w-full p-4 rounded-md shadow-md">
            {children}
          </div>
          {/* {children} */}
        </Content>
      </Layout>
    </Layout>
  )
}

export default ProtectedRoute;
