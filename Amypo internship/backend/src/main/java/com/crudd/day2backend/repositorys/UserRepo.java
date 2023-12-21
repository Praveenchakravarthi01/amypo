package com.crudd.day2backend.repositorys;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.crudd.day2backend.models.User;



@Repository
public interface UserRepo extends  CrudRepository<User,String>{


    User findByEmailAndPassword(String email, String password);

    User findByEmail(String email);
    
}
