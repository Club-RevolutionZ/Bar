// ==UserScript==
// @name          plug.dj - pluggedN backgrounds
// @namespace     http://userstyles.org
// @description	  A selection of backgrounds normally only available for pluggedN, an extension for Chrome. <i>Requires end-user modification</i>, see notes for details and full selection of available images.
// @author        there.is.only.xul
// @homepage      http://userstyles.org/styles/103371
// @run-at        document-start
// ==/UserScript==
(function() {
var css = "";
css += "@namespace url(http://www.w3.org/1999/xhtml);\n\n/* To use a selection, simply comment (like this) the background\n   presently in use and de-comment the selection you want.\n   For a list of the images complete with links, go to about:addons\n   and under User Styles, right-click this style and select \"About\",\n   then click on the link labelled \"Visit Home Page\".\n*/";
if (false || (new RegExp("^https?://plug.dj/(?!(communities|terms|privacy)/?.*).*$")).test(document.location.href))
	css += "#room .room-background{\nposition: absolute !Important;\nleft: -171px !Important;\n/* modify the above with caution */\nbackground-image: url(http://i.imgur.com/kmmPWiS.jpg) /* PLUG.DJ OLD DEFAULT */\n\n/*background-image: url(http://i.imgur.com/1aw3xcd.png)*/ /* Abandoned Ballroom */\n/*background-image: url(http://i.imgur.com/HG8mqaM.png)*/ /* Ancient Ruins */\n/*background-image: url(http://i.imgur.com/8hfUntO.png)*/ /* Architect Chamber */\n/*background-image: url(http://i.imgur.com/jNRQXKZ.png)*/ /* Castleland (by Dionyus5) */\n/*background-image: url(http://i.imgur.com/nptZvUk.png)*/ /* Chillout Mixer Theme */\n/*background-image: url(http://i.imgur.com/mL0fuwb.png)*/ /* Chillout Mixer Theme II */\n/*background-image: url(http://i.imgur.com/tOEACrk.png)*/ /* Digital Desert */\n/*background-image: url(http://i.imgur.com/zSMRtE6.png)*/ /* Digital Dungeon (Lite) */\n/*background-image: url(http://i.imgur.com/WTylHRy.png)*/ /* Digital Dungeon */\n/*background-image: url(http://i.imgur.com/6N7svVu.png)*/ /* End of Line Club */\n/*background-image: url(http://i.imgur.com/XZNVZmj.png)*/ /* Fairytale Land */\n/*background-image: url(http://i.imgur.com/9DVTnnW.png)*/ /* Mordor */\n/*background-image: url(http://i.imgur.com/md2nlVM.png)*/ /* (No Theme) Mixer */\n/*background-image: url(http://i.imgur.com/zuRZwYR.png)*/ /* (No Theme) Plug */\n/*background-image: url(http://i.imgur.com/JZjGLPH.png)*/ /* Off The Grid V1 */\n/*background-image: url(http://i.imgur.com/M4Z45oA.png)*/ /* Off The Grid V2 */\n/*background-image: url(http://i.imgur.com/EFXFnql.png)*/ /* Orbital Lounge */\n/*background-image: url(http://i.imgur.com/lK4GttQ.png)*/ /* Red Rocks Theme */\n/*background-image: url(http://i.imgur.com/N82wzhY.png)*/ /* Skygazer Theme */\n/*background-image: url(http://i.imgur.com/k9zVa92.png)*/ /* Skygazer Theme (Lite) */\n/*background-image: url(http://i.imgur.com/GZKgCpk.png)*/ /* TT.fm After Party Theme */\n/*background-image: url(http://i.imgur.com/u36VR4n.png)*/ /* TT.fm Red Theme */\n\n/*background-image: url(http://i.imgur.com/zlLjMmN.jpg)*/ /* BONUS: TASTYCAT */\n/*background-image: url(http://i.imgur.com/hjtFKu3.jpg)*/ /* BONUS: WINTER */\n\n/*background-image: url(Image location here)*/ /* CUSTOM */ !important;\n}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
