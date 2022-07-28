import {After, Before} from '@cucumber/cucumber'
import * as fs from 'fs'
import {ScenarioWorld} from "./world";
import {env} from '../../env/parseEnv'

Before(
    async function (this : ScenarioWorld, scenario) {
      console.log(`🥒 Running cucumber scenario ${scenario.pickle.name}`)
        return await this.init()
    }
)

After(
    async function (this: ScenarioWorld, scenario) {
        const {
            screen: {driver}
         } = this

        const scenarioStatus = scenario.result?.status
        if(scenarioStatus === 'FAILED') {
            driver.takeScreenshot().then(
                (image) => {
                    this.attach(image, 'image/png')
                    fs.mkdirSync(env('SCREENSHOT_PATH'))
                    fs.writeFileSync(`${env('SCREENSHOT_PATH')}${scenario.pickle.name}.png`, image, "base64")
                }
            )
        }
        await driver.quit()
    }
)

