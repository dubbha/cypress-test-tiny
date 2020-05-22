#!/usr/bin/env node

const cypress = require('cypress')

main()
// process.exit()  // this would "help" but should not be needed

async function main() {
    const result = await cypress.run()

    console.log(result)
    console.log(process._getActiveHandles())
    console.log(process._getActiveRequests())
}
