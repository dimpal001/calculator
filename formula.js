(function() {
	let screen = document.querySelector('.input');
	let buttons = document.querySelectorAll('.a');
	let clear = document.querySelector('.clear');
	let equals = document.querySelector('.equal');
	let oc = document.querySelector('.oc');
	let per = document.querySelector('.per');
	let dev =  document.querySelector('.dev');
	let mul =  document.querySelector('.mul');
	let add =  document.querySelector('.add');
	let sub =  document.querySelector('.sub');
	let value;

	if(screen.value === ''){
			if(yes.clicked == true){
				screen.value = "";
			}
	};

	buttons.forEach(function(button){
		button.addEventListener('click', function(e){
			value = e.target.dataset.num;
			screen.value += value;
		})
	});

	equals.addEventListener('click', function(e){
		if(screen.value === ''){
			screen.value = "";
		}else{
			let ans = eval(screen.value);
			screen.value = ans;
		}
	});

	clear.addEventListener('click', function(e){
		screen.value = "";
	});

	oc.addEventListener('click', function(e){
		alert("No function is added on this button");
	});

	per.addEventListener('click', function(e){
		let pers = (parseInt(screen.value))/100 + "*";
		screen.value = pers;

		if(screen.value === "NaN*"){
			screen.value = "";
		}
	});

	dev.addEventListener('click', function(e){
		if(screen.value === "/"){
			screen.value = "";
		}
	});
	mul.addEventListener('click', function(e){
		if(screen.value === "*"){
			screen.value = "";
		}
	});
	add.addEventListener('click', function(e){
		if(screen.value === "+"){
			screen.value = "";
		}
	});
	sub.addEventListener('click', function(e){
		
			if(e.target.dataset.num === "-"){
				e.target.dataset.num = "";
			}
			e.remove();
	});

})();