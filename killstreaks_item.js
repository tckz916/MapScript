match.getWorld().on('use', function(event) {
  var player = event.getPlayer();
  var itemstack = event.getItemStack();
  var killstreaks = player.getKillStreaks();
  if (itemstack.getType() != 'BLAZE_POWDER'){
    return;
  }

  var jp_message = '`6現在のキルストリーク`f: `a' + killstreaks;
  var message = '`6Current KillStreaks`f: `a' + killstreaks;
  if (player.getLocale() == 'ja_JP') {
      player.sendMessage(jp_message);
  } else {
      player.sendMessage(message);
  }

  player.playSound("ZOMBIE_PIG_HURT", 1, 1);
});
