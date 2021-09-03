package com.example.demo.mapper;

import com.example.demo.entity.User;
import io.lettuce.core.dynamic.annotation.Param;
import org.apache.ibatis.annotations.Select;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;


@Mapper
@Component
public interface UserDao {

//    @Select(" select * from user where account=#{account} and password=#{password}")
     User queryUser(@Param("account") String account, @Param("password") String password);

     int insertUser(@Param("account") String account,@Param("password") String password);
}
