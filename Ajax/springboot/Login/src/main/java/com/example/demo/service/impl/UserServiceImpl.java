package com.example.demo.service.impl;

import com.example.demo.mapper.UserDao;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {
    @Resource
    UserDao userDao;
    @Override
    public User queryUser(String account,String password){
        return userDao.queryUser(account,password);
    }
    @Override
    public int insertUser(String account, String password) {
        return userDao.insertUser(account,password);
    }
}
