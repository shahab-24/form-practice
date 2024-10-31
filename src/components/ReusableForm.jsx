const ReusableForm = ({formHeading, handleSubmit, submitBtnText}) => {

        const handleLocalSubmit = e => {
                e.preventDefault()
                const data = {
                        name: e.target.name.value,
                        email: e.target.email.value,
                        password: e.target.password.value
                }
                handleSubmit(data)
                
        }
  return (
    <div>
      <h3>{formHeading}</h3>
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" id="" /> <br />
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" /> <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
