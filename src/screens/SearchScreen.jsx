import * as React from "react";
import { Container, Typography, Box, Pagination } from "@mui/material";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";
import client from "../utils/client";
import { mainContainerSx } from "../utils/styles";

function SearchScreen() {
  const [query, setQuery] = React.useState(null);
  const [queryData, setQueryData] = React.useState(null);
  const [queryPageable, setQueryPageable] = React.useState(null);
  const [queried, setQueried] = React.useState(false);
  const [page, setPage] = React.useState(1);

  function changePage(e, v) {
    client({ query: query, page: v - 1 }).then((data) => {
      setQueryData(data.content);
      setPage(v);
    });
  }

  React.useEffect(() => {
    if (query) {
      client({ query: query }).then((data) => {
        setQueryData(data.content);
        setQueryPageable(data.pageable);
        setPage(1);
        setQueried(true);
      });
    }
  }, [query]);

  return (
    <Container sx={mainContainerSx}>
      <Typography variant="h1" color="primary.main">
        Digimon Search
      </Typography>
      <SearchBar setQuery={setQuery} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {queryData ? (
          <>
            <SearchList queryData={queryData} />
            <Pagination
              count={Math.ceil(queryPageable.totalElements / 5)}
              page={page}
              onChange={changePage}
            />
          </>
        ) : queried ? (
          <Typography variant="h3">No Digimon found.</Typography>
        ) : (
          <Typography variant="h3">Search for a Digimon.</Typography>
        )}
      </Box>
    </Container>
  );
}

export default SearchScreen;
