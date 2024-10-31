import { Container, Heading, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  message: string;
  createdAt: Date;
}

const Note = ({ message, title, createdAt }: Props) => {
  const formatDate = (date: Date) => {
    // return the format like "14/02/2022 16:48"

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  return (
    <Container
      display="flex"
      flexDirection="column"
      gap={4}
      borderBottomColor={"bbbbbb"}
      borderBottomWidth={1}
      backgroundColor={"gray.100"}
      borderRadius={4}
    >
      <Heading size={"xl"} as={"h4"}>
        {title}
      </Heading>
      <Text fontSize={"md"}>{message}</Text>
      <Text fontSize={"sm"}>{formatDate(createdAt)}</Text>
    </Container>
  );
};

export default Note;
