 function fecthStatement() {


 	var people = [];
 	$("#userdata tbody").empty();
 	$.getJSON('https://raw.githubusercontent.com/iltimasd/I-Can-Statement-Prototype/master/ican.json', function(data) {
 		$.each(data.ican, function(i, f) {

 			var per=f.Perspective;
 			var con=f.Concept.slice(0,f.Concept.indexOf("."));
 			var prc=f.Practice.slice(0,f.Practice.indexOf("."));
 			per=per.toLowerCase();
 			con=con.toLowerCase();
 			prc=prc.toLowerCase();
 			if(perSelect.localeCompare(per)==0){
 				if(prcSelect.localeCompare(prc)==0){
 					if(conSelect.localeCompare(con)==0){
 						var tblRow = "<tr>" +"<td>" + f.Statement + "</td>" + "</tr>"
 						$(tblRow).appendTo("#userdata tbody");
 					}
 				}
 			}

 		});

 	});

 }
