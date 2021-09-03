package com.example.demo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.sql.SQLOutput;

@RestController
public class LoginController {
    @Autowired
    UserService userService;

    @RequestMapping("/login")
    public ModelAndView login(){
        return new ModelAndView("login");
    }
    @RequestMapping("/main")
    public ModelAndView main(){
        return new ModelAndView("main");
    }


    //登录
    @PostMapping("/queryUser")
    public ModelAndView queryUser(String account,String password) {
        System.out.println("输入账号：" + account + "||输入密码：" + password);
        User user = userService.queryUser(account, password);
        System.out.println(user);

//        if (queryAccount(user.getAccount()) == account && queryPassword(user.getPassword())== password) {
//            System.out.println(user.toString());
//            return new ModelAndView("main");
//        } else if (queryAccount(user.getAccount()) == account && queryPassword(user.getPassword())!= password) {
//            System.out.println("密码错误");
//            return new ModelAndView("insert");
//        } else if (queryAccount(user.getAccount()) != account) {
//            System.out.println("查无此账号");
//            return new ModelAndView("insertOK");
//        }
//        else{
//            return new ModelAndView("login");
//        }
//    }


//        QueryWrapper wrapper = new QueryWrapper();
//        wrapper.eq("account",account);
//        wrapper.eq("password",password);

        //判断账号密码是否正确
        if(user!=null){
            System.out.println("数据库的账号："+user.getAccount());
            System.out.println("数据库的密码："+user.getPassword());
            System.out.println("用户输入的账号："+account);
            System.out.println("用户输入的密码"+password);
            if(password.equals(user.getPassword())){
                System.out.println(user.toString());
                return new ModelAndView("main");
            }
            else {
                System.out.println("密码错误");
                return new ModelAndView("login");
            }

        }else {
            System.out.println("查无此账号");
            return new ModelAndView("login");
        }

//        else if(queryAccount(account)==account)
//        {
//            System.out.println("密码错误");
//            return new ModelAndView("login");
//        }else {
//            System.out.println("查无此账号");
//            return new ModelAndView("login");
//        }
    }
//
//
    //查询
//    public String queryAccount(String account) {
//
//        User user = userService.queryAccount(account);
//        return user.getAccount();
//    }
//    public String queryPassword(String password) {
//
//        User user = userService.queryPassword(password);
//        return user.getPassword();
//    }

    @RequestMapping("turn")
    public ModelAndView web (){
        return new ModelAndView("insert");
    }
    //注册
    @PostMapping("/insertUser")
    public ModelAndView insertUser(String account,String password){
        System.out.println("添加的账号为："+account+"||密码为："+password);
        User user = userService.queryUser(account,password);
//        System.out.println(user);
        if(user!=null){
//            System.out.println(user.getPassword());
//            System.out.println(user.getAccount());
            System.out.println("账号已存在，注册失败");
            return new ModelAndView("insert");


        }else
        {
            int user1 = userService.insertUser(account,password);
            System.out.println("注册成功");
            return new ModelAndView("insertOK");
        }
    }
}


