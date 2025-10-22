import * as React from "react";
import { useParams } from "react-router";
import client from "../utils/client";
import { Container, CircularProgress } from "@mui/material";
import { mainContainerSx } from "../utils/styles";
import DigimonDisplay from "../components/DigimonDisplay";
import DigimonErrorFallback from "../components/DigimonErrorFallback";

function DigimonScreen() {
  const [digimonInfo, setDigimonInfo] = React.useState(null);
  const [error, setError] = React.useState(null);
  let { digimonId } = useParams();

  React.useEffect(() => {
    client({ id: digimonId }).then((data) => {
      if (data.error) {
        setError(data.message);
        return;
      }

      setDigimonInfo({
        id: data.id,
        name: data.name,
        image: data.images[0].href,
        level: data.levels[0].level,
        type: data.types[0].type,
        attribute: data.attributes[0].attribute,
        field: data.fields[0],
        releaseDate: data.releaseDate,
        description: data.descriptions.find((desc) => desc.language === "en_us")
          .description,
        prevos: data.priorEvolutions,
        evos: data.nextEvolutions,
      });
    });
  }, [digimonId]);

  return (
    <Container sx={mainContainerSx}>
      {digimonInfo ? (
        <DigimonDisplay digimonInfo={digimonInfo} />
      ) : error ? (
        <DigimonErrorFallback error={error} />
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
}

export default DigimonScreen;
