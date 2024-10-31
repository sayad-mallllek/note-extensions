import { useState } from "react";
import "./App.css";
import { Circle, Container, defineConfig, Heading } from "@chakra-ui/react";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeButton, ColorModeProvider } from "./components/ui/color-mode";
import NoteList from "./components/modules/note-list";
import NotesDrawer from "./components/modules/notes-drawer";

function App() {
  const [notes, setNotes] = useState<{ element: HTMLElement; note: string }[]>(
    []
  );

  const handleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const note = `Note attached to ${target.tagName}`;
    setNotes([...notes, { element: target, note }]);
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider defaultTheme="light" forcedTheme="light">
        <Container
          minHeight={"100dvh"}
          background={"white"}
          onClick={handleClick}
          position="relative"
        >
          <Heading>Header</Heading>
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
          {notes.map((note, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                left: note.element.getBoundingClientRect().left,
                top: note.element.getBoundingClientRect().top,

                transform: "translate(-50%, -50%)",
              }}
            >
              <Circle size={4} bg={"red.500"} />
            </div>
          ))}
          <NotesDrawer />
        </Container>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
