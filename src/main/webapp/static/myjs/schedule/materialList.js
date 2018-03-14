var materialName = request('materialName');
var colmodelJson = {"col":[{"name":"FYHM","width":"150","header":"用户名","sort":"clientSide","align":"center"},{"name":"FXM","width":"150","header":"姓名","sort":"clientSide","align":"center"},{"name":"FXB","width":"150","header":"性别","sort":"clientSide","align":"center"},{"name":"FBZ","width":"150","header":"备注","sort":"clientSide","align":"center"}],"searchField":[{"searchname":"FYHM","searchaliname":"用户名"},{"searchname":"FXM","searchaliname":"姓名"}],"width":800,"buttonInfo":"<button id='add' class='butDef' style='width: 85px;height: 25px' onclick='' >新增<\/button><button id='edit' class='butDef' style='width: 85px;height: 25px' onclick='' >修改<\/button><button id='delete' class='butDef' style='width: 85px;height: 25px' onclick='' >删除<\/button><button id='view' class='butDef' style='width: 85px;height: 25px' onclick='' >查看<\/button><button id='search' class='butDef' style='width: 85px;height: 25px' onclick='' >查询<\/button><button id='refresh' class='butDef' style='width: 85px;height: 25px' onclick='' >刷新<\/button><button id='export' class='butDef' style='width: 85px;height: 25px' onclick='' >导出<\/button>","height":500};

function  showAll() {
    var url = "action_list?type="+materialName+"&flag=0&listFilter=";
    showBillFormList(url);
    //添加按钮导航样式
    $('#toolbar').omButtonbar({});
    
}

function showBillFormList(url) {
    var array = ['add','delete','edit','view','refresh','search','export'];//按钮id
    dealButtonVisible(array);//将按钮置为可见
    document.getElementById('defaultButtonBar').innerHTML =colmodelJson.buttonInfo;
    loadEvent();//加载按钮点击事件和窗口
    var hgtlist =parent.$('.om-tabs-panels').height()-59;
    alert(url);


    
}

//将按钮置为可见
function dealButtonVisible(array){
    for(var i=0;i<array.length;i++){
        var id = array[i];
        var obj = document.getElementById(id);
        if(obj!=null){
            obj.style.visibility='visible';
        }
    }
}


function loadEvent() {
    $("#batchReport-modal").omDialog({
        autoOpen: false,
        width:400,
        height:130,
        modal: true
    });
    $('#add').click(function(){
        alert("add");
    });
    
}