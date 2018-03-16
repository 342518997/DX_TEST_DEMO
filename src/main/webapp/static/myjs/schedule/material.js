var json = {"dataid":"ca010eb2a7384a48bd273d7253d1de9310000020","actionJS":"","buttonInfo":"<button id='add' class='butDef' style='width: 85px;height: 25px' onclick='action_add()' >新增<\/button><button id='save' class='butDef' style='width: 85px;height: 25px' onclick='action_save()' >保存<\/button><button id='edit' class='butDef' style='width: 85px;height: 25px' onclick='action_edit()' >修改<\/button><button id='delete' class='butDef' style='width: 85px;height: 25px' onclick='action_delete()' >删除<\/button><button id='adduser' class='butDef' style='width: 85px;height: 25px' onclick='adduser()' >生成用户<\/button>","tableHTML":"<div id='fgoup1div' title='基础信息' visible='1' ><table  class='tablecss' id='fgoup1'  width= '100%'  ><td align='right'  >用户名:<\/td><td colspan='1'><input   class='sText' type='text'  id='8e124690d1fd46188a6db019f84790c010000019' name='C_fyhm' value='040529' readonly='readonly'  disabled='disabled'  style='width:160px;height:30px;' aliasname='用户名' need='true' > <\/input> <font  color='red'>&nbsp;&nbsp;&nbsp;&nbsp;*<\/font> <\/td><td align='right'  >姓名:<\/td><td colspan='1'><input   class='sText' type='text'  id='0e2e5ed071024c99a14e30cd9a6bc60210000019' name='C_fxm' value='刘丽' readonly='readonly'  disabled='disabled'  style='width:160px;height:30px;background:url(/static/images/F7.png) no-repeat 130px  0px;' query='teacherQuery' aliasname='姓名' need='true' carryField='姓名' basicField='姓名' onDblClick='openF7Dialog(this)'  > <\/input> <font  color='red'>&nbsp;&nbsp;&nbsp;&nbsp;*<\/font> <\/td><td align='right'  >性别:<\/td><td colspan='1'><select  class='sSelect'  id='b69016cd64054401828dfb3f1e309b5a10000019' name='C_fxb' value='1' readonly='readonly'  disabled='disabled'  style='width:160px;height:30px;' aliasname='性别' enumer='sex' ><option lable=0 value=0 >男<\/option><option lable=1 value=1 selected='selected'  >女<\/option> <\/select>  <\/td><\/tr><tr><td align='right'  >备注:<\/td><td colspan='1'><textarea  class='sTextarea'  id='badf4b84f840435da2c735422835372910000019' name='C_fbz' readonly='readonly'  disabled='disabled'  style='width:160px;height:30px;' aliasname='备注' ><\/textarea>  <\/td><td align='right'  style='display:none'  >密码:<\/td><td colspan='1'><input   class='sText' type='text'  id='bbc9593eee76441a81d31f9f8f391f1510000019' name='C_fmm' readonly='readonly'  disabled='disabled'  style='width:150px;height:18px;height:20px;display: none;' aliasname='密码' > <\/input>  <\/td><td align='right'  style='display:none'  >培训管理部门:<\/td><td colspan='1'><select  class='sSelect'  id='61d7b89437bf4e28b4fdfe48f4757fed10000019' name='C_fpxglbm' readonly='readonly'  disabled='disabled'  style='width:150px;height:18px;height:24px;display: none;' aliasname='培训管理部门' enumer='departType' > <\/select>  <\/td><\/tr><tr><td align='right'  style='display:none'  >所属用户:<\/td><td colspan='1'><input   class='sText' type='text'  id='userid' name='userid' value='b00ad7e49dea406c9c6336654d5e94fb10000008' readonly='readonly'  disabled='disabled'  style='display: none;' aliasname='所属用户' > <\/input>  <\/td><td align='right'  style='display:none'  >所属类别:<\/td><td colspan='1'><input   class='sText' type='text'  id='classifiid' name='classifiid' readonly='readonly'  disabled='disabled'  style='display: none;' aliasname='所属类别' > <\/input>  <\/td><td align='right'  style='display:none'  >状态:<\/td><td colspan='1'><select  class='sSelect'  id='fstatus' name='C_fstatus' readonly='readonly'  disabled='disabled'  style='display: none;' aliasname='状态' enumer='status' ><option lable=-1 value=-1 >作废<\/option><option lable=0 value=0 >新增<\/option><option lable=1 value=1 >保存<\/option><option lable=2 value=2 >提交<\/option><option lable=3 value=3 >审核<\/option> <\/select>  <\/td><\/tr><tr><td align='right'  style='display:none'  >创单人:<\/td><td colspan='1'><input   class='sText' type='text'  id='fcreator' name='C_fcreator' readonly='readonly'  disabled='disabled'  style='display: none;' aliasname='创单人' > <\/input>  <\/td><td align='right'  style='display:none'  >创单时间:<\/td><td colspan='1'><input   class='sText' type='text'  id='fcreatetime' name='C_fcreatetime' readonly='readonly'  disabled='disabled'  style='display: none;' aliasname='创单时间' > <\/input>  <\/td><td align='right'  style='display:none'  >最后修改人:<\/td><td colspan='1'><input   class='sText' type='text'  id='flastupdator' name='C_flastupdator' readonly='readonly'  disabled='disabled'  style='display: none;' aliasname='最后修改人' > <\/input>  <\/td><\/tr><tr><td align='right'  style='display:none'  >最后修改时间:<\/td><td colspan='1'><input   class='sText' type='text'  id='flastupdatetime' name='C_flastupdatetime' readonly='readonly'  disabled='disabled'  style='display: none;' aliasname='最后修改时间' > <\/input>  <\/td><\/tr><\/table><\/div><br>"};
var url = location.href;
var materialName = request('materialName');
var billType = request('billType');
var oprater = request('oprater');
var materialid = request('id');
var dataid = request('dataid');
var taskid = request('taskid');
var billType = request('billType');
var row = request('row');
var column = request('column');
var billID = request('billID');
var preview = request('preview');// 单据预览
var currentTaskId=request('currentTaskId')
var fexecutionId = request('fexecutionId');
function show(flag) {// 0：基础资料 1：单据
    if (dataid == '' && billID != '') {
        dataid = billID;
    }
    if (oprater == null || oprater == "") {
        oprater = 0;
    }
    if (oprater == 2 && document.getElementById("edit") != null) {
        document.getElementById("edit").disabled = false;
    }
    if (oprater == 0 || oprater == 1) {
        if (document.getElementById("save") != null) {
            document.getElementById("save").disabled = false;
        }
        if (document.getElementById("save_close") != null) {
            document.getElementById("save_close").disabled = false;
        }
        if (document.getElementById("save_add") != null) {
            document.getElementById("save_add").disabled = false;
        }
    }
    if ((oprater == 1 || oprater == 2) && document.getElementById("delete")) {
        document.getElementById("delete").disabled = false;
    }
    //工作流则审批按钮显示。
//	if(typeof(taskid)!='undefined'&&taskid!=''&&taskid!=null){
//		$('#toolbar').append("<button  id='process_audit' class='butDef'  style='width: 85px;height: 25px' onclick='action_process_audit()'>审批</button>");
//		$('#toolbar').append("<button  id='process_view' class='butDef' style='width: 100px;height: 25px' onclick='viewProcess()'>查看流程图</button>")
//		}
    // 单据预览 add by qingfeng_li 2013-7-30
    if (preview != '' && preview == 1) {
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            button.disabled = true;
        }
    }
    if (flag == 0) {
        showmaterialForm(oprater);
    } else {
        showBillForm(oprater);
    }
    // 添加按钮导航样式
    $('#toolbar').omButtonbar({});
}

function showmaterialForm(oprater) {
    var type = 'jbpmAuditRecord';
    dataid = json.dataid;
    $("#_id").val(dataid);
    $("#_type").val(type);
    // 添加js脚本
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.text = json.actionJS;
    oHead.appendChild(oScript);
    document.getElementById('toolbar').innerHTML =json.buttonInfo;
    document.getElementById('billForm').innerHTML = json.tableHTML;
    loadF7();
    loadUIDraw();// 加载界面渲染样式 add by qingfeng_li
    loadEntry(0);

}

function loadEntry(flag) {
    if (flag == 0) {
        dynamicLoadJs(materialName);
    } else
        dynamicLoadJs(billType);
}