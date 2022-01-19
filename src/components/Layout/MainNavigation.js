import React from 'react'
import { PageHeader, Button } from 'antd';
import { Menu, Dropdown, Avatar } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import {useDispatch} from 'react-redux';
import { setLogout } from '../../action/auth';

//main navigation
const MainNavigation = () => {
 const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to='/deshboard'>Deshboard</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to='/education'>Education</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/experience'>Experience</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={handleLogout}>Logout</Menu.Item>
    </Menu>
  );

  const { isAuth, user } = useSelector(state => state.auth);
  const userAccess = isAuth && user.registered && (
    <>
      <Dropdown key="2" overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <Avatar
            style={{
              backgroundColor: '#87d068',
            }}
            icon={<UserOutlined />}
          /> {user.email}
        </a>
      </Dropdown>
    </>
  )

  return (
    <PageHeader

      onBack={() => window.history.back()}
      title="React People"
      subTitle="spread reactive nature in developer"
      extra={
        userAccess ? (userAccess) : (<Link to='/education'><Button key="5" icon={<UserOutlined />}>Education</Button></Link>)
      }
    />
  )
}

export default MainNavigation;
