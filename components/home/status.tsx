import { Badge, Text, Grid } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";

export default function Status() {
  return (
    <Grid.Container gap={2} justify="flex-start" className="ml-2">
        <Grid xs={6} md={1} alignItems="center">
          <Badge color="success" variant="dot" />
          <Text css={{ ml: "$2" }}>Success</Text>
        </Grid>

      <Grid xs={6} md={1} alignItems="center">
        <Badge color="warning" variant="dot" />
        <Text css={{ ml: "$2" }}>Warning</Text>
      </Grid>

      <Grid xs={6} md={1} alignItems="center">
        <Badge color="error" variant="dot" />
        <Text css={{ ml: "$2" }}>Error</Text>
      </Grid>
    </Grid.Container>
  );
}
