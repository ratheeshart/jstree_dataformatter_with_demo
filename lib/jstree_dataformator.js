// var data = [
// 'aaa.bbb.ccc.xxx',
// 'aaa.fff',
// 'vvv.zzz',
// ];
function getFormattedData(data){
	var formattedData =[];
	
//util

function find(node){
	for(var v of formattedData){
		if(v["id"]==node)
			return true;
	};
	return false;
}
//////
	data.forEach((nodeData)=>{
		let nodes =nodeData.split('.');
		nodes.forEach((ndata,n)=>{
			var hasAlready = find(ndata);
			if(hasAlready===false){
				if(n===0){
					formattedData.push({ "id" : ndata, "parent" : "#", "text" : ndata });
				}else{
					formattedData.push({ "id" : ndata, "parent" : nodes[n-1], "text" : ndata });
				}
			}
		});
	});
	return formattedData;
}

// console.log(getFormattedData(data));