import useInputState from "../customHook/inputState";

const HookForm = () => {
  const nameInputState = useInputState("tahmid");
  const emailInputState = useInputState("");
  const passwordInputState = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInputState.value);
    console.log(emailInputState.value);
    console.log(passwordInputState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...nameInputState} type="text" name="name" id="" /> <br />
        <input {...emailInputState} type="text" name="email" />
        <br />
        <input {...passwordInputState} type="password" name="password" /> <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
