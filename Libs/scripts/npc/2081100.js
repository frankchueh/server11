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
	    cm.sendOk("你來找我有什麼事嗎? 我沒有什麼可以告訴你的.");
	    cm.dispose();
	    return;
	} else if (cm.getPlayerStat("LVL") < 120) {
	    cm.sendOk("你對於終極劍士之路還太嫩了. 等你變強再回來找我吧.");
	    cm.dispose();
	    return;
	} else {
	    if (cm.getQuestStatus(6904) == 2 || cm.getJob() == 2111) {
		if (cm.getJob() == 111)
		    cm.sendSimple("你已經有足夠資格成為終極劍士. \r\n你想要進行第四次轉職嗎?\r\n#b#L0# 我想成為英雄.#l\r\n#b#L1#  讓我在想想.#l");
		else if (cm.getJob() == 121)
		    cm.sendSimple("你已經有足夠資格成為終極劍士. \r\n你想要進行第四次轉職嗎?\r\n#b#L0# 我想成為英雄聖騎士.#l\r\n#b#L1# 讓我在想想.#l");
		else if (cm.getJob() == 131)
		    cm.sendSimple("你已經有足夠資格成為終極劍士. \r\n你想要進行第四次轉職嗎?\r\n#b#L0# 我想成為黑騎士.#l\r\n#b#L1# 讓我在想想.#l");
		else {
		    if (cm.haveItem(4031348)) {
		        cm.sendSimple("你已經有足夠資格成為終極劍士. \r\n你想要進行第四次轉職嗎?\r\n#b#L0# 我想成為戰神.#l\r\n#b#L1#  讓我在想想.#l");
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
	    cm.sendOk("你不需要猶豫成為終極劍士..等你做好決定我們再來談談吧. 等你準備好,我對讓你進行第四次轉職.");
	    cm.dispose();
	    return;
	}
	if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) {
	    cm.sendOk("恩...你擁有太多的 #b技能點#k. 你需要用完你三轉的技能點數才能進行轉職.");
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
		    cm.sendNext("恭喜你成為終極劍士, 我的 #b英雄#k.You will gain the #bRush#k Skill which makes you attack mutiple enemies and give you indomitable will along with #bStance#k and #bAchilles#k");
		} else if (cm.getJob() == 121) {
		    cm.changeJob(122);
		    cm.teachSkill(1221001, 0, 10); // Monster Magnet
		    cm.teachSkill(1220005, 0, 10); // Achillies
		    cm.teachSkill(1221009, 0, 10); // Blast
		    cm.sendNext("恭喜你成為終極劍士, 我的 #b聖騎士#k.You will gain the #bRush#k Skill which makes you attack mutiple enemies and give you indomitable will along with #bStance#k and #bAchilles#k");
		} else if (cm.getJob() == 131) {
		    cm.changeJob(132);
		    cm.teachSkill(1321001, 0, 10);
		    cm.teachSkill(1320005, 0, 10);
		    cm.teachSkill(1321007, 0, 10);
		    cm.sendNext("恭喜你成為終極劍士, 我的 #黑騎士#k.You will gain the #bRush#k Skill which makes you attack mutiple enemies and give you indomitable with along with #bStance#k and #bAchilles#k.");
		} else {
		    cm.gainItem(4031348, -1);
		    cm.changeJob(2112);
		for (var i = 0; i < skills.length; i++) {
			cm.teachSkill(skills[i], cm.getPlayer().getSkillLevel(skills[i]));
		}
	    	    cm.teachSkill(21120001, 0, 10); // Aggression
		    cm.teachSkill(21120002, 0, 10); // Overswing
		    cm.teachSkill(21121003, 0, 10); // Freezing Posture
		    cm.sendNext("恭喜你成為終極劍士, 我的 #戰神#k.You will gain the #bOverswing#k Skill which makes you attack mutiple enemies and give you indomitable with along with #bAggression#k and #bFreezing Posture#k.");
		}
	    } else {
		cm.sendOk("你的欄位已經滿了. 清出欄位後再跟我說話吧.");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 2) {
	cm.sendNextPrev("別忘了這取決於你的訓練.");
	cm.dispose();
    }
}
