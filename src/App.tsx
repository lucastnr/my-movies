import { Box } from "@chakra-ui/react";
import { Modal } from "./components/Modal";
import { MovieList } from "./components/MovieList";
import { Nav } from "./components/Nav";
import { ModalProvider } from "./provider/modal";

function App() {
  return (
    <ModalProvider>
      <Modal />
      <Box background="gray.800" minH="100vh" color="white">
        <Nav />
        <MovieList />
      </Box>
    </ModalProvider>
  );
}

export default App;
