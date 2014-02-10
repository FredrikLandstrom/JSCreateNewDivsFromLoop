$( document ).ready(function() {
	var data=[
			{
			"divid":"AD",
			"data":{"Availability": "7","Capacity": "2","Event": "7","Performance": "15"}
			},
			{
			"divid":"Biztalk",
			"data":{"Availability": "12","Event": "4","Performance": "2"}
			}
		];
	// empty the contaner
	$("#graphcontainer").empty();

	// Loop through all the intems in the array
	$.each(data,function(index, item){
		var divId=item.divid;	// id of the new div
		var grapdata=item.data; // data for the graph
		var containerToPopulate=$("#graphcontainer"); // find the parent div to exetend
		var divhtml="<div id=\""+divId+"\"></div>" // create the html for the div
		containerToPopulate.append(divhtml); // append the new div to the parent container

		// the new div now exist and can be modified with grapdata
		var graphIdcontainer=$("#"+divId);
		// proof
		graphIdcontainer.html("Im now in the "+divId+" container");
	});
});