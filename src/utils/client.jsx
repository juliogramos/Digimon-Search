const baseUrl = `https://digi-api.com/api/v1/digimon`;

function client({ query, page, id }) {
  const config = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  let target = baseUrl;
  if (query) {
    target += `?name=${query}`;
    if (page) {
      target += `&page=${page}`;
    }
  } else if (id) {
    target += `/${id}`;
  }
  return fetch(target, config).then(async (response) => {
    const data = await response.json();
    if (!response.error) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export default client;
