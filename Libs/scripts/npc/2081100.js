/*  NPC : Harmonia
	Warrior 4th job advancement
	Forest of the priest (240010501)
*/

var status = -1;
var skills = Array(21001003, 21000000, 21100002, 21100004, 21100005, 21110002);
//polearm booster, combo ability, polearm mastery, final charge, combo smash, combo drain, full swing

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (!(cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131 || cm.getJob() == 2111)) {
	    cm.sendOk("�A�ӧ�ڦ�����ƶ�? �ڨS������i�H�i�D�A��.");
	    cm.dispose();
	    return;
	} else if (cm.getPlayerStat("LVL") < 120) {
	    cm.sendOk("�A���׷��C�h�����٤ӹ�F. ���A�ܱj�A�^�ӧ�ڧa.");
	    cm.dispose();
	    return;
	} else {
	    if (cm.getQuestStatus(6904) == 2 || cm.getJob() == 2111) {
		if (cm.getJob() == 111)
		    cm.sendSimple("�A�w�g��������榨���׷��C�h. \r\n�A�Q�n�i��ĥ|����¾��?\r\n#b#L0# �ڷQ�����^��.#l\r\n#b#L1#  ���ڦb�Q�Q.#l");
		else if (cm.getJob() == 121)
		    cm.sendSimple("�A�w�g��������榨���׷��C�h. \r\n�A�Q�n�i��ĥ|����¾��?\r\n#b#L0# �ڷQ�����^���t�M�h.#l\r\n#b#L1# ���ڦb�Q�Q.#l");
		else if (cm.getJob() == 131)
		    cm.sendSimple("�A�w�g��������榨���׷��C�h. \r\n�A�Q�n�i��ĥ|����¾��?\r\n#b#L0# �ڷQ�������M�h.#l\r\n#b#L1# ���ڦb�Q�Q.#l");
		else {
		    if (cm.haveItem(4031348)) {
		        cm.sendSimple("�A�w�g��������榨���׷��C�h. \r\n�A�Q�n�i��ĥ|����¾��?\r\n#b#L0# �ڷQ�����ԯ�.#l\r\n#b#L1#  ���ڦb�Q�Q.#l");
		    } else {
			cm.sendNext("You need the Secret Scroll for 10 million meso.");
			cm.dispose();
			return;
		    }
		}
	    } else {
		cm.sendOk("You're not ready to make 4th job advancement. When you're ready, talk to me.");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
	    cm.sendOk("�A���ݭn�S�ݦ����׷��C�h..���A���n�M�w�ڭ̦A�ӽͽͧa. ���A�ǳƦn,�ڹ����A�i��ĥ|����¾.");
	    cm.dispose();
	    return;
	}
	if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) {
	    cm.sendOk("��...�A�֦��Ӧh�� #b�ޯ��I#k. �A�ݭn�Χ��A�T�઺�ޯ��I�Ƥ~��i����¾.");
	    cm.dispose();
	    return;
	} else {
	    if (cm.canHold(2280003)) {
		cm.gainAp(5);
		cm.gainItem(2280003, 1);

		if (cm.getJob() == 111) {
		    cm.changeJob(112);
		    cm.teachSkill(1121001, 0, 10); // Monster Magnet
		    cm.teachSkill(1120004, 0, 10); // Achillies
		    cm.teachSkill(1121008, 0, 10); // Brandish
		    cm.sendNext("���ߧA�����׷��C�h, �ڪ� #b�^��#k.You will gain the #bRush#k Skill which makes you attack mutiple enemies and give you indomitable will along with #bStance#k and #bAchilles#k");
		} else if (cm.getJob() == 121) {
		    cm.changeJob(122);
		    cm.teachSkill(1221001, 0, 10); // Monster Magnet
		    cm.teachSkill(1220005, 0, 10); // Achillies
		    cm.teachSkill(1221009, 0, 10); // Blast
		    cm.sendNext("���ߧA�����׷��C�h, �ڪ� #b�t�M�h#k.You will gain the #bRush#k Skill which makes you attack mutiple enemies and give you indomitable will along with #bStance#k and #bAchilles#k");
		} else if (cm.getJob() == 131) {
		    cm.changeJob(132);
		    cm.teachSkill(1321001, 0, 10);
		    cm.teachSkill(1320005, 0, 10);
		    cm.teachSkill(1321007, 0, 10);
		    cm.sendNext("���ߧA�����׷��C�h, �ڪ� #���M�h#k.You will gain the #bRush#k Skill which makes you attack mutiple enemies and give you indomitable with along with #bStance#k and #bAchilles#k.");
		} else {
		    cm.gainItem(4031348, -1);
		    cm.changeJob(2112);
		for (var i = 0; i < skills.length; i++) {
			cm.teachSkill(skills[i], cm.getPlayer().getSkillLevel(skills[i]));
		}
	    	    cm.teachSkill(21120001, 0, 10); // Aggression
		    cm.teachSkill(21120002, 0, 10); // Overswing
		    cm.teachSkill(21121003, 0, 10); // Freezing Posture
		    cm.sendNext("���ߧA�����׷��C�h, �ڪ� #�ԯ�#k.You will gain the #bOverswing#k Skill which makes you attack mutiple enemies and give you indomitable with along with #bAggression#k and #bFreezing Posture#k.");
		}
	    } else {
		cm.sendOk("�A�����w�g���F. �M�X����A��ڻ��ܧa.");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 2) {
	cm.sendNextPrev("�O�ѤF�o���M��A���V�m.");
	cm.dispose();
    }
}
