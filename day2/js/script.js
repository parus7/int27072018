let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0],
	//form 
	nameInput = document.getElementsByClassName("contactform_name")[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	text = document.getElementsByName("message")[0],
	// modal windows
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close');

function hover () {	
	heading.textContent = "Действительно всё!"
};

function out () {
	heading.textContent = "Все включено!"
};

heading.addEventListener("click", hover);
heading.addEventListener("dblclick", function () {
	/* body... */
	heading.textContent = "Все включено!"
} );


//modal window
receiveBtn.addEventListener("click", function () {
	modal.style.display = "block"
});

close.addEventListener("click", function () {
	modal.style.display = 'none'
});

//form
nameInput.addEventListener("input", function() {
	text.value = "Меня зовут "+ nameInput.value +". И я хочу спросить:"

	if (nameInput.value == "") {
		text.value =""
	}
})