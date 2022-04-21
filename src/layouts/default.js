import React from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const DefaultLayout = ({ title, showBackIcon = false, children }) => {
  return (
    <React.Fragment>
      <Header title={title} showBackIcon={showBackIcon} />
      <main className="main-wrapper">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export { DefaultLayout };
