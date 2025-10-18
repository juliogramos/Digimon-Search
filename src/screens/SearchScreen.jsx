import * as React from "react";
import {
  Container,
  Typography,
  Box,
  Pagination,
  CircularProgress,
} from "@mui/material";
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

  const showData = queryData && !query;
  const showLoading = !queryData && query;
  console.log(queryData === null, query === null);

  function changePage(e, v) {
    client({ query: query, page: v - 1 }).then((data) => {
      setQueryData(data.content);
      setPage(v);
    });
  }

  React.useEffect(() => {
    if (query) {
      setQueryData(null);
      client({ query: query }).then((data) => {
        setQueryData(data.content);
        setQueryPageable(data.pageable);
        setPage(1);
        setQueried(true);
        setQuery(null);
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
        {!queried ? (
          <Typography variant="h3">Search for a Digimon.</Typography>
        ) : showLoading ? (
          <CircularProgress />
        ) : showData ? (
          <>
            <SearchList queryData={queryData} />
            <Pagination
              count={Math.ceil(queryPageable.totalElements / 5)}
              page={page}
              onChange={changePage}
            />
          </>
        ) : (
          <Typography variant="h3">No Digimon found.</Typography>
        )}
      </Box>
    </Container>
  );
}

export default SearchScreen;
