import {Given} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";
import {PageId} from "../../env/global";
import {navigateToPage} from "../support/navigation-behavior";

Given(
    /^I am on the "([^"]*)" page$/, async function ( this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { driver },
            globalVariables,
            globalConfig
        } = this
        console.log(`I am on ${pageId} page`)
        globalVariables.currentScreen = pageId

        await navigateToPage(driver, pageId, globalConfig)
    }
)
