import React from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import "./MainLayout.css";

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
