var status = -1;

function end(mode, type, selection) {
	qm.sendNext("�q�i�F���W���o����? �P�±z����U.\r \r \r #b���Ȫ����y#b: \r �g��� - 2000 exp \r\t"
							+ "#b#t" + 2030000 + " ##i" + 2030000 + "##k x5\r\t"
							+ "#b#t" + 2022155 + " ##i" + 2022155 + "##k x5");
	qm.gainExp(2000);
	qm.gainItem(2030000, 5);
	qm.gainItem(2022155, 5);
	qm.forceCompleteQuest();
	qm.dispose();
}
