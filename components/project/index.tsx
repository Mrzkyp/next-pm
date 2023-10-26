import { Flex } from "../styles/flex";
import { Card } from "@nextui-org/react";
import { Breadcrumbs, Crumb, CrumbLink } from "../breadcrumb/breadcrumb.styled";
import { HouseIcon } from "../icons/breadcrumb/house-icon";
import { ProjectIcon } from "../icons/project/project-icon";
import Image from 'next/image';
import {Button, Input, Text} from '@nextui-org/react';
import Link from "next/link";
import AddProject from "./add-project";
import {TableProject} from '../table/table-project';
export const Project = () => {
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
       <Breadcrumbs>
            <Crumb>
               <HouseIcon />
               <Link href={'/'}>
                  <CrumbLink href="#">Home</CrumbLink>
               </Link>
               <Text>/</Text>
            </Crumb>

            <Crumb>
               <ProjectIcon />
               <CrumbLink href="#">Project</CrumbLink>
            </Crumb>
         </Breadcrumbs>

      <div className="mb-2">
         <Text h3>Kso Payment Type</Text>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row snap-x">
          <Card>
            <div className="snap-center ...">
              <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
          </Card>
          <Card>
            <div className="snap-center ...">
              <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
          </Card>
          <Card>
            <div className="snap-center ...">
              <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
          </Card>
          <Card>
            <div className="snap-center ...">
              <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
          </Card>
          <Card>
            <div className="snap-center ...">
              <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
          </Card>
          <Card>
            <div className="snap-center ...">
              <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
            </div>
          </Card>
        </div>
      </div>
      <div>
      <AddProject />
      </div>
      <div>
      <TableProject />
      </div>
    </Flex>
  );
};
