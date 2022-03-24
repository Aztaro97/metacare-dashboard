import styled from "styled-components";

export const Container = styled.div`
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
