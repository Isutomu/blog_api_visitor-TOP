const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expires");
  return true;
};

export default logOut;
