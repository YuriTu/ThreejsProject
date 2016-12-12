function createXHR(argument) {
	                                        if (typeof new XMLHttpRequest != "undefined") {
		                                        return new XMLHttpRequest();
	} else {
		                                        throw new Error("no XHR");
	}
}