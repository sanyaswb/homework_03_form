const form = document.getElementById('form');
const list = document.getElementById('data');

function onSubmit(e) {
	e.preventDefault();

	const data = Object.fromEntries(new FormData(e.target).entries());

	let html = '';

	for (const key of Object.keys(data)) {
		const value = data[key];

		if (value.length) {
			html += `<li class="data__el">${key}: <span>${value}</span></li>`;
		}
	}

	list.innerHTML = html;

	list.style.display = 'flex';

	setTimeout(() => {
		list.classList.add('visible');
	});
}

window.addEventListener('load', () => {
	form.addEventListener('submit', onSubmit);
});