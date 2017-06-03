var status = -1;

function end(mode, type, selection) {
	qm.sendNext("從波達身上取得的嗎? 感謝您的協助.\r \r \r #b任務的獎勵#b: \r 經驗值 - 2000 exp \r\t"
							+ "#b#t" + 2030000 + " ##i" + 2030000 + "##k x5\r\t"
							+ "#b#t" + 2022155 + " ##i" + 2022155 + "##k x5");
	qm.gainExp(2000);
	qm.gainItem(2030000, 5);
	qm.gainItem(2022155, 5);
	qm.forceCompleteQuest();
	qm.dispose();
}
