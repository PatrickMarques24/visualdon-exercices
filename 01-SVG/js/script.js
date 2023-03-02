"use strict";
const rect = document.querySelector("rect");

rect.addEventListener("click", () => {
	if (rect.getAttribute("fill") == "red") {
		rect.setAttribute("fill", "blue");
	} else {
		rect.setAttribute("fill", "red");
	}
});

const cercleExt = document.querySelectorAll("circle");
cercleExt.forEach((cercle) => {
	cercle.addEventListener("mouseover", () => {
		if (cercle.getAttribute("r") == 60) {
			cercle.setAttribute("r", "80");
		}
	});
});
