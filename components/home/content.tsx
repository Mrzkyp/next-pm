import React from "react";
import { Text, Link } from "@nextui-org/react";
import { Box } from "../styles/box";
import dynamic from "next/dynamic";
import { Flex } from "../styles/flex";
import { TableWrapper } from "../table/table";
import NextLink from "next/link";
import { Card1 } from "./card1";
import {Breadcrumbs, Crumb, CrumbLink} from '../breadcrumb/breadcrumb.styled';
import {HouseIcon} from '../icons/breadcrumb/house-icon';
import {UsersIcon} from '../icons/breadcrumb/users-icon';
import { Card2 } from "./card2";
import Calendar from "../charts/calender";
import CardList from "./card-list";
import Status from "./status";

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
      <div className="px-2">
      <Breadcrumbs>
            <Crumb>
               <HouseIcon />
               <Link href={'/'}>
                  <CrumbLink href="#">Home</CrumbLink>
               </Link>
            </Crumb>
         </Breadcrumbs>
      </div>

      {/* Card Section Top */}
      <div className="flex w-full px-2 justify-around rounded-xl">
        <Card1 />
        <Card2 />
        {/* <CardBalance3 /> */}
      </div>

      {/* Chart */}
      <div className="flex place-content-center w-full">
        <Calendar ValuePiece={new Date()} />
      </div>

      <div className="flex w-full">
        <Status />
      </div>

      {/* Left Section */}
      <div className="flex p-2 justify-start h-full w-full">
        <div className="p-3">
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
              <CardList />
            </Flex>
        </div>
        <div className="p-3">
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
              <CardList />
            </Flex>
        </div>
        <div className="p-3">
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
              <CardList />
            </Flex>
        </div>
      </div>
    </Flex>
  </Box>
);
