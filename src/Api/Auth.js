const Auth = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return { "jwt": user.token };
  } else {
    return {};
  }
};
export default Auth;