/*
	NPC Name: 		Spinel
	Map(s): 		Victoria Road : Henesys (100000000), Victoria Road : Ellinia (101000000), Victoria Road : Perion (102000000), Victoria Road : Kerning City (103000000), Victoria Road : Lith Harbor (104000000), Orbis : Orbis (200000000), Ludibrium : Ludibrium (220000000), Leafre : Leafre (240000000), Zipangu : Mushroom Shrine (800000000)
	Description: 		World Tour Guide
*/

var status = -1;
var cost, sel;
var togo1, togo2, togo3;
var togo;
var map;
var back = true;
var mapName = new Array ("古代神社","水上市場","上海灘","西門町","嵩山鎮", "�m會潮流區", "");
var mapList = new Array(800000000, 500000000, 701000000, 740000000, 702000000, 550000000, 742000000, 260000000, 250000000);

function start() {
    switch (cm.getMapId()) {
    	case 800000000:
    	case 500000000:
    	case 701000000:
    	case 740000000:
      case 702000000:
	    map = cm.getSavedLocation("WORLDTOUR");
	    cm.sendSimple("在這裡玩的如何呢?想去別的地方繼續旅遊還是回到原來的地方呢? \n\r #b#L0#我還可以去哪邊?#l \n\r #L1#我旅行完了,我要回去#m"+map+"##l");
	    break;
	default:
	    back = false;
	    if (cm.getJob() == 0) {
		        cm.sendNext("HI 我是旅遊小幫手，可以帶妳去各地遊玩\n\r 咦!原來你是初心�竻r 這樣的話我也不收你太多\r\n#b300楓幣就好了");
		        cost = 300;
	    } else {
		        cm.sendNext("HI 我是旅遊小幫手，可以帶妳去各地遊玩，收你3000楓幣就好了");
	          cost = 3000;
	    }
	     break;
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
	       cm.dispose();
    } else {
        	if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)) {
        	    cm.dispose();
        	    return;
        	}
        	if (mode == 1)
        	    status++;
        	else
        	    status--;

        	if (!back) {
        	    if (status == 0) {
                var speak = "請問你想要去哪裡玩呢? \r ";
                for (var i = 0; i < mapList.length; i++) {
                  if (cm.getMapId() == mapList[i])
                    continue;
                  speak += " #L" + i + "##b#m" + mapList[i] + "#";
                }
    		          cm.sendSimple(speak);
        	    } else if (status == 1) {
                  togo = mapList[selection];
      		        cm.sendYesNo("請問你確定要前往 #b#m" + togo + " 嗎?");
        	    /*} else if (status == 2) {
        		cm.sendNext("Check out the female shaman serving the Mushroom God, and I strongly recommend trying Takoyaki, Yakisoba, and other delicious food sold in the streets of Japan. Now, let's head over to #bMushroom Shrine#k, a mythical place if there ever was one.");*/
        	    } else if (status == 2) {
                		if (cm.getMeso() < cost) {
                		    cm.sendPrev("不好意思你的金錢不夠喔");
                		} else {
                		    cm.gainMeso(-cost);
                		    cm.saveLocation("WORLDTOUR");
                		    cm.warp(togo, 0);
                		    cm.dispose();
                		}
        	    }
        	} else {
        	    if (status == 0) {
            		if (selection == 0) {
                  var speak = "請問你想要去哪裡玩呢? \r ";
                  for (var i = 0; i < mapList.length; i++) {
                    if (cm.getMapId() == mapList[i])
                      continue;
                    speak += " #L" + i + "##b#m" + mapList[i] + "#";
                  }
      		          cm.sendSimple(speak);
            		} else if (selection == 1) {
            		    cm.warp(map == -1 ? 100000000 : map);
            		    cm.clearSavedLocation("WORLDTOUR");
            		    cm.dispose();
                  }
      	    } else if (status == 1) {
            		togo = mapList[selection];
        		    cm.sendNext("你確定要前往 #b#m"+togo+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
      	    } else if (status == 2) {
          		    cm.warp(togo);
              		cm.dispose();
      	    }
      	}
    }
}
