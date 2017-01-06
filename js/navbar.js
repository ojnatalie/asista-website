const NavbarToggler = selector => {
	const navbar = document.querySelector(selector)
	let latestScrollY = scrollY

	window.addEventListener('scroll', () => {
		const y = scrollY
		const down = y > latestScrollY
		latestScrollY = y

		navbar.classList[down ? 'add' : 'remove']('is-hidden')

		navbar.classList[y >= 100 ? 'add' : 'remove']('is-below')
	})
}

NavbarToggler('.js-navbar')