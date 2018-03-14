package com.test.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/3/8.
 */
@Service
public class TestServiceImpl implements TestService {
    public List<Map<String, Object>> getEleTaxInfo(Map<String, Object> map) {
        List<Map<String, Object>> maps = new ArrayList<Map<String, Object>>();
        for (int i = 1; i < 12; i++) {
            Map<String, Object> map1 = new HashMap<String, Object>();
            map1.put("纳税人名称", i + "-->纳税人名称");
            map1.put("本年增值税", i + "-->本年增值税");
            map1.put("去年增值税", i + "-->去年增值税");
            map1.put("本年生产用电", i + "-->本年生产用电");
            map1.put("去年生产用电", i + "-->去年生产用电");
            map1.put("用电增加比例", i + "-->用电增加比例");
            map1.put("增值税减少比例", i + "-->增值税减少比例");
            maps.add(map1);
        }
        return maps;
    }

    public List<Map<String, Object>> omTreeInfo() {


        return null;
    }
}
