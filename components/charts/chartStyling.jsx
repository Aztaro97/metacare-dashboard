import styled from "styled-components"

export const Container = styled.div`
display: flex;
width: 100%;
border: 1px solid var(--border-color);
border-radius: 10px;
margin-bottom: 20px;
`;

export const Aside = styled.div`
flex: 1;
padding: 1rem;
border-left: 1px solid var(--border-color);
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.5rem;

& .box {
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fafafa;
  border: 1px solid #ecebf5;
  border-radius: 10px;

  & p {
    font-size: 0.875rem;
    color: var(--gray-color);
  }
  & h1 {
    font-size: 1.25rem;
    color: var(--black-color);
    font-weight: 600;
  }
}
`;

export const ChartContainer = styled.div`
flex: 4;
padding: 1rem;

& .chart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 13px;
  width: 100%;

  & .head-left {
    display: flex;
    align-items: center;
    gap: 10px;

    & .rate {
      width: 70px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(37, 187, 135, 0.1);
      & .rate-value {
        font-size: 0.75rem;
        color: var(--green-color);
        font-weight: 600;
      }
    }

    & .title {
      color: var(--black-color);
      font-size: 1.125rem;
      font-weight: 600;
      margin: 0;
    }
  }

  & .head-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    & .status {
      display: flex;
      align-items: center;
      gap: 5px;
      & .status-type {
        width: 10px;
        height: 10px;
        border-radius: 2px;
        background: ${({ chartColor }) => chartColor};
        // background: ;
      }
      & h3 {
        font-size: 0.875rem;
        font-weight: 600;
        margin: 0;
      }
    }
    & .date-picker {
      & input::placeholder {
        font-weight: 600;
        color: var(--black-color) !important;
      }
    }
  }
}
`;