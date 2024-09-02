// code for circle text in header

const text = document.querySelector('.circle-text p')
text.innerHTML = text.innerText
	.split('')
	.map(
		(char, i) => `<span style='transform:rotate(${i * 12}deg)'>${char}</span>`
	)
	.join('')
