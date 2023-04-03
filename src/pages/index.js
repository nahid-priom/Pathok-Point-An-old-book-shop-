import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { PathokButton } from "@/components/atoms";

import { Box, Text } from "@chakra-ui/react";
import { Navbar } from "@/components/molecules";
import { HeroSection } from "@/components/molecules/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pathok Point</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Navbar></Navbar>
      </Box>
      <Box>
        <HeroSection></HeroSection>
      </Box>
    </>
  );
}
