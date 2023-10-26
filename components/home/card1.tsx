import { Card, Text } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Card1 = () => {
  return (
    <div className="h-full mr-2 w-2/3">
      <Card>
        <Card.Body className="flex h-full">
          <h1 className="text-lg mb-2 "> Hello ....</h1>
          <Card
            css={{
              bg: "$white",
              width: "auto",
              height: "$32",
              alignContent: "start",
            }}
          >
            <Flex
              direction={"column"}
              align={"start"}
              css={{
                px: "$3",
              }}
            >
              <Box className="mt-3 px-2">
                <Text
                  span
                  size={"$xl"}
                  className="text-gray-600"
                >
                  Margin
                </Text>
              </Box>
              <Box className="mt-2 px-2">
                <Text span size={"$xl"} className="text-gray-600">
                  13.000.000,00
                </Text>
              </Box>
              <Box className="px-2 mt-2">
                <Text
                  span
                  size={"$xs"}
                  css={{ color: "$green600" }}
                  weight={"semibold"}
                >
                  {"⭐"}
                </Text>
                <Text span size={"$xs"} className="text-gray-600">
                  Boost Everything !
                </Text>
              </Box>
            </Flex>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
};