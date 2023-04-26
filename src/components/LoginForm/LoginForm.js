export const LoginForm = () => {
  const hadleSubmit = e => {
    e.preventDefault();
    const formElements = e.target.elements;
    const { login, password } = e.target.elements;
    console.log(login.value, password.value);
    console.log(formElements);
    console.dir(e.target.elements.login.value);
    console.dir(e.target.elements.password.value);
  };
  return (
    <form autoComplete="off" onSubmit={hadleSubmit}>
      <label htmlFor="login">
        Login
        <input type="text" name="login" />
      </label>
      <label htmlFor="login">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
