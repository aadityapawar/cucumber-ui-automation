import { Then } from '@cucumber/cucumber'
import { expect } from 'chai'
import { By } from 'selenium-webdriver'
import {ScenarioWorld} from "../setup/world";
import {
    ElementKey,
    ExpectedElementText
} from "../../../env/global";
import {getElementLocator} from "../../support/web-element-helper";

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/, async function (this: ScenarioWorld ,elementKey: ElementKey, expectedElementText: ExpectedElementText) {
        const {
            screen: { driver },
            globalConfig,
            globalVariables
        } = this
        console.log(`${elementKey} should contain the text ${expectedElementText}`)

        const elementIdentifier = getElementLocator(driver, elementKey,globalVariables,globalConfig)

        const element = await driver.findElement(By.css(elementIdentifier))

        const elementText = await element.getAttribute('innerText')

        expect(elementText).to.contain(expectedElementText)
    }
)
Then (
    /^the "([^"]*)" should be displayed$/, async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { driver },
            globalConfig,
            globalVariables
        } = this
            console.log(`${elementKey} should be present`)
        const elementIdentifier = getElementLocator(driver, elementKey, globalVariables, globalConfig)

        const element = await driver.findElement(By.css(elementIdentifier))

        expect(await element.isDisplayed()).to.be.true
        }
)
