import { FC } from "react";

// components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavProvider from "../../context/NavContext/NavContext";
import { Container } from "./Layout.styled";

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <NavProvider>
        <Navbar />
      </NavProvider>
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
