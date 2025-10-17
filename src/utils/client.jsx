const baseUrl = `https://digi-api.com/api/v1/digimon`;

async function client({ query, page, id }) {
  let target = baseUrl;
  if (query) {
    target += `?name=${query}`;
    if (page) {
      target += `&page=${page}`;
    }
  } else if (id) {
    target += `/${id}`;
  }
  const response = await fetch(target, {
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  return json;
}

export default client;
