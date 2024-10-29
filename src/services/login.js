import api from "./api.js";

const login = async (userData) => {
    try{
        const response = await api.post("/usuario/login", {
            email: userData.email,
            password: userData.password
        })
        const data = response.data;
        console.log(data);
        return data;
    }catch(error){
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            const errorMessage = error.response.data;
            return errorMessage;
        }
    }
}

export default login;
