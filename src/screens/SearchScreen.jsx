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

function SearchScreen() {
  const [query, setQuery] = React.useState(null);
  const [queryData, setQueryData] = React.useState(null);
  const [queryPageable, setQueryPageable] = React.useState(null);
  const [queried, setQueried] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  function changePage(e, v) {
    setLoading(true);
    client({ query: query, page: v - 1 }).then((data) => {
      console.log(data);
      setQueryData(data.content);
      setPage(v);
      setLoading(false);
    });
  }

  React.useEffect(() => {
    if (query) {
      setQueried(true);
      setLoading(true);
      setQueryData(null);
      client({ query: query }).then(
        (data) => {
          setQueryData(data.content);
          setQueryPageable(data.pageable);
          setPage(1);
          setLoading(false);
        },
        (error) => setError(error)
      );
    }
  }, [query]);

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
        <SearchBar setQuery={setQuery} />
        {queryData ? (
          <Pagination
            count={Math.ceil(queryPageable.totalElements / 5)}
            page={page}
            onChange={changePage}
          />
        ) : null}
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 4, flexWrap: "wrap" }}
      >
        {error ? (
          <DigimonErrorFallback error={error} />
        ) : !queried ? null : loading ? (
          <CircularProgress />
        ) : queryData ? (
          <SearchList queryData={queryData} />
        ) : (
          <Typography variant="h3" color="primary.main" sx={topBottomBg}>
            No Digimon found.
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default SearchScreen;
