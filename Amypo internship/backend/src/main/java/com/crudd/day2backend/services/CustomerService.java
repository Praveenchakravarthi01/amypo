package com.crudd.day2backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crudd.day2backend.models.Customer;
import com.crudd.day2backend.repositorys.CustomerRepo;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepo customerRepo;
    public String postCustomer(Customer customer) {
        customerRepo.save(customer);
        return "Customer Added Successfully";
    }

    public List<Customer> getAllCustomer() {
        return (List<Customer>) customerRepo.findAll();
    }

    public String deleteCustomer(String cid) {
        Customer customer = customerRepo.findById(cid).get();
        if(customer != null) {
            customerRepo.deleteById(cid);
            return customer.getCustomerName()+" Customer removed Successfully";
        }
        return "Customer Not Found";
    }

    public String putMapping(String cid, Customer customer) {
        customer.setCid(cid);
        customerRepo.save(customer);
        return "Details Updated Successfully";
    }

    public Customer getCustomer(String cid) {
        return customerRepo.findById(cid).get();
    }

}
