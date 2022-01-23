import { TwoStateSwitchLabelProjector } from '../subProjectors/TwoStateSwitchLabelProjector.js';
import { TwoStateConfigurationProjector } from "../subProjectors/TwoStateConfigurationProjector.js";
import { switchBoxProjector } from "../subProjectors/switchBoxProjector.js";
import { featureToggleProjector } from "../subProjectors/featureToggleProjector.js";
import { ThreeStateSwitchLabelProjector } from "../subProjectors/ThreeStateSwitchLabelProjector.js";
import { ThreeStateConfigurationProjector } from "../subProjectors/ThreeStateConfigurationProjector.js";
import {PolymorphProjector} from "../subProjectors/PolymorphProjector.js";

export { switchProjector }

/* Build main switch projector, combine all sub projectors */
const switchProjector = (controller, rootElement, switchModel) => {

    const switchTheme = _ => {
        if (switchModel.isDark.getValue()) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    switchModel.isDark.onChange(_ => {
        switchTheme();
    });

    /*Polymorph Switch */
    const PolymorphSwitchElement = PolymorphProjector(switchModel, switchModel.ThreeState, true);
    const PolymorphConfigurationElement = ThreeStateConfigurationProjector(PolymorphSwitchElement);
    const BoxThreeStateSwitchElement = switchBoxProjector('3-State Switch');

    BoxThreeStateSwitchElement.appendChild(PolymorphSwitchElement);
    BoxThreeStateSwitchElement.appendChild(PolymorphConfigurationElement);
    rootElement.appendChild(BoxThreeStateSwitchElement);

/*    /!* 3-State Switch *!/
    const ThreeStateSwitchLabelElement = ThreeStateSwitchLabelProjector(switchModel, switchModel.ThreeState);
    const ThreeStateConfigurationElement = ThreeStateConfigurationProjector(ThreeStateSwitchLabelElement);
    const BoxThreeStateSwitchElement = switchBoxProjector('3-State Switch');

    /!* 2-State Switch *!/
    const TwoStateSwitchLabelElement = TwoStateSwitchLabelProjector(switchModel, switchModel.isDark);
    const TwoStateConfigurationElement = TwoStateConfigurationProjector(TwoStateSwitchLabelElement);
    const BoxTwoStateSwitchElement = switchBoxProjector('2-State Switch');*/

    /* Dark- / Light-Mode Toggle */
    //const toggleLabelElement = featureToggleProjector(TwoStateSwitchLabelElement, switchModel);


/*    switchModel.isThreeState.setValue(true); */

/*        if (switchModel.isThreeState.getValue() === true) {
            BoxThreeStateSwitchElement.appendChild(ThreeStateSwitchLabelElement);
            BoxThreeStateSwitchElement.appendChild(ThreeStateConfigurationElement);
            rootElement.appendChild(BoxThreeStateSwitchElement);
       // } else {
            BoxTwoStateSwitchElement.appendChild(TwoStateSwitchLabelElement);
            //BoxTwoStateSwitchElement.appendChild(TwoStateConfigurationElement);

            rootElement.appendChild(BoxTwoStateSwitchElement);
            rootElement.appendChild(toggleLabelElement);*/
       // }

    // }

}