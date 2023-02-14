import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { useModal } from "../provider/modal";
import { IMovie } from "../utils/interfaces";

export const Movie: React.FC<{ movie: IMovie }> = ({ movie }) => {
  const { onOpen } = useModal();

  const openMovie = () => {
    onOpen(
      <HStack spacing={4}>
        <Box>
          <Heading>{movie.title}</Heading>
          <Text>{movie.overview}</Text>
        </Box>
        <Box minW="300px" pt={10}>
          <Image w="full" src={poster} borderRadius="md" />
        </Box>
      </HStack>
    );
  };

  const poster = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
  return (
    <Box
      as={Button}
      border="0"
      p="0"
      w="200px"
      h="300px"
      _hover={{
        transform: "scale(1.2)",
        zIndex: 100,
        shadow: "lg",
      }}
      transition="all 0.3s ease-in-out"
      onClick={openMovie}
    >
      <Image src={poster} borderRadius="md" />
    </Box>
  );
};
