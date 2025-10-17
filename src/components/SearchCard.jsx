import { Typography, Avatar, Paper, Link } from "@mui/material";

function SearchCard({ name, image, id }) {
  const linkTarget = `/${id}`;
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        py: 1,
        paddingRight: 2,
        gap: 1,
      }}
    >
      <Avatar src={image} sx={{ width: 100, height: 100 }} />
      <Typography variant="h2" color="secondary.main">
        <Link href={linkTarget}>{name}</Link>
      </Typography>
    </Paper>
  );
}

export default SearchCard;
