import { useEffect, useRef } from "react";

const Unctontrolled = () => {

        const nameRef = useRef(null)
        const emailRef = useRef(null)
        const passwordRef = useRef(null)

        const handleSubmit = (e) => {
                e.preventDefault();
                console.log(nameRef.current.value)
                console.log(emailRef.current.value)
                console.log(passwordRef.current.value)
        }

        useEffect( () => {
                nameRef.current.focus();
        },[])
        return (
                <div>
                          <form onSubmit={handleSubmit}>
        <input ref={nameRef}  type="text" name="name" id="" />{" "}
        <br />
        <input ref={emailRef}  type="text" name="email" />
        <br />
        <input ref={passwordRef}
         type="password" name="password" /> <br />
        <input type="submit" value="submit" />
        
      </form>
                        
                </div>
        );
};

export default Unctontrolled;