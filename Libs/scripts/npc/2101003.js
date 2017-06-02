
/* 	Ardin
	Ariant
*/


function start() {
  if (cm.getQuestStatus(3933) == 2) {
    cm.sendNext ("你已經打敗我了!");
  }
  else if (cm.getQuestStatus(3933) == 1)  {
    cm.sendOk ("看招!");
    cm.spawnMonster(9100013, 1);
  }
  else {
    cm.sendNext ("喂喂, 別沒事找人麻煩, 我不想對你動手");
  }
}

function action() {
    cm.dispose()
}
