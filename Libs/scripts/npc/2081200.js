/*  NPC : Gritto
	Magician 4th job advancement
	Forest of the priest (240010501)
*/

var status = -1;

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
	if (!(cm.getJob() == 211 || cm.getJob() == 221 || cm.getJob() == 231)) {
	    cm.sendOk("你來找我有什麼事嗎? 我沒有什麼可以告訴你的.");
	    cm.dispose();
	    return;
	} else if (cm.getPlayerStat("LVL") < 120) {
	    cm.sendOk("你對於終極法師之路還太嫩了. 等你變強再回來找我吧.");
	    cm.dispose();
	    return;
	} else {
	    if (cm.getQuestStatus(6914) == 2) {
		if (cm.getJob() == 211)
		    cm.sendSimple("你已經有足夠資格成為終極法師. \r\n你想要進行第四次轉職嗎?\r\n#b#L0# 我想成為大魔導士.#l\r\n#b#L1#  讓我在想想.#l");
		else if (cm.getJob() == 221)
		    cm.sendSimple("你已經有足夠資格成為終極法師. \r\n你想要進行第四次轉職嗎?\r\n#b#L0# 我想成為大魔導士.#l\r\n#b#L1#  讓我在想想.#l");
		else
		    cm.sendSimple("你已經有足夠資格成為終極法師. \r\n你想要進行第四次轉職嗎?\r\n#b#L0# 我想成為主教.#l\r\n#b#L1#  讓我在想想.#l");
	    } else {
		cm.sendOk("You're not ready to make 4th job advancement. When you're ready, talk to me.");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
	    cm.sendOk("You don't have to hesitate to be the best Magician..Whenever you decide, talk to me. If you're ready, I'll let you make the 4th job advancement.");
	    cm.dispose();
	    return;
	}
	if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) {
	    cm.sendOk("Hmm...You have too many #bSP#k. You can't make the 4th job advancement with too many SP left.");
	    cm.dispose();
	    return;
	} else {
	    if (cm.canHold(2280003)) {
		cm.gainAp(5);
		cm.gainItem(2280003, 1);

		if (cm.getJob() == 211) {
		    cm.changeJob(212);
		    cm.teachSkill(2121001,0,10);
		    cm.teachSkill(2121006,0,10);
		    cm.teachSkill(2121002,0,10);
		    cm.sendNext("You became the best magician, #bArch Mage#k. Arch Mage can use its own power as well as Mana of nature just like \n#bInfinity#k or #bBig Bang#k");
		} else if (cm.getJob() == 221) {
		    cm.changeJob(222);
		    cm.teachSkill(2221001,0,10);
		    cm.teachSkill(2221006,0,10);
		    cm.teachSkill(2221002,0,10);
		    cm.sendNext("You became the best magician, #bArch Mage#k. Arch Mage can use its own power as well as Mana of nature just like \n#bInfinity#k or #bBig Bang#k");
		} else {
		    cm.changeJob(232);
		    cm.teachSkill(2321001,0,10);
		    cm.teachSkill(2321005,0,10);
		    cm.teachSkill(2321002,0,10);
		    cm.sendNext("You became the best magician #bBishop#k.  Bishop can use its own power as well as Mana of nature just like \n#bInfinity#k or #bBig Bang#k");
		}
	    } else {
		cm.sendOk("You can't proceed as you don't have an empty slot in your inventory. Please clear your inventory and try again.");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 2) {
	if (cm.getJob() == 212) {
	    cm.sendNext("This is not all about Arch Mage. Arch Mage is good at fire and poison element-based. It may change not only extreme element-based but also element-based of its own or enemies if you train. ");
	} else if (cm.getJob() == 222) {
	    cm.sendNextPrev("This is not all about Arch Mage. Arch Mage is good at fire and poison element-based. It may change not only extreme element-based but also element-based of its own or enemies if you train. ");
	} else {
	    cm.sendNextPrev("This is not all about Bishop. Bishop can borrow God's power. It may make strong castle element-based magic and even make the dead alive. ");
	}
    } else if (status == 3) {
	cm.sendNextPrev("Don't forget that it all depends on how much you train.");
	cm.dispose();
    }
}
