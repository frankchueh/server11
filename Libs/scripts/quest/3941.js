var status = -1;

function start(mode, type, selection) {
	qm.sendNext("������Ӯc���u�ó��٨S�ӻ�������O...");
	if (!qm.haveItem(2210005)) {
		qm.sendNext("��? �A�O�s�Ӫ��u�ö�,�Pı�n�����Ӥ@��...");
		qm.forceStartQuest();
}
	qm.dispose();
}
function end(mode, type, selection) {
	qm.sendNext("�n�a��F, �A�N���h�a");
	qm.gainItem(4031571, 1);
	qm.forceCompleteQuest();
	qm.dispose();
}
