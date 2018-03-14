package com.test.dao;

import com.ibatis.sqlmap.client.SqlMapClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/3/8.
 */
@Repository("testDaoImpl")
public class TestDaoImpl implements TestDao {

    @Autowired
    private SqlMapClient sqlMapClient;

    public List<Map<String, Object>> getEleTaxInfo(Map<String, Object> map) {
        List<Map<String, Object>> list = null;
        try {
            list = sqlMapClient.queryForList("getEleTaxInfo");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }
}
