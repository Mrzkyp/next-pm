import React from "react";
import { Text, Link } from "@nextui-org/react";
import { Box } from "../styles/box";
import dynamic from "next/dynamic";
import { Flex } from "../styles/flex";
import { TableWrapper } from "../table/table";
import NextLink from "next/link";
import { Card1 } from "./card1";
import { Card2 } from "./card2";
import { CardBalance3 } from "./card-balance3";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";
import Calendar from "../charts/calender";

export const Content = () => (
  <Box css={{ overflow: "hidden", height: "100%" }}>
    <Flex
      css={{
        gap: "$8",
        pt: "$5",
        height: "fit-content",
        flexWrap: "wrap",
        "@lg": {
          flexWrap: "nowrap",
        },
        "@sm": {
          pt: "$3",
        },
      }}
      justify={"start"}
    >
      {/* Card Section Top */}
      <div className="flex w-full justify-around rounded-xl">
        <Card1 />
        <Card2 />
        {/* <CardBalance3 /> */}
      </div>

      {/* Chart */}
      <div className="w-full">
        <Box
          css={{
            width: "100%",
            backgroundColor: "$blue600",
            boxShadow: "$lg",
            borderRadius: "$2xl",
            px: "$10",
            py: "$10",
          }}
        >
          <Calendar ValuePiece={new Date()}/>
        </Box>   
      </div>

      {/* Left Section */}
      <Box
        css={{
          px: "$12",
          mt: "$8",
          height: "fit-content",
          "@xsMax": { px: "$10" },
          gap: "$6",
          overflow: "hidden",
        }}
      >
        <Text
          h3
          css={{
            textAlign: "center",
            "@lg": {
              textAlign: "inherit",
            },
          }}
        >
          Section
        </Text>
        <Flex
          direction={"column"}
          justify={"center"}
          css={{
            gap: "$8",
            flexDirection: "row",
            flexWrap: "wrap",
            "@sm": {
              flexWrap: "nowrap",
            },
            "@lg": {
              flexWrap: "nowrap",
              flexDirection: "column",
            },
          }}
        >
          <CardAgents />
          <CardTransactions />
        </Flex>
      </Box>
    </Flex>

    {/* Table Latest Users */}
    <Flex
      direction={"column"}
      justify={"center"}
      css={{
        width: "100%",
        py: "$10",
        px: "$10",
        mt: "$8",
        "@sm": { px: "$20" },
      }}
    >
      <Flex justify={"between"} wrap={"wrap"}>
        <Text
          h3
          css={{
            textAlign: "center",
            "@lg": {
              textAlign: "inherit",
            },
          }}
        >
          Latest Users
        </Text>
        <NextLink href="/accounts">
          <Link
            block
            color="primary"
            css={{
              textAlign: "center",
              "@lg": {
                textAlign: "inherit",
              },
            }}
          >
            View All
          </Link>
        </NextLink>
      </Flex>
      <TableWrapper />
    </Flex>
  </Box>
);
