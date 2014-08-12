function addSelf(id) {
	var me = document.currentScript.ownerDocument;
	var view = $(me).find('#view-' + id);
	var container = $(document).find('#' + id);
	container.append(view);
}
(function () {
	var hexagonView = document.registerElement('hexagon-view');
})()