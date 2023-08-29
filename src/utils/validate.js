export const chechValidData = (email, password) => {
  console.log(email)
// const isnameValid = /^([a-zA-Z ]){2,30}$/.test(name)
const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
// if(!isnameValid) return " Name is not Valid"
if(!isEmailValid) return "Email is Not Valid"
if(!isPasswordValid) return "Password is Not Valid"

return null
}
