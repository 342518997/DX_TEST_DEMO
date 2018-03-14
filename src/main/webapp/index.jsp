<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/8
  Time: 9:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="static/css/main.css"/>
    <link rel="stylesheet" type="text/css" href="static/css/custombase.css"/>
    <link rel="stylesheet" type="text/css" href="static/css/default/om-default.css"/>
    <link rel="stylesheet" type="text/css" href="static/css/mycss.css"/>
</head>
<body>

<div>
    <table>
        <tr>
            <td style="width :60px;">预警类型</td>
            <td style="width :80px;">
                <select id="fwarnType">
                    <option value="增值税" selected="selected">增值税</option>
                    <option value="营业税">营业税</option>
                    <option value="城市维护建设税">城市维护建设税</option>
                    <option value="税收合计">税收合计</option>
                </select>
            </td>
            <td style="width :50px;">今年年份</td>
            <td style="width :80px;">
                <SELECT id="start_year">
                    <%
                        java.util.Calendar cal1 = java.util.Calendar.getInstance();
                        int y = cal1.get(java.util.Calendar.YEAR);
                    %>
                    <option value=""></option>
                    <%for (int i = y - 25; i <= y + 25; i++) {%>
                    <%if (y == i) {%>
                    <option value=<%=i %> selected="selected"><%=i %>年</option>
                    <% } else {%>
                    <option value=<%=i %>><%=i %>年</option>
                    <%
                            }
                        }
                    %>
                </SELECT>
            </td>
            <td>累计用电增加比例</td>
            <td><input id="feleAdd" style="width :60px;" value=""></td>
            <td>累计税收减小比例</td>
            <td><input id="ftaxReduce" style="width :60px;" value=""></td>
            <td>本年税收额度</td>
            <td><input id="taxLmit" style="width :60px;" value=""></td>
            <td>行业</td>
            <td><input type="text" id="industrytype"
                       style="width:100px;height:18px;height:20px;background:url(../images/F7.png) no-repeat 80px 0px"
                       value=""/></td>
            <td colspan="2">
                <button id="fwarn">预警</button>
            </td>
            <!--  <td colspan="2"><button id="fsumbitWarn" class="butDef">提交预警</button></td> -->
            <td colspan="2">
                <button id="exportData">导出</button>
            </td>
        </tr>
    </table>
</div>

<div>
    <input id="add" type="button" value="新增">
    <input id="del" type="button" value="删除">
    <input id="save" type="button" value="保存修改">
    <table id="taxTab"></table>
</div>

<script type="text/javascript" src="static/js/jquery.min.js"></script>
<script type="text/javascript" src="static/js/operamasks-ui.min.js"></script>
<script type="text/javascript" src="static/js/common.js"></script>
<script type="text/javascript" src="static/js/json2.js"></script>
<script type="text/javascript" src="static/js/dialogbox.js"></script>
<script type="text/javascript" src="static/js/keyDown.js"></script>
<script type="text/javascript" src="static/js/urlUtil.js"></script>
<script src="static/myjs/my_test_js.js?199508193720"></script>
</body>
</html>
