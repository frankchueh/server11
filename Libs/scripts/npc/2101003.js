
/* 	Ardin
	Ariant
*/


function start() {
  if (cm.getQuestStatus(3933) == 2) {
    cm.sendNext ("�A�w�g���ѧڤF!");
  }
  else if (cm.getQuestStatus(3933) == 1)  {
    cm.sendOk ("�ݩ�!");
    cm.spawnMonster(9100013, 1);
  }
  else {
    cm.sendNext ("�޳�, �O�S�Ƨ�H�·�, �ڤ��Q��A�ʤ�");
  }
}

function action() {
    cm.dispose()
}
