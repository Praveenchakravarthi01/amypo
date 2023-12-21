package com.crudd.day2backend.repositorys;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.crudd.day2backend.models.Customer;

@Repository
public interface CustomerRepo extends CrudRepository<Customer,String>{
    
}
