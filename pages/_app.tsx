import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineColorsTuple, MantineProvider, createTheme, virtualColor } from "@mantine/core";
//https://tabler.io/icons

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
  const myLight: MantineColorsTuple = [
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
  const myDark: MantineColorsTuple = [
    "#f7f3f2",
    "#e7e5e5",
    "#d2c9c6",
    "#bdaaa4",
    "#ab9087",
    "#a17f75",
    "#9d766b",
    "#896459",
    "#7b584e",
    "#6d4b40"
  ];

  const theme = createTheme({
    colors: {
      myColor,
      myDark,
      myLight,
      myPrimary: virtualColor({
        name: 'myPrimary',
        dark: 'myDark',
        light: 'myLight',
      }),
    },
    primaryColor: "myPrimary",
    defaultRadius: 15,
  });

  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
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
