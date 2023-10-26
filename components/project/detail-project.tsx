import { Card } from "@nextui-org/react";
import { Flex } from "../styles/flex";

export default function DetailProject (){
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
        <Card>"ini Detail"</Card>
      </div>
    </Flex>
    )
}