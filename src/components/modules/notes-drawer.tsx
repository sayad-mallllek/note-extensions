import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Flex, IconButton } from "@chakra-ui/react";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import NoteList from "./note-list";
import { PiNotePencil } from "react-icons/pi";
import { RiMapPinAddFill } from "react-icons/ri";

interface Props {}

const NotesDrawer = ({}: Props) => {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton
          variant="outline"
          size="sm"
          position={"fixed"}
          right={0}
          top={"50%"}
          translateY={"-50%"}
        >
          <TbLayoutSidebarLeftCollapseFilled />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notes</DrawerTitle>
        </DrawerHeader>
        <DrawerBody paddingX={0} paddingY={4}>
          <Flex marginBottom={8} direction={"column"} gap={2} padding={2}>
            <IconButton variant="outline" size={"xs"} width={"fit-content"}>
              <RiMapPinAddFill />
            </IconButton>
          </Flex>
          <NoteList
            notes={[
              {
                title: "Note 1",
                message: "This is note 1",
                createdAt: new Date(),
              },
              {
                title: "Note 2",
                message: "This is note 2",
                createdAt: new Date(),
              },
            ]}
          />
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button>Save</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default NotesDrawer;
