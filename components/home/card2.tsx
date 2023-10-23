import { Card, Text } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Card2 = () => {
  return (
    <div className="h-full w-1/3">
      <Card>
        <Card.Body className="flex h-full bg-orange-600">
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
                <div className="sticky top-0 ...">A</div>
                <div>
                  <div>
                    <img src="..." />
                    <strong>Andrew Alfred</strong>
                  </div>
                  <div>
                    <img src="..." />
                    <strong>Aisha Houston</strong>
                  </div>
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
