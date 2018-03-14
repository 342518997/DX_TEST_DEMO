package com.test.action;


import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.test.service.TestService;
import com.test.util.GridDataModel;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;


/**
 * Created by Administrator on 2018/3/8.
 */
@Controller("testAction")
public class TestAction extends ActionSupport {

    @Autowired
    private TestService testService;

    @Override
    public String execute() throws Exception {
        return SUCCESS;
    }

    public void getEleTaxInfo() {

        Map<String, Object> parameters = ActionContext.getContext().getParameters();

        List<Map<String, Object>> eleTaxInfo = testService.getEleTaxInfo(parameters);

        GridDataModel<Map<String, Object>> model = new GridDataModel<Map<String, Object>>();
        model.setTotal(eleTaxInfo.size());
        model.setRows(eleTaxInfo);

        try {
            ServletActionContext.getResponse().setCharacterEncoding("utf-8");
            ServletActionContext.getResponse().getWriter().write(JSONObject.fromObject(model).toString());
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public void operationInfo() {
        Map<String, Object> parameters = ActionContext.getContext().getParameters();
        String[] data = (String[]) parameters.get("data");
        StringBuffer buffer = null;
        try {
            Map<String, Object> map = (Map<String, Object>) JSONObject.toBean(JSONObject.fromObject(data[0]), Map.class);
            List deletelist = (List) map.get("delete");
            List insertlist = (List) map.get("insert");
            List updatelist = (List) map.get("update");
            if (deletelist.size() > 0) {
                if (buffer == null) {
                    buffer = new StringBuffer();
                }
                buffer.append("执行了" + deletelist.size() + "条删除操作\n");

            }
            if (insertlist.size() > 0) {
                if (buffer == null) {
                    buffer = new StringBuffer();
                }
                buffer.append("执行了" + insertlist.size() + "条增加操作\n");

            }
            if (updatelist.size() > 0) {
                if (buffer == null) {
                    buffer = new StringBuffer();
                }
                buffer.append("执行了" + updatelist.size() + "条修改操作\n");

            }

            ServletActionContext.getResponse().setCharacterEncoding("utf-8");
            ServletActionContext.getResponse().getWriter().write(buffer.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void omTreeInfo() throws IOException {

        JSONArray jsonArray = JSONArray.fromObject("[{id:'n1',text:'品牌',expanded:true},{id:'n11',pid:'n1',text:'三星'},{id:'n12',pid:'n1',text:'苹果'}]");

        ServletActionContext.getResponse().setCharacterEncoding("utf-8");

        ServletActionContext.getResponse().getWriter().write(jsonArray.toString());
    }
}