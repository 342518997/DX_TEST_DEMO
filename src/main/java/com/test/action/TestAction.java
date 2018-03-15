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

    public void action_list(){

        Map<String, Object> parameters = ActionContext.getContext().getParameters();

        ServletActionContext.getResponse().setCharacterEncoding("utf-8");
        try {
            ServletActionContext.getResponse().getWriter().write(JSONObject.fromObject("{\"total\":10,\"rows\":[{\"FID\":\"ca010eb2a7384a48bd273d7253d1de9310000020\",\"FXB\":\"女\",\"USERID\":\"b00ad7e49dea406c9c6336654d5e94fb10000008\",\"FYHM\":\"040529\",\"FXM\":\"刘丽\",\"CLASSIFIID\":null,\"RN\":\"1\",\"FBZ\":null},{\"FID\":\"ebb0853093ca41559c6653feb40e4cdc10000020\",\"FXB\":\"女\",\"USERID\":\"b00ad7e49dea406c9c6336654d5e94fb10000008\",\"FYHM\":\"210510\",\"FXM\":\"佘卫红\",\"CLASSIFIID\":null,\"RN\":\"2\",\"FBZ\":null},{\"FID\":\"d5376fe3b9464e8f82ce1a40fff4353710000020\",\"FXB\":\"男\",\"USERID\":\"b00ad7e49dea406c9c6336654d5e94fb10000008\",\"FYHM\":\"133717\",\"FXM\":\"张为\",\"CLASSIFIID\":null,\"RN\":\"3\",\"FBZ\":null},{\"FID\":\"4a3282e8d11647dd8a84a4ebeacc6b6d10000020\",\"FXB\":\"男\",\"USERID\":\"b00ad7e49dea406c9c6336654d5e94fb10000008\",\"FYHM\":\"300520\",\"FXM\":\"孙芳\",\"CLASSIFIID\":null,\"RN\":\"4\",\"FBZ\":null},{\"FID\":\"c84ac28e67ab40dc82692aca60156fd710000020\",\"FXB\":\"女\",\"USERID\":\"b00ad7e49dea406c9c6336654d5e94fb10000008\",\"FYHM\":\"230063\",\"FXM\":\"刘艺\",\"CLASSIFIID\":null,\"RN\":\"5\",\"FBZ\":null},{\"FID\":\"1bfa0723725842a58ac86236fd67abd510000020\",\"FXB\":\"男\",\"USERID\":\"b00ad7e49dea406c9c6336654d5e94fb10000008\",\"FYHM\":\"266531\",\"FXM\":\"殷伟华\",\"CLASSIFIID\":null,\"RN\":\"6\",\"FBZ\":null},{\"FID\":\"9130cecb91e84b0383445dc5b1a2bb4810000020\",\"FXB\":\"男\",\"USERID\":\"b00ad7e49dea406c9c6336654d5e94fb10000008\",\"FYHM\":\"116033\",\"FXM\":\"龚敏\",\"CLASSIFIID\":null,\"RN\":\"7\",\"FBZ\":null},{\"FID\":\"2728b894915e4fe7a96e7c7476ac107d10000020\",\"FXB\":\"女\",\"USERID\":\"b31ffc1a3f4d4be7963c620a9f1cc9e510000008\",\"FYHM\":\"190525\",\"FXM\":\"彭红艳\",\"CLASSIFIID\":null,\"RN\":\"8\",\"FBZ\":null},{\"FID\":\"31dfa223afa942c19be90655c9d50c3e10000020\",\"FXB\":\"男\",\"USERID\":\"b00ad7e49dea406c9c6336654d5e94fb10000008\",\"FYHM\":\"312\",\"FXM\":\"3_12_班主任\",\"CLASSIFIID\":null,\"RN\":\"9\",\"FBZ\":\"3_12_班主任\"},{\"FID\":\"65291562c66240478b59a09a28277c9310000020\",\"FXB\":\"男\",\"USERID\":\"b00ad7e49dea406c9c6336654d5e94fb10000008\",\"FYHM\":\"313\",\"FXM\":\"3_13_班主任\",\"CLASSIFIID\":null,\"RN\":\"10\",\"FBZ\":\"3_13_班主任\"}],\"colmodel\":[]}").toString());
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}