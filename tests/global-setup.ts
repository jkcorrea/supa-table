require('dotenv').config()
// eslint-disable-next-line import/first
import { FullConfig } from '@playwright/test'

async function globalSetup(config: FullConfig) {}

export default globalSetup
