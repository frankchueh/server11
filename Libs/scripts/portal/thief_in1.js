function enter(pi) {
    if (pi.isQuestActive(3925)) {
	pi.forceCompleteQuest(3925);
	pi.playerMessage("Quest complete. 3925");
    }
    pi.warp(260010402, 0);
}
