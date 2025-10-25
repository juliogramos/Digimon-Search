import { Typography, Avatar, Card, Link, Box } from "@mui/material";
import {
  fadeInAnimation,
  flexColumnCenter,
  justifyCenterFull,
} from "../utils/styles";

function SearchCard({ name, image, id }) {
  const linkTarget = `/${id}`;
  return (
    <Card
      sx={{
        ...flexColumnCenter,
        ...fadeInAnimation,
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
          ...justifyCenterFull,
          paddingTop: 1,
        }}
      >
        <Avatar src={image} variant="square" sx={{ width: 150, height: 150 }} />
      </Box>
      <Link
        href={linkTarget}
        sx={{
          ...flexColumnCenter,
          ...justifyCenterFull,
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
