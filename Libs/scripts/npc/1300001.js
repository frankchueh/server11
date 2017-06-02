/* ===========================================================
			Resonance
	NPC Name: 		Killer Mushroom Spore
	Map(s): 		Mushroom Castle: Deep inside Mushroom Forest(106020300)
	Description: 	Breaking the Barrier
=============================================================
Version 1.0 - Script Done.(18/7/2010)
=============================================================
*/
var spawnNum = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    cm.spawnMonster(3300005,1);
    cm.spawnMonster(3300006,1);
    cm.spawnMonster(3300007,1);
    cm.spawnMonster(3300008,1);
    cm.dispose();
}
