import {Builder, Webdriver} from 'selenium-webdriver'

import {IWorldOptions, setWorldConstructor, World} from "@cucumber/cucumber";
import firefox from 'selenium-webdriver/firefox'
import {Options} from 'selenium-webdriver/chrome'
import {env} from '../../env/parseEnv'
import {stringIsOfOptions} from "../../support/option-helper";

export type Screen = {
    driver: Webdriver
}

export class ScenarioWorld extends World {
    constructor(options: IWorldOptions) {
        super(options);
    }

    screen!: Screen

    async init() : Promise<Screen> {
        const browser = await this.newBrowser()
        const browserBuilder = await this.browserBuilder(browser)
        const driver = browserBuilder.build()
        await driver.manage().window().maximize()

        this.screen = { driver}
        return this.screen
    }

    private newBrowser = async(): Promise <string> => {
        const automationBrowser = env('UI_AUTOMATION_BROWSER')
        const automationBrowsers = ['chrome', 'firefox', 'safari']
        return stringIsOfOptions(automationBrowser, automationBrowsers)
    }

    private browserBuilder = async(browser: string) : Promise< Builder> => {
        console.log(`🖥 Executing on ${browser} browser 🖥`)
        const builder = new Builder()

        switch(browser) {
            case "chrome" : {
                const chromeBrowserOptions = (
                    new Options())
                chromeBrowserOptions.addArguments(
                    env('BROWSER_ARGUMENTS')
                )
                return builder.forBrowser(browser).withCapabilities(chromeBrowserOptions)
            }
            case "firefox" : {
                const firefoxBrowserOptions = new firefox.Options()
                firefoxBrowserOptions.addArguments((env('BROWSER_ARGUMENTS')))
                firefoxBrowserOptions.set("acceptInsecureCerts", true)
                return builder.forBrowser(browser).setFirefoxOptions(firefoxBrowserOptions)
            }
            default: {
                return builder.forBrowser(browser)
            }
        }
    }

}

setWorldConstructor(ScenarioWorld)
