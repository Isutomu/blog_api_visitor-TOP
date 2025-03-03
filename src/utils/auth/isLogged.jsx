const isLogged = () => {
  const token = localStorage.getItem("token");
  const expires = new Date(localStorage.getItem("expires"));
  const timeNow = new Date();

  if (token && expires > timeNow) {
    return true;
  }

  localStorage.removeItem("token");
  localStorage.removeItem("expires");
  return false;
};

export default isLogged;
