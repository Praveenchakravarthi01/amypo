import api from "../Api";

class CustomerService{
    getAllCustomer() {
        return api.get("/get");
    }
    postCustomer(customer) {
        return api.post("/post",customer);
    }
    getById(cid){
        return api.get("/getById/"+cid);
    }
    putCustomer(cid,customer){
        return api.put("/put/"+cid,customer);
    }
    deleteCustomer(cid){
        return api.delete("/delete/"+cid);
    }
}

export default new CustomerService();