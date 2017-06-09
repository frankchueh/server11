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
var mapName = new Array ("�j�N����","���W����","�W���y","����m","�C�s��", "�m�|��y��", "");
var mapList = new Array(800000000, 500000000, 701000000, 740000000, 702000000, 550000000, 742000000, 260000000, 250000000);

function start() {
    switch (cm.getMapId()) {
    	case 800000000:
    	case 500000000:
    	case 701000000:
    	case 740000000:
      case 702000000:
	    map = cm.getSavedLocation("WORLDTOUR");
	    cm.sendSimple("�b�o�̪����p��O?�Q�h�O���a���~��ȹC�٬O�^���Ӫ��a��O? \n\r #b#L0#���٥i�H�h����?#l \n\r #L1#�ڮȦ槹�F,�ڭn�^�h#m"+map+"##l");
	    break;
	default:
	    back = false;
	    if (cm.getJob() == 0) {
		        cm.sendNext("HI �ڬO�ȹC�p����A�i�H�a�p�h�U�a�C��\n\r �x!��ӧA�O��ߎͧr �o�˪��ܧڤ]�����A�Ӧh\r\n#b300�����N�n�F");
		        cost = 300;
	    } else {
		        cm.sendNext("HI �ڬO�ȹC�p����A�i�H�a�p�h�U�a�C���A���A3000�����N�n�F");
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
                var speak = "�аݧA�Q�n�h���̪��O? \r ";
                for (var i = 0; i < mapList.length; i++) {
                  if (cm.getMapId() == mapList[i])
                    continue;
                  speak += " #L" + i + "##b#m" + mapList[i] + "#";
                }
    		          cm.sendSimple(speak);
        	    } else if (status == 1) {
                  togo = mapList[selection];
      		        cm.sendYesNo("�аݧA�T�w�n�e�� #b#m" + togo + " ��?");
        	    /*} else if (status == 2) {
        		cm.sendNext("Check out the female shaman serving the Mushroom God, and I strongly recommend trying Takoyaki, Yakisoba, and other delicious food sold in the streets of Japan. Now, let's head over to #bMushroom Shrine#k, a mythical place if there ever was one.");*/
        	    } else if (status == 2) {
                		if (cm.getMeso() < cost) {
                		    cm.sendPrev("���n�N��A������������");
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
                  var speak = "�аݧA�Q�n�h���̪��O? \r ";
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
        		    cm.sendNext("�A�T�w�n�e�� #b#m"+togo+"##k?  �쨺��ݭn #b3,000 ����#k. �T�w�{�b�n�h��?");
      	    } else if (status == 2) {
          		    cm.warp(togo);
              		cm.dispose();
      	    }
      	}
    }
}
