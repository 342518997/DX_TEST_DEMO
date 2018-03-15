var materialName = request('materialName');
var colmodelJson = {
    "col": [{
        "name": "FYHM",
        "width": "150",
        "header": "用户名",
        "sort": "clientSide",
        "align": "center"
    }, {"name": "FXM", "width": "150", "header": "姓名", "sort": "clientSide", "align": "center"}, {
        "name": "FXB",
        "width": "150",
        "header": "性别",
        "sort": "clientSide",
        "align": "center"
    }, {"name": "FBZ", "width": "150", "header": "备注", "sort": "clientSide", "align": "center"}],
    "searchField": [{"searchname": "FYHM", "searchaliname": "用户名"}, {"searchname": "FXM", "searchaliname": "姓名"}],
    "width": 800,
    "buttonInfo": "<button id='add' class='butDef' style='width: 85px;height: 25px' onclick='' >新增<\/button><button id='edit' class='butDef' style='width: 85px;height: 25px' onclick='' >修改<\/button><button id='delete' class='butDef' style='width: 85px;height: 25px' onclick='' >删除<\/button><button id='view' class='butDef' style='width: 85px;height: 25px' onclick='' >查看<\/button><button id='search' class='butDef' style='width: 85px;height: 25px' onclick='' >查询<\/button><button id='refresh' class='butDef' style='width: 85px;height: 25px' onclick='' >刷新<\/button><button id='export' class='butDef' style='width: 85px;height: 25px' onclick='' >导出<\/button>",
    "height": 500
};
var url = location.href;//本地地址
function showAll() {
    var url = "action_list?type=" + materialName + "&flag=0&listFilter=";
    showBillFormList(url);
    //添加按钮导航样式
    $('#toolbar').omButtonbar({});

}

function showBillFormList(url) {
    var array = ['add', 'delete', 'edit', 'view', 'refresh', 'search', 'export'];//按钮id
    dealButtonVisible(array);//将按钮置为可见
    document.getElementById('defaultButtonBar').innerHTML = colmodelJson.buttonInfo;
    loadEvent();//加载按钮点击事件和窗口
    var hgtlist = parent.$('.om-tabs-panels').height() - 59;
    alert(url);
    $('#materialListGrid').omGrid({
        limit:15,
        title : "列表",
        height : hgtlist,
        colModel :colmodelJson.col,
        dataSource : url,
        onRowClick : function(index,rowData,event){
        },
        onRowDblClick:function(rowIndex,rowData,event){
            var selectedRecords = $('#materialListGrid').omGrid('getSelections',true);
            skip(selectedRecords[0].FID,materialName,2);
        }

    });


}

//将按钮置为可见
function dealButtonVisible(array) {
    for (var i = 0; i < array.length; i++) {
        var id = array[i];
        var obj = document.getElementById(id);
        if (obj != null) {
            obj.style.visibility = 'visible';
        }
    }
}


function loadEvent() {
    $("#batchReport-modal").omDialog({
        autoOpen: false,
        width: 400,
        height: 130,
        modal: true
    });
    $('#add').click(function () {
        alert("add");
    });

}

function skip(id,materialName,oprater){//oprater 当前操作 0：新增，1：修改，2：查看,3：删除
    var request='schedule/materialList.jsp?materialName=classTeacherInfo&model=1&faliasname=班主任管理';
    var tId;
    if(!id){
        tId=materialName;
    }else{
        tId=id
    }
    //如果页签已打开则激活页签，否则新增页签
    var tabId = parent.$('#center-tab').omTabs('getAlter', 'tab_'+tId);
    if(tabId){
        parent.$('#center-tab').omTabs('activate', tabId);
    }else{
        var newUrl = url.substring(0,url.lastIndexOf("/"));//截取/之前的地址
        var parematers = request.substring(request.indexOf("?"),url.length);
        newUrl = newUrl +"/material.jsp"+ parematers +"&oprater="+oprater+"&dataid="+id;
        //新增界面时在父窗口打开
        var aliasname = getParameter(newUrl,'faliasname');//拿到url里的faliasname参数
        var total = parent.$('#center-tab').omTabs('getLength');
        var idx = Math.round(Math.random()*10000);//避免重复引起页签打不开
        alert(newUrl);
        parent.$('#center-tab').omTabs('add', {
            index : total,
            title : aliasname,
            content : "<iframe id='"+id+"' border=0 frameBorder='no' name='inner-frame' src='"+newUrl+"' height='650' width='100%'></iframe>",
            tabId : 'tab_'+tId,
            closable : true
        });
    }
 }