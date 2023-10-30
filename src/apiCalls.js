export const getTricksApiCall = () => {
  return fetch("http://localhost:3001/api/v1/tricks").then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export const postNewTrickApiCall = (newTrick) => {
  return fetch("http://localhost:3001/api/v1/tricks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTrick),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
