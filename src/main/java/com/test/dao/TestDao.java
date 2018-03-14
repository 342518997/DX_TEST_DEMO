package com.test.dao;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/3/8.
 */
public interface TestDao {

    List<Map<String, Object>> getEleTaxInfo(Map<String, Object> map);
}
