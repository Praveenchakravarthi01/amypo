package com.crudd.day2backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.crudd.day2backend.models.Customer;
import com.crudd.day2backend.services.CustomerService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@CrossOrigin

public class CustomerController {
    
    @Autowired
    private CustomerService customerService;


    @PostMapping("/post")
    public String postCustomer(@RequestBody Customer customer) {
        return customerService.postCustomer(customer);
    }
    @GetMapping("/get")
    public List<Customer> getAllCustomer() {
        return customerService.getAllCustomer();
    }
    
    @GetMapping("/getById/{cid}")
    public Customer getCustomer(@PathVariable String cid) {
        return customerService.getCustomer(cid);
    }
    
    @DeleteMapping("/delete/{cid}")
    public String deleteCustomer(@PathVariable String cid) {
        return customerService.deleteCustomer(cid);
    }
    @PutMapping("/put/{cid}")
    public String putBook(@RequestBody Customer customer, @PathVariable String cid) {
        return customerService.putMapping(cid,customer);
    }
    
}
 