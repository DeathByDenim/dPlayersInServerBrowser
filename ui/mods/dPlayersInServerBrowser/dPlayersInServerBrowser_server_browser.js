(function() {

var oldProcessGameBeacon = model.processGameBeacon;
model.processGameBeacon = function(beacon, host_id) {
	var game = oldProcessGameBeacon(beacon, host_id);
	game.player_names = beacon.player_names;
	
	return game;
};

var olddatabind = $('.one-game').attr('data-bind');
$('.one-game').after(
	'<!-- ko if: host_id === model.currentSelectedGameHost() -->' +
	'                    <div class="row one-game" data-bind="' +
	'                            css: { \'ui-selected\': (host_id == model.currentSelectedGameHost()) },' +
	'                            click: $parent.setSelected,' +
	'                            event: { dblclick: $parent.joinSelectedGame }">' +
	'                        <div class="col-md-12 game"><span style="margin-left:1.2em; margin-right: 1em;">PLAYERS:</span><span data-bind="foreach: $data.player_names"><span data-bind="text: $data" class="dPlayersInServerBrowser_player-name"></span></span></div>' +
	'                    </div>' +
	'<!-- /ko -->'
);
})();
