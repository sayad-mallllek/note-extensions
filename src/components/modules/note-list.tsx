import { Container, Separator } from "@chakra-ui/react";
import Note from "./note";

interface Props {
  notes: {
    title: string;
    message: string;
    createdAt: Date;
  }[];
}

const NoteList = ({ notes }: Props) => {
  return (
    <Container display={"flex"} flexDirection={"column"} gap={4}>
      {notes.map((note, index, self) => (
        <>
          <Note
            key={index}
            title={note.title}
            message={note.message}
            createdAt={note.createdAt}
          />
          {index !== self.length - 1 && <Separator />}
        </>
      ))}
    </Container>
  );
};

export default NoteList;
