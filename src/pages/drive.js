import React from "react";
import DashboardDrive from "../Drive/components/layout/DashboardDrive";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../Drive/utilities/theme";

const Drive = () => {
  return (
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <DashboardDrive />
      </ChakraProvider>
  )
}

export default Drive;
