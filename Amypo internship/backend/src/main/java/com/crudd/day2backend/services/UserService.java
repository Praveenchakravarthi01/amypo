package com.crudd.day2backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crudd.day2backend.LoginEntity;
import com.crudd.day2backend.models.User;
import com.crudd.day2backend.repositorys.UserRepo;

@Service
public class UserService {
    
    // @Autowired
    // private UserRepo userRepo;
    // public String postUser(User user){
    //     userRepo.save(user);
    //     return"User signed in";
    // }

    // public List<User> getAllUser(){
    //     return (List<User>) userRepo.findAll();
    // }

    // public String deleteUser(String uid) {
    //     User user=userRepo.findById(uid).get();
    //     if(user !=null){
    //         userRepo.deleteById(uid);
    //         return user.getUserName()+"User is removed";
    //     } 
    //     return "Customer Not found";
    // }

    // public String putMapping(String uid,User user){
    //     user.setUid(uid);
    //     userRepo.save(user);
    //     return "Details updated successfully";
    // }
    //  public User getUser(String uid){
    //     return userRepo.findById(uid).get();
    //  }

    @Autowired
    private UserRepo userRepo;


    public User login(LoginEntity loginEntity) {
        User user = userRepo.findByEmailAndPassword(loginEntity.getEmail(),loginEntity.getPassword());
        if (user != null) {
            
                return user;
        }
        return null;
    }

    public User signUp(User user) {
        User existUser = userRepo.findByEmail(user.getEmail());
        if (existUser == null) {
            return userRepo.save(user);
        }
        return null;
    }

    public User loginById(String uid) {
        return userRepo.findById(uid).get();
    }
}
