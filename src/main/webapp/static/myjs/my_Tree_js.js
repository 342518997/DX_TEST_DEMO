var data = {
    "text": "新增加的节点", classes: "parenticon", "children": [{
        "text": "新增加节点的子节点"
    }]
};
$(function () {
    $("#myTree").omTree({
        dataSource: "omTreeInfo",
        simpleDataModel: true,
        showCheckbox: true,
        draggable: true,
        onClick: function (node, event) {
            $("#p1").text(node.text + " 点击事件");
        },
        onCheck: function (node, event) {

            $("#p1").text(node.text + " 选中事件");
        },
        onBeforeExpand: function (node) {
            $("#p1").text(node.text + " 展开事件");
        },
        onBeforeCollapse: function (node) {
            $("#p1").text(node.text + " 收缩事件");
        }
    });

    $("#add").click(function () {
        var node = data;
        var pnode = $("#myTree").omTree("getSelected");
        $("#myTree").omTree("insert", node, pnode);

    });
    $("#del").click(function () {
        var pnode = $("#myTree").omTree("getSelected");
        $("#myTree").omTree("remove", pnode);
    });
    $("#update").click(function () {
        var pnode = $("#myTree").omTree("getSelected");
        var newnode = {"text": "修改了节点"};
        $("#myTree").omTree("modify", pnode, newnode);
    });

});