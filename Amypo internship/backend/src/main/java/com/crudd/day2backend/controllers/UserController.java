package com.crudd.day2backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crudd.day2backend.LoginEntity;
import com.crudd.day2backend.models.User;
import com.crudd.day2backend.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@CrossOrigin
public class UserController {
    
    // @Autowired
    // private UserService userService;
    
    // @PostMapping("/post/user")
    // public String postUser(@RequestBody User user) {
    //     return userService.postUser(user);
    // }

    // @GetMapping("/get/user")
    // public List<User> getAllUser(){
    //     return userService.getAllUser();
    // }

    // @GetMapping("/user/getById/{uid}")
    // public User getUser(@PathVariable String uid) {
    //     return userService.getUser(uid);
    // }
    
    // @DeleteMapping("/user/delete/{uid}")
    // public String deleteUser(@PathVariable String uid){
    //     return userService.deleteUser(uid);
    // }

    // @PutMapping("/user/put/{uid}")
    // public String putUser(@PathVariable String uid, @RequestBody User user) {
    
        
    //     return userService.putMapping(uid,user);
    // }
    
    @Autowired
    private UserService authService;

    @GetMapping("/loginById/{uid}")
    public User getMethodName(@PathVariable String uid) {
        return authService.loginById(uid);
    }
    
    @PostMapping("/login")
    public User Login(@RequestBody LoginEntity loginEntity) {
        
        return authService.login(loginEntity);
    }

    @PostMapping("/signup")
    public User SignUp(@RequestBody User user) {
        return authService.signUp(user);
    }
    
}
