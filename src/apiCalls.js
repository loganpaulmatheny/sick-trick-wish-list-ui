export const getTricksApiCall = () => {
  return fetch("http://localhost:3001/api/v1/tricks").then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response.json());
    return response.json();
  });
};
