import React from "react";
import AppHeader from "../components/app-header/AppHeader";
import Sidebar from "../components/sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="bg-black">
      <AppHeader title="hello world" headingLevel="h4" />
      <Sidebar />
    </div>
  );
};

export default AppLayout;
