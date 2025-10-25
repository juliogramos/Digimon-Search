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
import {
  flexColumnCenter,
  mainContainerSx,
  topBottomBg,
} from "../utils/styles";
import DigimonErrorFallback from "../components/DigimonErrorFallback";
import { useAsync } from "../utils/useAsync";

function SearchScreen() {
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [query, setQuery] = React.useState(null);
  const [queried, setQueried] = React.useState(false);
  const [page, setPage] = React.useState(1);

  function submitFunction(newQuery) {
    setQueried(true);
    setQuery(newQuery);
  }

  function changePage(e, v) {
    setPage(v);
    run(client({ query: query, page: v - 1 }));
  }

  React.useEffect(() => {
    if (!queried) return;
    run(client({ query: query }));
  }, [queried, query, run]);

  return (
    <Container sx={mainContainerSx}>
      <Box
        sx={{
          ...flexColumnCenter,
          ...topBottomBg,
          gap: 1,
          width: "100vw",
        }}
      >
        <Typography variant="h1" color="primary.main">
          Digimon Search
        </Typography>
        <SearchBar submitFunction={submitFunction} />
        {data?.pageable ? (
          <Pagination
            count={Math.ceil(data.pageable.totalElements / 5)}
            page={page}
            onChange={changePage}
          />
        ) : null}
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 4, flexWrap: "wrap" }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : isError ? (
          <DigimonErrorFallback error={error} />
        ) : isSuccess ? (
          <SearchList queryData={data.content} />
        ) : null}
      </Box>
    </Container>
  );
}

export default SearchScreen;
