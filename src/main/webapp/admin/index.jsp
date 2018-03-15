<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="GBK" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page import="java.util.*" %>
<%@ page import="java.text.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>�й�����ʡίֱ�����ص�У</title>
    <meta name="renderer" content="webkit">
    <script type="text/javascript" src="/static/js/jquery.min.js"></script>
    <script type="text/javascript" src="/static/js/operamasks-ui.min.js"></script>
    <script type="text/javascript" src="/static/js/common.js"></script>
    <script type="text/javascript" src="/static/js/dialogbox.js"></script>
    <script type="text/javascript" src="/static/myjs/admin/index.js"></script>
    <link rel="stylesheet" type="text/css"
          href="/static/css/default/om-default.css?199508193715"/>
    <link rel="stylesheet" type="text/css" href="/static/css/manage.css"/>
    <link rel="stylesheet" href="/static/css/main.css" type="text/css"></link>

    <style type="text/css">
        html, body {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
        }

        #center-tab .om-panel-body {
            padding: 0;
        }

        body {
            margin: 0px;
            padding: 0px
        }

        .header {
            background: url(/static/images/header_bg.jpg) repeat-x;
            height: 112px;
            min-width: 930px
        }

        .header .logo {
            float: left;
            padding: 7px 10px
        }

        .header .logo img {
            border: 0
        }

        .header .account {
            float: right;
            padding: 6px;
            margin-right: 20px
        }
    </style>
</head>
<%session.setAttribute("userID","b00ad7e49dea406c9c6336654d5e94fb10000008");%>
<%session.setAttribute("username","sa");%>
<BODY>
<div id="top-panel" class="header">
    <div class="logo">
        <a><img src="/static/login/Home page images/bplogin.png"/> </a>
    </div>
    <div style="margin-top: -30px;" class="header_item" align="right">
        <div class="header_item_body">
            <div align="right" style="float: right;">
                <ul>
                    <li style="text-align: center;">
                        <div>
                            <img src="/static/login/Home page images/The home page.png"
                                 onclick=
                                         openMain();
                            />
                        </div>
                        <div style="margin: -5px 0px; cursor: pointer;">
                            <a href="javascript:void(0)" onclick=
                                    openMain();
                            ><span>��ҳ</span>
                            </a>
                        </div>
                    </li>
                    <li style="text-align: center;">
                        <div>
                            <img src="/static/login/Home page images/help.png"/>
                        </div>
                        <div style="margin: -5px 0px; cursor: pointer;">
                            <a href="javascript:void(0)" onclick=
                                    openHelp();
                            ><span>����</span>
                            </a>
                        </div>
                    </li>
                    <li style="text-align: center;">
                        <div>
                            <img src="/static/login/Home page images/The news.png"/>
                        </div>
                        <div style="margin: -5px; cursor: pointer;">
                            <a href="javascript:void(0)" onclick=
                                    openSys();
                            ><span
                                    id="fmessage" value="">��Ϣ</span> </a>
                        </div>
                    </li>
                    <li style="text-align: center;">
                        <div>
                            <img src="/static/login/Home page images/Personal information.png"/>
                        </div>
                        <div style="margin: -5px; cursor: pointer;">
                            <a href="javascript:void(0)" onclick=
                                    openUserinfo();
                            ><span>������Ϣ</span>
                            </a>
                        </div>
                    </li>
                    <li style="text-align: center;">
                        <div>
                            <img src="/static/login/Home page images/Password change.png"/>
                        </div>
                        <div style="margin: -5px; cursor: pointer;">
                            <a href="javascript:void(0)" onclick=
                                    openUpdatePassword();
                            ><span>�����޸�</span>
                            </a>
                        </div>
                    </li>
                    <li style="text-align: center;">
                        <div>
                            <img src="/static/login/Home page images/System exit.png"/>
                        </div>
                        <div style="margin: -5px; cursor: pointer;">
                            <a href="/static/userlogin.jsp"> <span style="color: white">ϵͳ�˳�
									</span> </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    <div class="bottom">
        <div style="float: left;">
            <a onclick=
                       openMenuPanel();
            >չ��/���ز˵�</a>&nbsp;&nbsp;
            <!--
				����ǰ����:${datacenterAliasName}
				 -->
        </div>
        <div style="float: left;"></div>
        <div style="float: right;">
            ������
            <%
                DateFormat fullFormat = DateFormat.getDateInstance(DateFormat.FULL);
                Date date = new Date();
            %>
            <%=fullFormat.format(date)%>
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        </div>
    </div>
</div>


<div id="center-panel">
    <div id="center-tab">
        <ul>
            <li>
                <a href="#tab1">��ҳ</a>
            </li>
        </ul>
        <div id="tab1" style="overflow: hidden">
            <iframe id='main' border=0 frameBorder='no' src='' width='100%'></iframe>
        </div>
    </div>
</div>
<div id="west-panel">
    <ul id="myTree"></ul>
    <!--
    <br><a href="#" style="color: red;" onclick="showLink(null,null)" >�˵�����</a>&nbsp;
    <a href="#" style="color: red;" onclick="loadTree()" >ˢ�²˵�</a>
 -->
</div>
<div>
    <input type="hidden" id="asdffdsa" value=${user.fusername}/>
    <input type="hidden" id="ftask"/>
    <input type="hidden" id="fmsg"/>
</div>
<div>
    <form action="exportDataModel" method="post" id="hiddenForm"
          name="hiddenForm">
        <input id="fileName" name="fileName" type="hidden"/>
        <input id="fpath" name="fpath" type="hidden"/>
        <input id="frealName" name="frealName" type="hidden"/>
    </form>
</div>
</BODY>
</html>