export default async function fetchSignUp(userInfo) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
    mode: "cors",
    method: "POST",
    body: userInfo,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.status !== 200) throw new Error("User creation failed");
      return response.json();
    })
    .then((json) => json)
    .catch((error) => ({ error }));

  return response;
}
