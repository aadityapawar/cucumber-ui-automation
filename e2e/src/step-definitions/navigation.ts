import {Given} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";

Given(
    /^I am on the "([^"]*)" app page$/, async function ( this: ScenarioWorld, pageId: string) {
        const {
            screen: { driver }
        } = this
        console.log(`I am on ${pageId} page`)
        await driver.get('https://facebook.com/')
    }
)
