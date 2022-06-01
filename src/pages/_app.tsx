import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import themes from "@services/themes";
import GlobalStyle from "@components/Layout/GlobalStyle";
import Topbar from "@components/Topbar";
import Sidebar from "@components/SideBar";
import Feed from "@components/Feed";
import Head from "@components/Head";
import Script from "@components/Script";

import "remixicon/fonts/remixicon.css";
import APP from "@constants/app";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={themes.dark}>
      <Head description={APP.DESCRIPTION} />
      <GlobalStyle />
      <Topbar />
      <Sidebar />
      <Feed />
      <Component {...pageProps} />
      <Script />
    </ThemeProvider>
  );
};

export default App;
