<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/15
  Time: 11:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="/static/js/controlCommon.js"></script>
    <script type="text/javascript" src="/static/js/map.js"></script>
    <script type="text/javascript" src="/static/js/stringbuffer.js"></script>
    <script type="text/javascript" src="/static/js/time.js"></script>
    <script type="text/javascript" src="/static/js/jquery.min.js"></script>
    <script type="text/javascript" src="/static/js/operamasks-ui.min.js"></script>
    <script type="text/javascript" src="/static/js/common.js"></script>
    <script type="text/javascript" src="/static/js/om-fileupload.js"></script>
    <script type="text/javascript" src="/static/js/addentryjs.js"></script>
    <script type="text/javascript" src="/static/js/eventActionBase.js"></script>
    <script type="text/javascript" src="/static/js/eventAction.js"></script>
    <script type="text/javascript" src="/static/js/dynamicLoad.js"></script>
    <script type="text/javascript" src="/static/js/f7.js"></script>
    <script type="text/javascript" src="/static/js/jsonUtil.js"></script>
    <script type="text/javascript" src="/static/js/urlUtil.js"></script>
    <script type="text/javascript" src="/static/js/validator.js"></script>
    <script type="text/javascript" src="/static/js/uploadFile.js"></script>
    <script type="text/javascript" src="/static/js/show.js"></script>
    <script type="text/javascript" src="/static/js/keyDown.js"></script>
    <script type="text/javascript" src="/static/js/dialogbox.js"></script>
    <script language="javascript" src="/static/js/LodopFuncs.js"></script>
    <script type="text/javascript" src="/static/js/uploadfilef7.js"></script>
    <script type="text/javascript" src="/static/js/fileUpload.js"></script>
    <script type="text/javascript" src="/static/js/viewFlowImage.js"></script>
    <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/default/om-default.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/mycss.css" />
</head>
<body onload="show(0)" style="margin-left:10px;margin-right: 10px;margin-top: 10px;">
<div id="toolbarContain">
    <div  id="toolbar" class="om-buttonbar">
    </div>
</div>
<div class="fields">
    <input id="_id" type="hidden"/>
    <input id="_type" type="hidden"/>
</div>
<form action="javascript:void(0);" id = "billForm" ></form>

<input id = "userID" value =${userID }  type="hidden" /> <input id = "username" value =${username }  type="hidden"  />

<div id="attach" style="display:block"></div>

<div id="dialog-modal" >
    <iframe frameborder="0" style="width:100%;height:99%;height:100%\9;" src="about:blank"></iframe>
</div>

<div id="response" style="font-weight: bold;color: red;"></div>
<object  id="LODOP" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=0 height=0>
    <embed id="LODOP_EM" type="application/x-print-lodop" width=0 height=0></embed>
</object>
</body>
</html>
