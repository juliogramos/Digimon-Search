import { Typography, Avatar, Card, Link, Box } from "@mui/material";
import { flexColumnCenter } from "../utils/styles";

function SearchCard({ name, image, id }) {
  const linkTarget = `/${id}`;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        flex: "1 1 0px;",
        border: "1px solid",
        borderColor: "primary.main",
      }}
    >
      <Box
        sx={{
          ...flexColumnCenter,
          justifyContent: "center",
          width: "100%",
          height: "100%",
          paddingTop: 1,
        }}
      >
        <Avatar src={image} variant="square" sx={{ width: 150, height: 150 }} />
      </Box>
      <Link
        href={linkTarget}
        sx={{
          ...flexColumnCenter,
          justifyContent: "center",
          width: "100%",
          height: "100%",
          p: 1,
          transition: "all 0.2s",
          ":hover": {
            backgroundColor: "primary.main",
            color: "white",
            transition: "all 0.2s",
          },
        }}
      >
        <Typography variant="h2" textAlign="center">
          {name}
        </Typography>
      </Link>
    </Card>
  );
}

export default SearchCard;
