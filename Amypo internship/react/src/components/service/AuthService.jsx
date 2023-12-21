import api from "../Api";
class AuthService{
  
        login(login){
            return api.post("/login",login);
        }
        signUp(signUp){
            return api.post("/signup",signUp);
        }
        loginById(uid){
            return api.get("/loginById/"+uid);
        }
    
}

export default new AuthService();