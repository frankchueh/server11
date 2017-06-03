var status = -1;

function start(mode, type, selection) {
	qm.sendNext("Mission start!.");
	qm.dispose();
}
function end(mode, type, selection) {
	qm.sendNext("看在你這麼有誠意,我就告訴你我知道的吧....");
	qm.forceCompleteQuest();
	qm.dispose();
}
