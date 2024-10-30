import { useState } from "react";

const SimpleForm = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState('tahmid');
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value)
    // console.log(e.target.email.value)
    // console.log(e.target.password.value)
    console.log(email, name);

    if(password.length < 6) {
        setError('password must be 6 characters')
    }
    else{
        setError('')
    }
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
        setPassword(e.target.value)
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" id="" />{" "}
        <br />
        <input onChange={handleEmailChange} type="text" name="email" />
        <br />
        <input
        onChange={handlePasswordChange} type="password" name="password" /> <br />
        <input type="submit" value="submit" />
        {
                error  && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default SimpleForm;
