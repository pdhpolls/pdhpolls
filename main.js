$(".up").on("click", function() {
	if(this.parentNode.getAttribute("data-stat") != "up") {
		this.parentNode.setAttribute("data-stat", "up");
		this.setAttribute("data-trans", "false");
		this.parentNode.childNodes[3].setAttribute("data-trans", "true");
	} else {
		this.parentNode.setAttribute("data-stat", "");
		this.setAttribute("data-trans", "true");
	}
});
$(".down").on("click", function() {
	if(this.parentNode.getAttribute("data-stat") != "down") {
		this.parentNode.setAttribute("data-stat", "down");
		this.setAttribute("data-trans", "false");
		this.parentNode.childNodes[1].setAttribute("data-trans", "true");
	} else {
		this.parentNode.setAttribute("data-stat", "");
		this.setAttribute("data-trans", "true");
	}
});