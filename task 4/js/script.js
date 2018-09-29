let name = document.getElementById("name"),
	surname = document.getElementById('surname'),
	age = document.getElementById('age'),
	nameInput = document.getElementsByTagName("input") [0],
	surnameInput = document.getElementsByTagName('input') [1],
	ageInput = document.getElementsByTagName('input') [2];

nameInput.addEventListener('input', function(){
	name.innerHTML = nameInput.value
});

surnameInput.addEventListener('input', function(){
	surname.innerHTML = surnameInput.value
});

ageInput.addEventListener('input', function(){
	age.innerHTML = ageInput.value
});
