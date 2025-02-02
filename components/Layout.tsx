import Head from "../node_modules/next/head";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";

interface Props {
  children?: React.ReactNode;
  fluid?: boolean;
  footerPropsMarginTop?: boolean;
  hideFooter?: boolean;
}

export default (props: Props) => {
  return (
    <>
      <Head>
        <title>AmazonFACE + DataMap</title>
        <link rel="icon" href="/img/logo-amazonface.png" />
        <meta charSet="utf-8"></meta>
      </Head>

      <Navbar />
      <main
        className={`${
          props.fluid ? "" : "container pb-4 px-4"
        } mx-auto bg-primary-50`}
      >
        {props.children}
      </main>
      {!props.hideFooter && <Footer marginTop={props.footerPropsMarginTop} />}
    </>
  );
};
