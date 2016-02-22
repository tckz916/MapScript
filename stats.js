/**
 * Created by tckz916 on 2016/02/23.
 */
match.on('end', function() {
  var players = match.getPlayers();
  for (var i = 0; i < players.length; i++) {
    if (players[i].getTeam() == null) {
      continue;
    }
    var player = players[i];

    var kill = player.getKills();
    var death = player.getDeaths();

    var jp_message = '`a----- `6現在の試合統計 `a-----\n`aKills: `6' + kill + ' `aDeaths: `6' + death;
    var message = '`a----- `6Current game stats `a-----\n`aKills: `6' + kill + ' `aDeaths: `6' + death;
    if (player.getLocale() == 'ja_JP') {
        player.sendMessage(jp_message);
    } else {
        player.sendMessage(message);
    }
    player.playSound("LEVEL_UP", 1, 1);
  }
});
