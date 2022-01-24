import { SwitchController, View, Grid } from "./controller/switchController.js";
import { switchService } from "./service/switchService.js";

const service = switchService();

const controller1 = SwitchController(service);

View(controller1, document.getElementById('switch'));
controller1.addSwitch();

/*
const controller2 = SwitchController(service);
Grid(controller2, document.getElementById('grid'));
controller2.showGrid();
*/