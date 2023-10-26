import { Card, Grid } from "@nextui-org/react";
import { AddIcon } from "../icons/project/add-icon";
import {
  Button,
  Divider,
  Input,
  Modal,
  Text,
  Dropdown,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Flex } from "../styles/flex";

export default function AddProject() {
  // const [selected, setSelected] = React.useState(new Set(["text"]));
  const [selected, setSelected] = useState<string>("");

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Grid.Container className="py-4">
        <Grid>
          <Button shadow color="gradient" auto onClick={handler}>
            <AddIcon />
            <Text h3>Tambah Project</Text>
          </Button>
        </Grid>
      </Grid.Container>
      <Modal
        aria-labelledby="modal-title"
        blur
        width="600px"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header css={{ justifyContent: "start", marginTop: "$3" }}>
          <Text id="modal-title" className="text-2xl">
            Add New Project
          </Text>
        </Modal.Header>
        <Divider css={{ my: "$5" }} />
        <Modal.Body css={{ py: "$10" }}>
          <Flex
            direction={"column"}
            css={{
              flexWrap: "wrap",
              gap: "$12",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
            <Flex
              css={{
                gap: "$12",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Text className="mt-2" h1>
                Nama Project:
              </Text>
              <Input
                clearable
                bordered
                width="120px"
                color="primary"
                placeholder="Nama Project"
              />
              <Text className="mt-2" h1>
                Type Payment:
              </Text>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="secondary"
                  css={{ tt: "capitalize" }}
                >
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={(value) => setSelected(value as string)}
                >
                  <Dropdown.Item key="text">Text</Dropdown.Item>
                  <Dropdown.Item key="number">Number</Dropdown.Item>
                  <Dropdown.Item key="date">Date</Dropdown.Item>
                  <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                  <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Flex>
            <Flex
              css={{
                gap: "$16",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Text className="mt-2" h1>
                Start Date :
              </Text>
              <Input bordered width="120px" type="date" />
              <Text className="mt-2 ml-2" h1>
                Document :
              </Text>
              <Input clearable bordered width="100px" />
            </Flex>
            <Flex
              css={{
                gap: "$17",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Text className="mt-2" h1>
                End Date :
              </Text>
              <Input bordered width="120px" type="date" />
              <Text className="mt-2" h1>
                Image :
              </Text>
              <Input clearable bordered className="ml-5" width="100px" />
            </Flex>
          </Flex>
        </Modal.Body>
        <Divider css={{ my: "$6" }} />
        <Modal.Body>
          <Flex
            css={{
              gap: "$12",
              flexWrap: "wrap",
              "@lg": { flexWrap: "nowrap" },
            }}
          >
            <Text className="mt-2" h1>
              Users Contribute :
            </Text>
            <Input
              clearable
              bordered
              width="120px"
              color="primary"
              placeholder=""
            />
          </Flex>
          <Flex>
            <Text h3>Contribute</Text>
          </Flex>
        </Modal.Body>
        <Divider css={{ my: "$6" }} />
        <Modal.Footer>
          <Grid.Container className="py-4 justify-end">
            <Grid>
              <Button shadow color="gradient" auto onClick={closeHandler}>
                <AddIcon />
                <Text h3>Tambah Project</Text>
              </Button>
            </Grid>
          </Grid.Container>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
function UseState<T>(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
