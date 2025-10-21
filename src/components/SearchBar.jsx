import { TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar({ setQuery }) {
  function handleSubmit(e) {
    e.preventDefault();
    setQuery(e.target[0].value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <TextField
        placeholder="Search Digimon"
        variant="outlined"
        sx={{ width: "100%" }}
      ></TextField>
      <IconButton type="submit" aria-label="search">
        <Search />
      </IconButton>
    </form>
  );
}

export default SearchBar;
