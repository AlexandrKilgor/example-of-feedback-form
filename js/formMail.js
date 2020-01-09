$("#sendMail").on("click", function(){
	var email = $("#email").val().trim();
	var name = $("#name").val().trim();
	var phone = $("#phone").val().trim();
	var message = $("#message").val().trim();
	
	if(email == "") {
		$("#errorMes").text("Введите email");
		return false;
	} else if(name == "") {
		$("#errorMes").text("Введите имя");
		return false;
	} else if(phone == "") {
		$("#errorMes").text("Введите телефон");
		return false;
	} else if(message.length < 5) {
		$("#errorMes").text("Введите сообщение не менее 5 символов");
		return false;
	}
	
	$("#errorMes").text("");
});