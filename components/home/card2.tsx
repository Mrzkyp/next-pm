import { Card, Text } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Card2 = () => {
  return (
    <div className="h-full w-1/3">
      <Card>
        <Card.Body className="flex h-full">
          <h1 className="text-lg mb-2">Riwayat</h1>
          <Card
            css={{
              bg: "$white",
              width: "auto",
              height: "$32",
              alignContent: "start",
            }}
          >
            <div>
              <div>
                <div>
                  <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", mh: "100px" }}
                  >
                    <Card.Body>
                      <Text>A pressable card.</Text>
                    </Card.Body>
                  </Card>
                  <Card
                    isPressable
                    isHoverable
                    variant="bordered"
                    css={{ mw: "400px", mh: "100px" }}
                  >
                    <Card.Body>
                      <Text>A pressable card.</Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div>
                <div className="sticky top-0">B</div>
                <div>
                  <div>
                    <img src="..." />
                    <strong>Bob Alfred</strong>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
};
