function enter(pi) {
    if (pi.isQuestActive(3935)) {
      if (!pi.haveItem(4031574)) {
          pi.warp(926000010);
          pi.gainItem(4031574, 1)
          pi.playerMessage("打箱子不會掉,趕快逃出這裡吧哈哈哈");
      } else {
          pi.playerMessage("沒有必要再進入這裡");
      }
    }
}
