const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger--spin')
const footerYear = document.querySelector('.footer__year')
const allNavItems = document.querySelectorAll('.nav__link')

// adding and removeing nav-desktop & mobile

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navBtn.classList.remove('is-active')
			navMobile.classList.remove('nav-mobile--active')
		})
	})
}
navBtn.addEventListener('click', handleNav)

// scroll remove

const nav = document.querySelector('nav')

let previousScrollTop
let isScrolling

const hasScrolled = () => {
	const scrollTop = window.scrollY

	if (scrollTop > previousScrollTop) {
		nav.classList.remove('nav-mobile--active')
		navBtn.classList.remove('is-active')
	}

	previousScrollTop = scrollTop
}

document.addEventListener('scroll', () => (isScrolling = true))

setInterval(() => {
	if (isScrolling) {
		hasScrolled()
		isScrolling = false
	}
}, 100)

// changing year function
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
