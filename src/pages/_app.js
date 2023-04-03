import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

import { Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const rotobo = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500","700","900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={rotobo.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
