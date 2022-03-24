import styled from "styled-components";
export const Container = styled.div`
  padding: 0 1rem;

  & .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;

    & .title {
      font-size: 1.5rem;
      color: var(--black-color);
      font-weight: 600;
      margin-bottom: 0;
    }
    & .form-group-search {
      position: relative;
      & .icon {
        position: absolute;
      }
      & input {
        border: 1px solid #e1e1eb;
        border-radius: 8px;
        padding: 10px;
        &:focus {
          outline: none;
        }
      }
      & .icon {
        position: absolute;
        right: 15px;
        top: 15px;
        bottom: 0;
      }
    }
    & .select-filter {
      & .ant-select-selector {
        height: 44px;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        & .ant-select-selection-item {
          font-weight: 600;
          display: flex;
          align-items: center;
          height: 100%;
        }
      }
    }
    & .form-button {
      width: 105px;
      background: var(--green-color);
      padding: 10px 16px;
      outline: none;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      color: #fff;
      cursor: pointer;
    }
  }

  & .form {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
