import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineColorsTuple, MantineProvider, createTheme } from "@mantine/core";
//import { theme } from "../theme";

export default function App({ Component, pageProps }: any) {

  const myColor: MantineColorsTuple = [
    "#e5f9ff",
    "#d6edf6",
    "#b2d8e7",
    "#8bc3d9",
    "#6ab0cc",
    "#54a5c5",
    "#469fc2",
    "#348aac",
    "#267c9a",
    "#016c89"
  ];

  const theme = createTheme({
    colors: {
      myColor,
    },
    primaryColor: "myColor"
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
