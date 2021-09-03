package com.example.demo.service;

import com.example.demo.entity.User;

public interface UserService {
    public User queryUser (String account ,String password);
    public int insertUser(String account , String password);


}
