<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/8
  Time: 16:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="static/js/jquery.min.js"></script>
    <script type="text/javascript" src="static/js/operamasks-ui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="static/css/themes/default/om-all.css"/>
    <style>
        .slider-demo {
            width: 500px;
            height: 375px;
            border: 1px solid #0092D2;
            margin-left: auto;
            margin-right: auto;
        }
    </style>
</head>
<script>
    $(function () {
        $("#slider").omSlider();
    });
</script>
<body>
<div id="slider" class="slider-demo">
    <img src="static/images/turtle.jpg"/>
    <img src="static/images/rabbit.jpg"/>
    <img src="static/images/penguin.jpg"/>
    <img src="static/images/lizard.jpg"/>
    <img src="static/images/crocodile.jpg"/>
</div>
</body>
</html>
