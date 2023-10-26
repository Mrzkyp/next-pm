import { Button, Divider, Input, Modal, Text, Grid } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";
import { AddIcon } from "../icons/accounts/add-icon";

export const AddUser = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button bordered color="gradient" auto onClick={handler}>
        <AddIcon />
        <Text h3>Tambah User</Text>
      </Button>
      <Modal
        blur
        aria-labelledby="modal-title"
        width="600px"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header css={{ justifyContent: "start" }}>
          <Text id="modal-title" h1 className="text-2xl">
            Tambah Pengguna
          </Text>
        </Modal.Header>
        <Divider css={{ my: "$5" }} />
        <Modal.Body css={{ py: "$10" }}>
          <Flex
            direction={"column"}
            css={{
              flexWrap: "wrap",
              gap: "$8",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Text className="mt-2" h1>
                Nama :
              </Text>
              <Input
                clearable
                bordered
                width="200px"
                color="primary"
                placeholder="Nama Lengkap"
              />
              <Text className="mt-2" h1>
                level :
              </Text>
              <Input
                clearable
                bordered
                width="170px"
                color="primary"
                placeholder="Level"
              />
            </Flex>
            <Flex
              className="mt-6"
              css={{
                gap: "$11",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Text className="mt-2" h1>
                Email :
              </Text>
              <Input
                clearable
                bordered
                width="200px"
                color="primary"
                placeholder="Email"
              />
              <Text className="mt-2" h1>
                Image :
              </Text>
              <Input
                clearable
                bordered
                width="120px"
                color="primary"
                placeholder=""
              />
            </Flex>
            <Flex
              className="mt-6"
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Text className="mt-2" h1>
                Password :
              </Text>
              <Input.Password
                bordered
                clearable
                color="primary"
                type="password"
                placeholder="password"
              />
            </Flex>
          </Flex>
        </Modal.Body>
        <Divider css={{ my: "$5" }} />
        <Modal.Footer>
          <Button shadow color="gradient" auto onClick={handler}>
            <AddIcon />
            <Text h3>Tambah User</Text>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
