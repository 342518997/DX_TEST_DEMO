package com.test.dao;

import javafx.application.Application;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

/**
 * Created by Administrator on 2018/3/8.
 */
public class TestDaoImplTest {
    private  TestDao dao;
    @Before
    public void  init(){
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
        dao = (TestDao) context.getBean("testDaoImpl");

    }
    @Test
    public void getEleTaxInfo() throws Exception {
        Map map = new HashMap();
        List<Map<String,Object>>  eleTaxInfo = dao.getEleTaxInfo(map);
        System.out.println(eleTaxInfo.size());
    }

}