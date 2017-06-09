var perSelect="";
var prcSelect="";
var conSelect="";

window.onload = function(){

	var old = $(".old").html();
		// var now = $(".cocon").html();

		$(".an").hover(
			function(){$(".old").html($(".ancon").html());}, 
			function(){$(".old").html(old);}
			);
		$(".co").hover(
			function(){$(".old").html($(".cocon").html());}, 
			function(){$(".old").html(old);}
			);
		$(".pr").hover(
			function(){$(".old").html($(".prcon").html());}, 
			function(){$(".old").html(old);}
			);
		$(".ab").hover(
			function(){$(".old").html($(".abcon").html());}, 
			function(){$(".old").html(old);}
			);
		$(".al").hover(
			function(){$(".old").html($(".alcon").html());}, 
			function(){$(".old").html(old);}
			);
		$(".p").hover(
			function(){$(".old").html($(".pcon").html());}, 
			function(){$(".old").html(old);}
			);
		$(".d").hover(
			function(){$(".old").html($(".dcon").html());}, 
			function(){$(".old").html(old);}
			);
		$(".n").hover(
			function(){$(".old").html($(".ncon").html());}, 
			function(){$(".old").html(old);}
			);
		$(".e").hover(
			function(){$(".old").html($(".econ").html());}, 
			function(){$(".old").html(old);}
			);
		$(".c").hover(
			function(){$(".old").html($(".ccon").html());}, 
			function(){$(".old").html(old);}
			);
		$(".i").hover(
			function(){$(".old").html($(".icon").html());}, 
			function(){$(".old").html(old);}
			);
		$(".z").hover(
			function(){$(".old").html($(".zcon").html());}, 
			function(){$(".old").html(old);}
			);

		$(".perbtn").hover(
			function(){
				console.log("h");
				$(".original").css("background-color","purple");
				$(".original").css("color","white");
				$(".prcinfo").css("display","none");
				$(".coninfo").css("display","none");
				$(".readMore").css("display","none");

			},
			function(){
				$(".original").css("background-color","lightgrey");
				$(".original").css("color","black");
				$(".prcinfo").css("display","inline");
				$(".coninfo").css("display","inline");
				$(".readMore").css("display","inline");

			}
			);

		$(".prbtn").hover(
			function(){
				console.log("h");
				$(".original").css("background-color","#4CAF50");
				$(".original").css("color","white");
				$(".perinfo").css("display","none");
				$(".coninfo").css("display","none");
				$(".readMore").css("display","none");

			},

			function(){
				$(".original").css("background-color","lightgrey");
				$(".original").css("color","black");
				$(".perinfo").css("display","inline");
				$(".coninfo").css("display","inline");
				$(".readMore").css("display","inline");

			}
			);
		$(".conbtn").hover(
			function(){
				console.log("h");
				$(".original").css("background-color","hotpink");
				$(".original").css("color","white");
				$(".perinfo").css("display","none");
				$(".prcinfo").css("display","none");
				$(".readMore").css("display","none");

			},
			function(){
				$(".original").css("background-color","lightgrey");
				$(".original").css("color","black");
				$(".perinfo").css("display","inline");
				$(".prcinfo").css("display","inline");
				$(".readMore").css("display","inline");

			}
			);
		//#4CAF50

		$(".prbtn").click(function(){
			document.getElementById("practice").innerHTML=($(this).html());
			prcSelect=$(this).attr('class').split(' ')[0];
			var prccon=prcSelect+"con2";
			console.log(prccon);
			$(".prcinfo").html($("."+prccon).html());
			$(".practice").addClass("practiceinvert");
			$(".practice").removeClass("practice");
			fecthStatement();
		});

		$(".conbtn").click(function(){
			document.getElementById("concept").innerHTML=($(this).html());
			conSelect=$(this).attr('class').split(' ')[0];
			var concon=conSelect+"con2";
			$(".coninfo").html($("."+concon).html());
			$(".concept").addClass("conceptinvert");
			$(".concept").removeClass("concept");

			fecthStatement();
		});
		$(".perbtn").click(function(){
			document.getElementById("perspective").innerHTML=($(this).html());
			perSelect=$(this).attr('class').split(' ')[0];
			$(".perspective").addClass("perspectiveinvert");
			$(".perspective").removeClass("perspective");
			var percon=perSelect+"con2";
			$(".perinfo").html($("."+percon).html());
			fecthStatement();

		});
	};
	function pracClick(){

	//document.getElementById("practice").innerHTML=$(this).data('value');
}
	/*
}
<a href="#" class="ab">abstractions</a>
			<a href="#" class="al">algorithms</a>
			<a href="#" class="p">programming</a>
			<a href="#" class="d">data</a>
			<a href="#" class="n">networks</a>
	*/