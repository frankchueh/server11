var status = -1;

function start(mode, type, selection) {
	qm.sendNext("為什麼皇宮的守衛都還沒來領取絲綢呢...");
	if (!qm.haveItem(2210005)) {
		qm.sendNext("嗯? 你是新來的守衛嗎,感覺好像不太一樣...");
		qm.forceStartQuest();
}
	qm.dispose();
}
function end(mode, type, selection) {
	qm.sendNext("好吧算了, 你就拿去吧");
	qm.gainItem(4031571, 1);
	qm.forceCompleteQuest();
	qm.dispose();
}
