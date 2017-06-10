var status = -1;

function start(mode, type, selection) {
	qm.gainItem(4031289, 1);
	qm.forceStartQuest(8512);
	qm.sendAcceptDecline("寫好了。那麼你拿這張證明書去見我的手下吧。給他們看這張證明，他們就會幫助你。等你成功打退怪物，就把赤珠拿回來給我吧。");
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest(8512);
	qm.dispose();
}
