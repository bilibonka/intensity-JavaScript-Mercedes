const btns = document.querySelectorAll('.feature__link'),
	lists = document.querySelectorAll('.feature-sub');

btns.forEach((btnItem, index) => {
	btnItem.addEventListener('click', ()=> {
	if(!btnItem.classList.contains('feature__link_active')) {
		btns.forEach((btnItem, index) => {
			btnItem.classList.remove('feature__link_active')
		})
			
		btnItem.classList.add('feature__link_active')
	
	
		lists.forEach((listItem, index) => {
			listItem.classList.add('hidden')
		})
	
		lists[index].classList.remove('hidden')
	} else {
		btns.forEach((btnItem, index) => {
			btnItem.classList.remove('feature__link_active')
		})
		lists.forEach((listItem, index) => {
			listItem.classList.add('hidden')
		})
	}
	})
})