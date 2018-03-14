<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/14
  Time: 16:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="/static/js/controlCommon.js"></script>
    <script type="text/javascript" src="/static/js/jquery.min.js"></script>
    <script type="text/javascript" src="/static/js/operamasks-ui.min.js"></script>
    <script type="text/javascript" src="/static/js/eventActionBase.js"></script>
    <script type="text/javascript" src="/static/js/eventAction.js"></script>
    <script type="text/javascript" src="/static/js/map.js"></script>
    <script type="text/javascript" src="/static/js/stringbuffer.js"></script>
    <script type="text/javascript" src="/static/js/common.js"></script>
    <script type="text/javascript" src="/static/js/json2.js"></script>
    <script type="text/javascript" src="/static/js/loadsearch.js"></script>
    <script type="text/javascript" src="/static/js/jsonmethod.js"></script>
    <script type="text/javascript" src="/static/js/dynamicLoad.js"></script>
    <script type="text/javascript" src="/static/js/keyDown.js"></script>
    <script type="text/javascript" src="/static/js/urlUtil.js"></script>
    <script type="text/javascript" src="/static/js/dialogbox.js"></script>
    <script type="text/javascript" src="/static/js/viewFlowImage.js"></script>
    <script type="text/javascript" src="/static/myjs/schedule/materialList.js"></script>
    <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/custombase.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/default/om-default.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/mycss.css" />
</head>
<body onload="showAll()"  style="margin-left:10px;margin-right: 10px;margin-top: 10px;" >
<form action="dataExport" method="post" id = "hiddenForm">
    <input id="exportColModelJson" name="exportColModelJson"  type="hidden" />
    <input id="exportDataJson" name="exportDataJson"  type="hidden" />
    <input id="fileName" name="fileName"  type="hidden" />
    <input id="fileType" name="fileType"  type="hidden" />
</form>
<div id="toolbarContain">
    <div id="toolbar"  >
        <!-- 默认按钮层 -->
        <div id ="defaultButtonBar"  style="position:relative;float:left;">
            <!--
          <button  id="add" class="butDef"  value="新增" style="visibility: hidden;width: 85px;height: 25px">新增</button>
            <button  id="edit" class="butDef"  value="修改" style="visibility: hidden;width: 85px;height: 25px" >修改</button>
            <button  id="view" class="butDef" value="查看" style="visibility: hidden;width: 85px;height: 25px" >查看</button>
            <button  id="delete" class="butDef" value="删除" style="visibility: hidden;width: 85px;height: 25px">删除</button>
            <button  id="refresh" class="butDef" value="刷新" style="visibility: hidden;width: 85px;height: 25px">刷新</button>
            <button  id="search" class="butDef" value="查询" style="visibility: hidden;width: 85px;height: 25px">查询</button>
            <button  id="export" class="butDef" value="导出" style="visibility: hidden;width: 85px;height: 25px">导出</button>
            <button  id="viewFlow" class="butDef" value="查看流程图" style="width: 100px;height: 25px">查看流程图</button>
            <button  id="detailmap" value="查看地图信息" style="visibility: hidden;width: 80px;height: 25px">查看地图</button>
            <button  id="allmap" value="查看所有客户地图" style="visibility: hidden;width: 80px;height: 25px">客户地图</button>
             -->
        </div>
        <!-- 动态按钮层 -->
        <div id ="dynamicButtonBar"  style="position:relative;float:left;">
        </div>
        <!-- 右按钮层 -->
        <div id="rightButtonBar" style="float:right;">
            当页最多显示：<input id="_count"  style="width: 30px"  />条&nbsp;<button>刷新</button>&nbsp;
        </div>
    </div>
</div>
<table id="materialListGrid" ></table>
<div style="display:none;">&nbsp;
    <input id = "userData" value =${userData} />
    <input  type="text"  id='selectrecord'  name='selectrecord'  value='AAAAA'/>
</div>
<div id="dialog-modal" title="通用查询框" style="display:none;">
    <iframe frameborder="0" style="width:100%;height:99%;height:100%\9;" src="about:blank"></iframe>
</div>
<div id="batchReport-modal" title="批量报到框"  style="display:none">
    <table>
        <tr>
            <td>班级名称: </td>
            <td>
                <select id="className" style="width:180px;"/>
                </select>
            </td>
        </tr>
    </table>
    <div style="margin:20px 0 0 243px; font-size: 15px;">
        <button onClick="batchReport()" >确认</button>
        <button onClick="closeDialog()">取消</button>
    </div>
</div>
</body>
</html>
