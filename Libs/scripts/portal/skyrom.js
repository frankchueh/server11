function enter(pi) {
    if (pi.isQuestActive(3935)) {
      if (!pi.haveItem(4031574)) {
          pi.warp(926000010);
          pi.gainItem(4031574, 1)
          pi.playerMessage("���c�l���|��,���ְk�X�o�̧a������");
      } else {
          pi.playerMessage("�S�����n�A�i�J�o��");
      }
    }
}
