const button = document.querySelector("button");
let isOk = true;

button.addEventListener("click", () => {
	if (isOk) {
		isOk = false;
		const ball = document.querySelector(".ball");
		const velocity = document.querySelector(".velocity");
		const displacement = document.querySelector(".displacement");
		const val = document.querySelector("input").value;
		let t = 0;
		let h = 0;
		if (parseFloat(val) <= 30) u = parseFloat(val);
		else u = 25;
		let v = 0;
		const id = setInterval(() => {
			velocity.innerHTML = v.toFixed(2);
			displacement.innerHTML = h.toFixed(2);
			h = u * t - 5 * t * t;
			if (h < 0) {
				clearInterval(id);
				h = 0;
				isOk = true;
			}
			v = u - 10 * t;

			ball.style.position = "absolute";
			ball.style.bottom = 30 + 20 * h + "px";
			t += 0.001;
		}, 1);
	}
});
