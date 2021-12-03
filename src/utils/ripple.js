export default function createRipple(event, color) {
	const button = event.currentTarget;

	const circle = document.createElement('span');
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	// circle.style.width = circle.style.height = `${diameter}px`;
	// circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
	// circle.style.top = `${event.clientY - button.offsetTop - radius}px`;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${
		event.clientX - button.getBoundingClientRect().left - radius
	}px`;
	circle.style.top = `${
		event.clientY - button.getBoundingClientRect().top - radius
	}px`;
	circle.style.backgroundColor = color;

	circle.classList.add('ripple');

	setTimeout(() => {
		const ripple = button.getElementsByClassName('ripple')[0];

		if (ripple) {
			ripple.remove();
		}
	}, 500);

	button.append(circle);
}
