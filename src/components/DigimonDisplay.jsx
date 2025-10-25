import {
  Box,
  Grid,
  Paper,
  Tooltip,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import { Home, QuestionMark } from "@mui/icons-material";
import { flexColumnCenter } from "../utils/styles";

function DigimonDisplay({ digimonInfo }) {
  function extractDigimonInfo(digimonInfo) {
    return {
      id: digimonInfo.id ?? "Unknown ID",
      name: digimonInfo.name ?? "Unknown Name",
      image: digimonInfo.images[0].href ?? null,
      level: digimonInfo.levels[0].level ?? "Unknown Level",
      type: digimonInfo.types[0].type ?? "No Type",
      attribute: digimonInfo.attributes[0].attribute ?? "No Attribute",
      field: digimonInfo.fields[0],
      releaseDate: digimonInfo.releaseDate ?? "Unreleased",
      description:
        digimonInfo.descriptions.find((desc) => desc.language === "en_us")
          .description ?? "No description yet.",
      prevos: digimonInfo.priorEvolutions,
      evos: digimonInfo.nextEvolutions,
    };
  }

  const {
    id,
    name,
    image,
    level,
    type,
    attribute,
    field,
    releaseDate,
    description,
    prevos,
    evos,
  } = extractDigimonInfo(digimonInfo);

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        maxWidth: 1000,
      }}
      className="fadeIn"
    >
      <IconButton aria-label="Home" href="/" sx={{ p: 0, mt: 2 }}>
        <Home />
      </IconButton>
      <Grid container spacing={0} sx={{ width: "100%" }}>
        <Grid size={6} sx={{ ...flexColumnCenter, gap: 2, px: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" color="primary.main">
              #{id}
            </Typography>
            <Typography variant="h1" color="primary.main">
              {name}
            </Typography>
            <Tooltip title={field?.field ?? "Unknown Field"}>
              {field ? (
                <img src={field.image} alt={field.field} />
              ) : (
                <QuestionMark />
              )}
            </Tooltip>
          </Box>
          <img
            src={image}
            style={{ height: 320, textAlign: "center" }}
            alt=""
          />
          <Typography sx={{ textAlign: "center" }}>
            Release Year: {releaseDate}
          </Typography>
          <Grid container spacing={10} sx={{ textAlign: "center" }}>
            <Grid size={4} sx={flexColumnCenter}>
              <Typography variant="h2" color="primary.main">
                Level
              </Typography>
              <Typography>{level}</Typography>
            </Grid>
            <Grid size={4} sx={flexColumnCenter}>
              <Typography variant="h2" color="primary.main">
                Attribute
              </Typography>
              <Typography>{attribute}</Typography>
            </Grid>
            <Grid size={4} sx={flexColumnCenter}>
              <Typography variant="h2" color="primary.main">
                Type
              </Typography>
              <Typography>{type}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          size={6}
          sx={{
            ...flexColumnCenter,
            borderLeft: "2px solid",
            borderColor: "primary.main",
            pl: 4,
            scrollbarGutter: "stable both-edges",
          }}
        >
          <Grid
            container
            spacing={5}
            sx={{ maxHeight: 500, overflowY: "auto" }}
          >
            <Grid
              size={6}
              sx={{ ...flexColumnCenter, alignItems: "flex-start" }}
            >
              <Typography variant="h3">Evolves from</Typography>
              {prevos.map((prevo) => {
                const prevoLink = `/${prevo.id}`;
                return (
                  <Typography key={prevo.id}>
                    <Link href={prevoLink}>{prevo.digimon}</Link>
                  </Typography>
                );
              })}
            </Grid>
            <Grid
              size={6}
              sx={{ ...flexColumnCenter, alignItems: "flex-start" }}
            >
              <Typography variant="h3">Evolves to</Typography>
              {evos.map((evo) => {
                const evoLink = `/${evo.id}`;
                return (
                  <Typography key={evo.id}>
                    <Link href={evoLink}>{evo.digimon}</Link>
                  </Typography>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ px: 4, py: 2 }}>
        <Typography variant="h2" color="primary.main">
          Description
        </Typography>
        <Typography>{description}</Typography>
      </Box>
    </Paper>
  );
}

export default DigimonDisplay;
