System.register(["./p-8ed28fab.system.js"], (function(e, i) {
	"use strict";
	var r, n;
	return {
		setters: [function(e) {
			r = e.p;
			n = e.b
		}],
		execute: function() {
			var e = function() {
				var e = i.meta.url;
				var n = {};
				if (e !== "") {
					n.resourcesUrl = new URL(".", e).href
				}
				return r(n)
			};
			e().then((function(e) {
				return n([
					["p-3460268c.system", [
						[1, "ion-icon", {
							mode: [1025],
							color: [1],
							ariaLabel: [1537, "aria-label"],
							ariaHidden: [513, "aria-hidden"],
							ios: [1],
							md: [1],
							flipRtl: [4, "flip-rtl"],
							name: [1],
							src: [1],
							icon: [8],
							size: [1],
							lazy: [4],
							sanitize: [4],
							svgContent: [32],
							isVisible: [32]
						}]
					]]
				], e)
			}))
		}
	}
}));