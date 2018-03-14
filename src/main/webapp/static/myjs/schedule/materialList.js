var materialName = request('materialName');
var colmodelJson = {"col":[{"name":"FYHM","width":"150","header":"用户名","sort":"clientSide","align":"center"},{"name":"FXM","width":"150","header":"姓名","sort":"clientSide","align":"center"},{"name":"FXB","width":"150","header":"性别","sort":"clientSide","align":"center"},{"name":"FBZ","width":"150","header":"备注","sort":"clientSide","align":"center"}],"searchField":[{"searchname":"FYHM","searchaliname":"用户名"},{"searchname":"FXM","searchaliname":"姓名"}],"width":800,"buttonInfo":"<button id='add' class='butDef' style='width: 85px;height: 25px' onclick='null()' >新增<\/button><button id='edit' class='butDef' style='width: 85px;height: 25px' onclick='null()' >修改<\/button><button id='delete' class='butDef' style='width: 85px;height: 25px' onclick='null()' >删除<\/button><button id='view' class='butDef' style='width: 85px;height: 25px' onclick='null()' >查看<\/button><button id='search' class='butDef' style='width: 85px;height: 25px' onclick='null()' >查询<\/button><button id='refresh' class='butDef' style='width: 85px;height: 25px' onclick='' >刷新<\/button><button id='export' class='butDef' style='width: 85px;height: 25px' onclick='null()' >导出<\/button>","height":500};
$(function () {

});

function  showAll() {
    var url = "action_list?type="+materialName+"&flag=0&listFilter=";
    showBillFormList(url);
    //添加按钮导航样式
    $('#toolbar').omButtonbar({});
    
}

function showBillFormList(url) {
    document.getElementById('defaultButtonBar').innerHTML =colmodelJson.buttonInfo;

    
}