<%@ page import="java.util.Date" %>
<%@ page import="java.text.DateFormat" %><%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/13
  Time: 15:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="/static/js/jquery.min.js"></script>
    <script type="text/javascript" src="/static/js/operamasks-ui.min.js"></script>
    <script type="text/javascript" src="/static/js/common.js"></script>
    <script type="text/javascript" src="/static/js/dialogbox.js"></script>
    <link rel="stylesheet" type="text/css"
          href="/static/css/default/om-default.css"/>
    <link rel="stylesheet" type="text/css" href="/static/css/manage.css"/>
    <link rel="stylesheet" href="/static/css/main.css" type="text/css"/>
</head>
<body>
<div id="div_tab" style="align-content: center">
    <ul>
        <li><a href="#tab1">java</a></li>
        <li><a href="#tab2">C</a></li>
    </ul>
    <div id="tab1">
        java是一种计算机语言
    </div>
    <div id="tab2">
        C是一种计算机语言
    </div>

</div>

<script>
    $(function () {
        $("#div_tab").omTabs({
            width: 500, height: 350, closable: true, tabMenu: true, border: false,switchMode:'mouseover'
        })
        ;
    });
</script>
</body>
</html>
