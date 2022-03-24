import React from "react";
import { Dropdown, Menu } from "antd";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { DownOutlined } from "@ant-design/icons";

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

const Container = styled.div`
  padding: 12px 40px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  border-bottom: 1px solid var(--border-color);

  & .form-search {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .input-search {
      border: none;
      background: #fafafc;
      border-radius: 10px;
      padding: 10px 10px;
      width: 441px;
      &:focus {
        outline: none;
      }
    }
    & .icon {
      position: absolute;
      right: 15px;
      top: 25px;
      bottom: 0;
      color: #a3a3c2;
    }
  }

  & .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    border: 1px solid #ecebf5;

    & .nav-item:first-child {
      border-right: 1px solid #ecebf5;
    }

    & .nav-item {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      & .nav-link {
        text-decoration: none;
        display: flex;
        align-items: center;

        & .notify-icon {
          font-size: 20px;
          color: #92929d;
        }
        & span {
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background: var(--orange-color);
          color: #fff;
          font-size: 0.75rem;
        }
      }
    }

    & .ant-dropdown-link {
      text-decoration: none;
      & .profile-pic {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid var(--purple-color);
        margin-right: 5px;
      }
      & svg {
        color: var(--purple-color);
      }
    }
  }
`;
export default NabBar;
