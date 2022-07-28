import dotenv from 'dotenv'
import {env} from './env/parseEnv'

dotenv.config({path: env('COMMON_CONFIG_FILE')})


const common = './src/features/**/*.feature \
          --require-module ts-node/register \
          --require ./src/step-definitions/**/**/*.ts \
          -f json:./reports/report.json \
          --format progress-bar '


const dev = `${common} --tags '@dev'`
const smoke = `${common} --tags '@smoke'`
console.log(`🥒✨🥒✨🥒✨🥒✨🥒✨🥒✨`)

export {dev, smoke}
