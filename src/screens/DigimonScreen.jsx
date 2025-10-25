import * as React from "react";
import { useParams } from "react-router";
import client from "../utils/client";
import { CircularProgress } from "@mui/material";
import DigimonDisplay from "../components/DigimonDisplay";
import DigimonErrorFallback from "../components/DigimonErrorFallback";
import { useAsync } from "../utils/useAsync";

function DigimonScreen() {
  let { digimonId } = useParams();
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  React.useEffect(() => {
    run(client({ id: digimonId }));
  }, [digimonId, run]);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : isError ? (
        <DigimonErrorFallback error={error} />
      ) : isSuccess ? (
        <DigimonDisplay digimonInfo={data} />
      ) : null}
    </>
  );
}

export default DigimonScreen;
