import React from "react";
import DashboardDrive from "../Drive/components/layout/DashboardDrive";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../Drive/utilities/theme";

const Drive = () => {
  return (
    <div className="DrivePageBg">
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <DashboardDrive />
      </ChakraProvider>
      </div>
  )
}

export default Drive;
