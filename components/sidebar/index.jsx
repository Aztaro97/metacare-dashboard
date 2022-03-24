import React, { useState } from "react";
import { Menu } from "antd";
import { HiOutlineUsers } from "react-icons/hi";
import { BsCheckSquare, BsChatDots } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { VscInbox } from "react-icons/vsc";
import styled from "styled-components";

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const SideBar = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const handleClick = (e) => {
    console.log("click ", e);
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Container>
      <LogoWrapper>
        <h4>Metacare</h4>
        <p>adeyinka@metacare.app</p>
      </LogoWrapper>

      <MenuWrapper
        onClick={handleClick}
        style={{ width: 256 }}
        // defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <SubMenu key="sub1" icon={<HiOutlineUsers />} title="Admin">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<BsCheckSquare />} title="Knowledge Base">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<BsCheckSquare />} title="Train SAM">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<VscInbox />} title="Agent Inbox">
          <Menu.Item key="13">Option 9</Menu.Item>
          <Menu.Item key="14">Option 10</Menu.Item>
          <Menu.Item key="15">Option 11</Menu.Item>
          <Menu.Item key="16">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" icon={<MdAccessTime />} title="Help Center">
          <Menu.Item key="17">Option 9</Menu.Item>
          <Menu.Item key="18">Option 10</Menu.Item>
          <Menu.Item key="19">Option 11</Menu.Item>
          <Menu.Item key="20">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub7" icon={<BsChatDots />} title="Analytics">
          <Menu.Item key="20">Teams</Menu.Item>
          <Menu.Item key="21">Knowledge Base</Menu.Item>
          <Menu.Item key="22">Training SAM</Menu.Item>
          <Menu.Item key="23">Help Center</Menu.Item>
        </SubMenu>
      </MenuWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  padding: 1rem;
  border-right: 1px solid var(--border-color);
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border: 1px solid #ecebf5;
  border-radius: 8px;
  padding: 1rem 4rem;

  & h4 {
    color: var(--black-color);
    font-size: 0.875rem;
    margin: 0;
    font-weight: 600;
  }
  & p {
    margin: 0;
    font-size: 0.75rem;
  }
`;

const MenuWrapper = styled(Menu)`
  margin: 40px 0;
  color: var(--gray-color);

  & .ant-menu-submenu-arrow {
    color: var(--gray-color);
  }

  & .ant-menu-submenu-selected {
    color: var(--purple-color);
    // font-weight: 600;
  }
  & .ant-menu-submenu-title:hover {
    color: var(--purple-color);
    & .ant-menu-submenu-arrow {
      color: var(--purple-color);
    }
  }
  & .ant-menu {
    background-color: transparent !important;
  }
  & .ant-menu-item-selected {
    background: transparent !important;
    font-weight: 600;
    &.ant-menu-item-selected {
      color: var(--black-color) !important;
    }
    &::after {
      border: none !important;
    }
    &:hover {
      color: var(--black-color) !important;
      font-weight: 600;
    }
  }
  & .ant-menu-item {
    &:hover {
      color: var(--black-color) !important;
    }
  }
`;

export default SideBar;
