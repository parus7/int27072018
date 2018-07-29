function myFirsApp (name, age) {
	 alert("Привет, меня зовут "+ name + " и это моя первая программа!");

	function showSkills () {
		let skills = [ "html;", "css;", "langr: js, php, python, bash;", "http servers: apache, nginx + php-fpm;", "db: mysql, postgresql;", "virtualisation lxc, docker, kvm_qemu;", "net: iproute2"];

		for (var i =  0 ; i < skills.length ; i++) {
			j=i+1;
			document.write( 
				j+". "+skills[i] + "<br>"
			)
		}
	}

	
	if (age < 18) {
		alert("За такой короткий срок нельзя освоить столько навыков");
	} else {
		// statement
		alert("стоит подумать над позицией full stack developer, но Вам не хватает знаний английского языка.");
	}
	showSkills();

	

	function calcPow (num) {
		console.log((+num)*(+num))
	}

	calcPow(4);
}

myFirsApp("Ivarn",32)
