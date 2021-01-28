document.addEventListener("DOMContentLoaded", function() {

	const phoneMask = IMask(
		document.querySelector('.phone'), {
			mask: '+{7}(000)000-00-00'
		});

	function dropdownHover() {
		$hasChildLink = document.querySelectorAll('.navbar__item-child')
		$hasChildLink.forEach(el => {
			el.addEventListener('mouseover', function() {
				this.childNodes[0].nextElementSibling.style.color = '#ffa25c'
				this.childNodes[0].nextElementSibling.children[0].style.transform = 'rotate(180deg)'
				this.childNodes[0].nextElementSibling.children[0].style.fill = '#ffa25c'
			})
		});
		$hasChildLink.forEach(el => {
			el.addEventListener('mouseout', function() {
				this.childNodes[0].nextElementSibling.style.color = '#ffffff'
				this.childNodes[0].nextElementSibling.children[0].style.transform = 'rotate(0)'
				this.childNodes[0].nextElementSibling.children[0].style.fill = '#ffffff'
			})
		});
	}

	dropdownHover()

});
