var coM1 = [[{header: '第一行',colspan:7}],
    [{header: '纳税户名称', name: '纳税人名称', width: 100, align: 'center', editor: {editable: true}},
        {header: '本年增值税', name: '本年增值税', width: 100, align: 'center', sort: 'clientSide', editor: {editable: true}},
        {header: '去年增值税', name: '去年增值税', width: 100, align: 'center', sort: 'clientSide', editor: {editable: true}},
        {header: '本年生产用电', name: '本年生产用电', width: 100, align: 'center', sort: 'clientSide', editor: {editable: true}},
        {header: '去年生产用电', name: '去年生产用电', width: 100, align: 'center', sort: 'clientSide', editor: {editable: true}},
        {header: '用电增加比例', name: '用电增加比例', width: 100, align: 'center', sort: 'clientSide', editor: {editable: true}},
        {header: '增值税减少比例', name: '增值税减少比例', width: 100, align: 'center', sort: 'clientSide', editor: {editable: true}}
    ]];
var coM2 = [
    {header: '纳税户名称', name: '纳税人名称', width: 100, align: 'center'},
    {header: '本年营业税', name: '本年营业税', width: 100, align: 'center', sort: 'clientSide'},
    {header: '去年营业税', name: '去年营业税', width: 100, align: 'center', sort: 'clientSide'},
    {header: '本年生产用电', name: '本年生产用电', width: 100, align: 'center', sort: 'clientSide'},
    {header: '去年生产用电', name: '去年生产用电', width: 100, align: 'center', sort: 'clientSide'},
    {header: '用电增加比例', name: '用电增加比例', width: 100, align: 'center', sort: 'clientSide'},
    {header: '营业税减少比例', name: '营业税减少比例', width: 100, align: 'center', sort: 'clientSide'}
];
var coM3 = [
    {header: '纳税户名称', name: '纳税人名称', width: 100, align: 'center'},
    {header: '本年城市维护建设税', name: '本年城市维护建设税', width: 100, align: 'center', sort: 'clientSide'},
    {header: '去年城市维护建设税', name: '去年城市维护建设税', width: 100, align: 'center', sort: 'clientSide'},
    {header: '本年生产用电', name: '本年生产用电', width: 100, align: 'center', sort: 'clientSide'},
    {header: '去年生产用电', name: '去年生产用电', width: 100, align: 'center', sort: 'clientSide'},
    {header: '用电增加比例', name: '用电增加比例', width: 100, align: 'center', sort: 'clientSide'},
    {header: '城市维护建设税减少比例', name: '维护建设税减少比例', width: 100, align: 'center', sort: 'clientSide'}
];
var coM4 = [
    {header: '纳税户名称', name: '纳税人名称', width: 100, align: 'center'},
    {header: '本年税收合计', name: '本年税收合计', width: 100, align: 'center', sort: 'clientSide'},
    {header: '去年税收合计', name: '去年税收合计', width: 100, align: 'center', sort: 'clientSide'},
    {header: '本年生产用电', name: '本年生产用电', width: 100, align: 'center', sort: 'clientSide'},
    {header: '去年生产用电', name: '去年生产用电', width: 100, align: 'center', sort: 'clientSide'},
    {header: '用电增加比例', name: '用电增加比例', width: 100, align: 'center', sort: 'clientSide'},
    {header: '税收合计减少比例', name: '税收合计减少比例', width: 100, align: 'center', sort: 'clientSide'}
];

$(function () {
    $("#taxTab").omGrid({
        limit: 12,
        title: '电力预警',
        colModel: coM1,
        autoFit: true,
        dataSource: "getEleTaxInfo"
    });

    $('#fwarn').click(function () {
        var fval = $('#fwarnType').val();
        var start_fyear = $('#start_year').val();
        var start_fmonth = $('#start_fmonthId').val();
        var end_fyear = $('#end_year').val();
        var end_fmonth = $('#end_fmonthId').val();
        var fadd = $('#feleAdd').val();
        var freduce = $('#ftaxReduce').val();
        var industrytype = $('#industrytype').val();
        var taxLmit = $('#taxLmit').val();
        var ftax = encodeURI(encodeURI(fval));
        var fhy = encodeURI(encodeURI(industrytype));
        var params = "ftax=" + ftax + "&start_fyear=" + start_fyear + "&start_fmonth=" + start_fmonth + "&end_fyear=" + end_fyear + "&end_fmonth=" + end_fmonth + "&fadd=" + fadd + "&freduce=" + freduce + "&fhy=" + fhy + "&taxLmit=" + taxLmit;

        if (fval == '增值税') {

            $('#taxTab').omGrid({
                limit: 12,
                title: '电力预警',
                colModel: coM1,
                autoFit: true,
                dataSource: "getEleTaxInfo?" + params,
                onRowDblClick: function (rowIndex, rowData, event) {
                    alert("双击事件");
                },
                onRefresh: function (nowPage, pageRecords, event) {
                    alert("数据加载完成");
                },
                rowDetailsProvider: function (rowData, rowIndex) {
                    var index = rowIndex + 1;
                    return "第" + index + "行";
                }/*,
                 onRowClick: function (index, rowData, event) {
                 $('#taxTab').omGrid('editRow', index);
                 }*/
            });

        }
    });

    $('#add').click(function () {
        $('#taxTab').omGrid('insertRow', 0);
    });
    $('#del').click(function () {
        var dels = $('#taxTab').omGrid('getSelections');
        if (dels.length <= 0) {
            alert("请选择要删除的记录");
            return;
        }
        $('#taxTab').omGrid('deleteRow', dels[0]);
    });
    $('#save').click(function () {
        var data = $('#taxTab').omGrid('getChanges');
        var str = JSON.stringify(data);
        $.ajax({
            url: "operationInfo",
            data: {"data": str},
            dataType: "text",
            type: "POST",
            success: function (data) {
                alert(data);
                $('#taxTab').omGrid('saveChanges');
            }
        });
    });
});


