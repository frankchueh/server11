var status = -1;

function start(mode, type, selection) {
	qm.sendNext("Mission start!.");
	qm.dispose();
}
function end(mode, type, selection) {
	qm.sendNext("Mission End.");
	qm.forceCompleteQuest();
	qm.dispose();
}
