import "./App.css";
import ReusableForm from "./components/ReusableForm";
// import HookForm from "./components/HookForm";
// import Unctontrolled from "./components/Unctontrolled";

function App() {

  const handleSubmitSignUp = (data)=> {
    console.log("sign up", data)
  
  }

  const handleUpdate = (data)=> {
  console.log("update" , data)
  }
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <Unctontrolled></Unctontrolled> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm 
      handleSubmit={handleSubmitSignUp} 
      formHeading={"Sign Up"}
       submitBtnText={"Submit"}>

      </ReusableForm>

      <ReusableForm
      handleSubmit={handleUpdate}
       formHeading={"Update Profile"} 
      submitBtnText={"Update"}>

      </ReusableForm>
    </>
  );
}

export default App;
