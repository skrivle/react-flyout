
/**
 * Retrieves the parents of a given DOM element
 *
 * @param  {HTMLElement}
 * @return {Array}
 */
function getParents (element) {

	var parents, parent;

	parents = [];
	parent = element.parentNode;

	while(parent) {
		parents.unshift(parent);
		parent = parent.parentNode;
	}

	return parents;
}


module.exports = {
	getParents: getParents
};