const pageContainer = document.querySelector('.kix-paginateddocumentplugin')

if (pageContainer) {
	pageContainer.style.paddingBottom = '90vh'
} else {
	console.error('Docs Extended Scrolling: Page container not found!')
}