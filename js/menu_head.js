'use strict'
let headMenu = document.getElementById('head_menu');
let click_menu = document.querySelectorAll('.click_menu');
let child_menu = document.querySelectorAll('.child_menu');
let imgMenuBurger = document.querySelector('.img_menu_burger');
let closeBurger = document.querySelector('.close_burger')
let mobileBurger = document.getElementById('mobile_burger')
let breadcrumbs = document.getElementById('breadcrumbs')
click_menu.forEach(item => item.addEventListener('click', clickMenuChild))

function clickMenuChild(e) {
	e.preventDefault()
	let target = e.target;

	linkActive(target, click_menu, 'link_headMenu_active');
	breadcrumbs.style.display = 'none';
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

// Бургер меню
imgMenuBurger.addEventListener('click', () => {
	mobileBurger.style.display = 'grid'
})
closeBurger.addEventListener('click', () => {
	mobileBurger.style.display = 'none'
})