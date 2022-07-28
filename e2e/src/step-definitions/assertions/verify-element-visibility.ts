import { Then } from '@cucumber/cucumber'
import { expect } from 'chai'
import { By } from 'selenium-webdriver'
import {ScenarioWorld} from "../setup/world";

Then(
    /^"([^"]*)" list ans selection details should be displayed$/, async function (this: ScenarioWorld ,elementKey: string) {
        const {
            screen: { driver }
        } = this
        console.log(`${elementKey} listing should be displayed`)
        const element = await global.myDriver.findElement(By.css('#error-heading'))
        const elementText = await element.getAttribute('textContent')
        expect(elementText).to.contain("Your session has expired.")
    }
)
Then (
    /^the "([^"]*)" should be displayed$/, async function(this: ScenarioWorld, elementKey: string ) {
        const {
            screen: { driver }
        } = this
            console.log(`${elementKey} should be present`)
            const element = await global.myDriver.findElement(By.css('#error-heading'))
            expect(await element.isDisplayed()).to.be.true
        }
)
