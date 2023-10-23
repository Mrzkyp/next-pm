import { Card } from "@nextui-org/react";
import { Flex } from "../styles/flex";

export const WorkOrder = () => {
  return (
    <Flex
      css={{
        mt: "$5",
        px: "$6",
        "@sm": {
          mt: "$10",
          px: "$16",
        },
      }}
      justify={"center"}
      direction={"column"}
    >
      <div>
        <Card>"ini Work-Order"</Card>
      </div>
    </Flex>
  );
};
