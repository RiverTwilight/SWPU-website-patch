const patcher = setInterval(() => {
	const formEle = document.querySelector("form");

	const eleHeight = formEle.style.height;

	if (eleHeight && Number(eleHeight.slice(0, eleHeight.length - 3)) <= 500) {
		formEle.style.height = "1000px";
		clearInterval(patcher);
	}
}, 2000);
