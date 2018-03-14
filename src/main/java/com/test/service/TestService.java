package com.test.service;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/3/8.
 */

public interface TestService {

    List<Map<String, Object>> getEleTaxInfo(Map<String, Object> map);

    List<Map<String, Object>> omTreeInfo();
}
