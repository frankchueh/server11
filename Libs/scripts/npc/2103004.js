var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestActive(3929)) {
    	cm.sendOk("#b自動放完所有的米袋, 你可以回去找 NPC 接下一個任務了!");
      cm.gainItem(4031580, -4);
      cm.forceCompleteQuest(3929);
    } else if (cm.isQuestActive(3926)) {
      cm.sendOk("#b自動放完所有的寶物!");
      cm.gainItem(4031579,-4);
      var record = cm.getQuestRecord(3926);
      var data = record.getCustomData();
      if (data != "3333") {
        cm.setQuestRecord(cm.getPlayer(), 3926, "3333");
      }
    }
    cm.dispose();
}
