import { Paper, Typography, Link } from "@mui/material";

function DigimonErrorFallback({ error }) {
  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        maxWidth: 1000,
        p: 2,
      }}
    >
      <Typography variant="h1" color="error.main">
        Error!
      </Typography>
      <Typography>{error}</Typography>
      <Link href="/">
        <Typography>Back Home</Typography>
      </Link>
    </Paper>
  );
}

export default DigimonErrorFallback;
