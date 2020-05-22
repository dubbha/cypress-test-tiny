#!/usr/bin/env node

const cypress = require('cypress')

main()
// exits cleanly in 3.4.1

async function main() {
    const result = await cypress.run()

    console.log(result)
    console.log(process._getActiveHandles())
    console.log(process._getActiveRequests())
}
