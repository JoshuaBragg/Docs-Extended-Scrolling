let pageContainer = document.querySelectorAll('.kix-paginateddocumentplugin-background')

if (pageContainer.length > 1) {
	console.warn('Multiple page containers found. Ignoring all but the first')
} else if (!pageContainer.length) {
	console.error('No page container found!')
} else {
	pageContainer[0].style.paddingBottom = '90vh'
}