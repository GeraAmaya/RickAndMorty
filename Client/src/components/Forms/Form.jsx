
import { useState } from "react";
import validator from "./validation";
import style from '../Forms/Form.module.css';



const Form = (props) => {
    const {login} = props

    const [errors, setErros] = useState({})

const [userData, setUserData] = useState ({
email: "",
password: ""
})

const handleChange = (e) => {
   setErros( validator({...userData, [e.target.name]: e.target.value}))
setUserData({...userData, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    login(userData)

}


return (
   

   <div className={style.mainConteiner}>
<div className={style.container}>

    
<form onSubmit={handleSubmit} className={style.loginForm}>
<img className={style.titulo} src="../img/logo_Rick.png" alt="" />
<h1>Login</h1>

<div className={style.formInputMaterial}>
<label className={style.label}>Username: </label> <br />
    <input className={style.input} name="email" type="email" placeholder="" value={userData.email} onChange={handleChange}/>
    {errors.e1 ?(
        <p className={style.p}>{errors.e1}</p>
    ) : errors.e2 ?(
        <p className={style.p}>{errors.e2}</p>
    ) : (
        <p className={style.p}>{errors.e3}</p>
    )}
</div>



<br />

<div className={style.formInputMaterial}>
    <label className={style.label}>Password: </label> <br />
    <input className={style.input} name="password" type="password" placeholder="" value={userData.password} onChange={handleChange} />
    {errors.p1 ? (
        <p className={style.p}>{errors.p1}</p>
    ) : (
        <p className={style.p}>{errors.p2}</p>
        )}
</div>
  { /* <button className={style.btn}>Submit</button>*/}

  <button className={style.btn}>
  <strong>Submit</strong>
  <div id="container-stars" class>
    <div id="stars"></div>
  </div>

  <div className={style.glow}>
    <div className={style.circle}></div>
    <div className={style.circle}></div>
  </div>
</button>

  

</form>
<div className={style.logo} >

</div>
</div>
</div>

);

};



export default Form;

