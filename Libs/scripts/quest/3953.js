var status = -1;

function start(mode, type, selection) {
	qm.sendNext("Mission start!.");
	qm.dispose();
}
function end(mode, type, selection) {
	qm.sendNext("�ݦb�A�o�򦳸۷N,�ڴN�i�D�A�ڪ��D���a....");
	qm.forceCompleteQuest();
	qm.dispose();
}
