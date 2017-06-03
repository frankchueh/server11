/* Author: aaroncsn(MapleSea Like)
	NPC Name: 		Karcasa
	Map(s): 		The Burning Sands: Tents of the Entertainers(260010600)
	Description: 		Warps to Victoria Island
*/
var towns = new Array(100000000,101000000,102000000,103000000,104000000);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status == 0 && mode == 0) {
		cm.sendNext("好吧...是因為你怕高和速度太快嗎? 還是你不相信我的飛行技術? 相信我, 100%沒問題的!");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0){
		cm.sendAcceptDecline("我不曉得你從哪裡得知的, 但你來對了! 當你厭倦了納西沙漠和想念家鄉時, 我提供直接飛往維多利亞大陸的服務! 別擔心這個魔毯--他只有墜落一次...兩次而已! 你不覺得你做飛船已經做得很膩了嗎? 如何? 需要我的服務嗎?");
	} else if(status == 1){
		cm.sendAcceptDecline("請記住兩件事. 第一, 這是一項橫跨大陸的飛行, 所以 #r我無法保證你會在哪個村莊登陸#k. 第二, 因為這個服務相當特殊, 所以他會有點貴. 總共要收費 #e#b10,000 楓幣#n#k. 你確定你要搭乘嗎?");
	} else if(status == 2){
		cm.sendNext("好!準備起飛~");
	} else if(status == 3){
		if(cm.getMeso() >= 10000){
			cm.gainMeso(-10000);
			cm.warp(towns[Math.floor(Math.random() * towns.length)]);
		} else{
			cm.sendNextPrev("嘿, 你是不是沒有錢啊? 你需要 #b10,000#k 楓幣 給我.");
			cm.dispose();
			}
		}
	}
}
