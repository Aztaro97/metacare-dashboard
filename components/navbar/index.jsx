import React from "react";
import { Dropdown, Menu } from "antd";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { DownOutlined } from "@ant-design/icons";
import {Container} from "./navbarStyling"

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Log In
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Log Out
      </a>
    </Menu.Item>
  </Menu>
);

const NabBar = () => {
  return (
    <Container>
      <form action="" className="form-search">
        <input
          type="text"
          placeholder="Ask us any question"
          className="input-search"
        />
        <BiSearch className="icon" />
      </form>

      <ul className="nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <IoMdNotificationsOutline className="notify-icon" />
            <span>{3}</span>
          </a>
        </li>
        <li className="nav-item">
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <span>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt=""
                  className="profile-pic"
                />
              </span>
              <DownOutlined />
            </a>
          </Dropdown>
        </li>
      </ul>
    </Container>
  );
};

export default NabBar;
