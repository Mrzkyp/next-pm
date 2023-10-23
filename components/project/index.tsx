import { Flex } from "../styles/flex";
import { Card } from "@nextui-org/react";

export const Project = () => {
   return (
      <Flex css={{
         'mt': '$5',
            'px': '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },   
         }}
         justify = {'center'}
         direction = {'column'}
         >
         <div>
            <Card>
               "ini Project"
            </Card>
         </div>
         </Flex>
   );
};