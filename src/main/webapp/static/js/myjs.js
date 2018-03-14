var coM1 = [ [ {
		header : '企业名称',
		name : '企业名称',
		rowspan : 2,
		width : 100,
		align : 'center',
		sort : 'clientSide'
	}, {
		header : '本年当月累计',
		colspan : 2
	}, {
		header : '去年当月累计',
		colspan : 2
	}, {
		header : '同比增减额',
		colspan : 2
	}, {
		header : '同比增减比例',
		colspan : 2
	}, {
		header : '比例偏离值（%）',
		name : '比例偏离值',
		rowspan : 2,
		width : 100,
		align : 'center',
		sort : 'clientSide'
	} ], [ {
		header : '税收（元）',
		name : '本年当月税收',
		width : 100,
		align : 'center',
		sort : 'clientSide'
	}, {
		header : '用电量（度）',
		name : '本年当月用电量',
		width : 100,
		align : 'center',
		sort : 'clientSide'
	}, {
		header : '税收（元）',
		name : '去年当月税收',
		width : 100,
		align : 'center',
		sort : 'clientSide'
	}, {
		header : '用电量（度）',
		name : '去年当月用电量',
		width : 100,
		align : 'center',
		sort : 'clientSide'
	}, {
		header : '税收（元）',
		name : '同比税收增减额',
		width : 100,
		align : 'center',
		sort : 'clientSide'
	}, {
		header : '用电量（度）',
		name : '同比用电量增减额',
		width : 100,
		align : 'center',
		sort : 'clientSide'
	}, {
		header : '税收（%）',
		name : '同比税收增减比',
		width : 100,
		align : 'center',
		sort : 'clientSide'
	}, {
		header : '用电量（%）',
		name : '同比用电量增减比',
		width : 100,
		align : 'center',
		sort : 'clientSide'
	} ]

	];

	$(function() {
		$("#grid").omGrid({
			limit : 12,
			title : '电力预警',
			colModel : coM1,
			autoFit : true,
			dataSource : ""

		});
		$("#sel").click(function(){
			$("#grid").omGrid('setData',"getDlSubject?fstartYear="+2017+"&fstartMonth="+01+"&fstartPlz="+00,'setheight',1600);
		});

	});