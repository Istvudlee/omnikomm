'use strict'
let headMenu = document.getElementById('head_menu')
let click_menu = document.querySelectorAll('.click_menu');
let child_menu = document.querySelectorAll('.child_menu')


click_menu.forEach(item => item.addEventListener('click', clickMenuChild))

function clickMenuChild(e) {
	e.preventDefault()
	let target = e.target;

	linkActive(target, click_menu, 'link_headMenu_active')

	child_menu.forEach(item => {
		item.classList.remove('child_menu_show')
		if (target.dataset.number === item.dataset.number) {
			item.classList.toggle('child_menu_show')
		}
	});

}

function linkActive(target, arrElem, nameClassCss) {
	arrElem.forEach(item => {
		if (item.classList.contains(nameClassCss)) {
			item.classList.remove(nameClassCss)
		}
		target.classList.add(nameClassCss)
	});

}