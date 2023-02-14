import {
  Box,
  Center,
  HStack,
  Spinner,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { IMovie } from "../utils/interfaces";
import { getData } from "../utils/movies";
import { Movie } from "./Movie";
import { useIntersectionObserver } from "usehooks-ts";

export const MovieList = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const offset = useRef<number | null>(0);
  const [loading, setLoading] = useState(false);
  const loadMoreTriggerRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersectionObserver(loadMoreTriggerRef, {});

  const getMovies = async () => {
    if (offset.current === null) return;

    setLoading(true);
    const results = await getData(offset.current);
    offset.current = results.next;
    setMovies((m) => [...m, ...results.data]);

    setLoading(false);
  };

  useEffect(() => {
    if (intersection?.isIntersecting) getMovies();
  }, [intersection?.isIntersecting]);

  return (
    <VStack p="40px" overflow="visible">
      <Wrap m="0" justify="center" overflow="visible">
        {movies.map((movie) => (
          <WrapItem>
            <Movie movie={movie} />
          </WrapItem>
        ))}
      </Wrap>
      <div ref={loadMoreTriggerRef} />
      {loading && (
        <Box pt={4}>
          <Spinner colorScheme="blue" />
        </Box>
      )}
    </VStack>
  );
};
