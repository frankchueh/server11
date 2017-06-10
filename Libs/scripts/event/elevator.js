function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("isUp","false");
    em.setProperty("isDown","false");
    onDown();
}
// start transfer down
function onDown() {
    em.warpAllPlayer(222020210, 222020211);
    em.setProperty("isDown","false");
    em.getChannelServer().getMapFactory().getMap(222020100).resetReactors();
    em.schedule("goingUp", 60000);
}

// done transfer down and wait for user going up
function goingUp() {
    em.warpAllPlayer(222020111, 222020200);
    em.setProperty("isUp","true");
    em.getChannelServer().getMapFactory().getMap(222020100).setReactorState();
    em.schedule("onUp", 50000);
}

// start transfer up
function onUp() {
    em.warpAllPlayer(222020110, 222020111);
    em.setProperty("isUp","false");
    em.getChannelServer().getMapFactory().getMap(222020200).resetReactors();
    em.schedule("goingDown", 60000);
}

// done transfer up and wait for user going down
function goingDown() {
    em.warpAllPlayer(222020211, 222020100);
    em.setProperty("isDown","true");
    em.getChannelServer().getMapFactory().getMap(222020200).setReactorState();
    em.schedule("onDown", 50000);
}

function cancelSchedule() {
}
