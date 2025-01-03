oS.Init({
	PicArr: function() {
		var a = $User.Browser.IE6 ? 8 : 32;
		return [ShadowPNG, "/game/zombie/images/Sun.gif", "/game/zombie/images/OptionsMenuback" + a + ".png", "/game/zombie/images/OptionsBackButton" + a +
			".png", "/game/zombie/images/surface.png", "/game/zombie/images/Help.png", "/game/zombie/images/SelectorScreenStartAdventur.png",
			"/game/zombie/images/SelectorScreenSurvival.png", "/game/zombie/images/Logo.jpg", "/game/zombie/images/LawnMower.gif", "/game/zombie/images/ZombiesWon.png",
			"/game/zombie/images/LargeWave.gif", "/game/zombie/images/FinalWave.gif", "/game/zombie/images/PrepareGrowPlants.gif", "/game/zombie/images/interface/PointerUP.gif",
			"/game/zombie/images/interface/PointerDown.gif", "/game/zombie/images/interface/Shovel.png", "/game/zombie/images/interface/SunBack.png",
			"/game/zombie/images/interface/ShovelBack.png", "/game/zombie/images/interface/GrowSoil.png",
			"/game/zombie/images/interface/SeedChooser_Background.png", "/game/zombie/images/interface/Button.png", "/game/zombie/images/interface/LogoLine.png",
			"/game/zombie/images/interface/dialog_topleft.png", "/game/zombie/images/interface/dialog_topmiddle.png",
			"/game/zombie/images/interface/dialog_topright.png", "/game/zombie/images/interface/dialog_centerleft.png",
			"/game/zombie/images/interface/dialog_centermiddle.png", "/game/zombie/images/interface/dialog_centerright.png",
			"/game/zombie/images/interface/SelectorScreen_Almanac.png", "/game/zombie/images/interface/SelectorScreen_AlmanacHighlight.png",
			"/game/zombie/images/interface/dialog_bottomleft.png", "/game/zombie/images/interface/dialog_bottommiddle.png",
			"/game/zombie/images/interface/dialog_bottomright.png", "/game/zombie/images/interface/Almanac_IndexBack.jpg",
			"/game/zombie/images/interface/Almanac_IndexButton.png", "/game/zombie/images/interface/Almanac_CloseButton.png",
			"/game/zombie/images/interface/Almanac_CloseButtonHighlight.png", "/game/zombie/images/interface/Almanac_IndexButtonHighlight.png",
			"/game/zombie/images/interface/Almanac_PlantBack.jpg", "/game/zombie/images/interface/Almanac_PlantCard.png",
			"/game/zombie/images/interface/Almanac_ZombieBack.jpg", "/game/zombie/images/interface/Almanac_ZombieCard.png",
			"/game/zombie/images/interface/AwardScreen_Back.jpg"
		]
	}(),
	LevelName: "JSPVZ",
	LoadMusic: function() {
		NewEle("oEmbed", "embed", "width:0;height:0", {
			src: "music/Faster.swf"
		}, EDAll)
	},
	LoadAccess: function() {
		EDAll.scrollLeft = 0;
		EDAll.innerHTML += WordUTF8;
		LoadProProcess();
		oSym.Stop()
	}
});
