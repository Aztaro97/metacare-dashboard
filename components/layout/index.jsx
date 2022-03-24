import React from "react";
import styled from "styled-components";
import SideBar from "../sidebar/index";
import Navbar from "../navbar/index";

const Layout = ({ children }) => {
  return (
    <LayoutStyling>
      <SideBar />
      <div className="container">
        <Navbar />
        <main>{children}</main>
      </div>
    </LayoutStyling>
  );
};

const LayoutStyling = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "sidebar main";
  & .container {
  }
`;

export default Layout;
