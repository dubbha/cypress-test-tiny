Cypress.on('test:after:run', (test) => {
  if (test.state === 'failed') {
    throw new Error('I am throwing')
  }
})

// Originally this was adding screenshots to mochawesome reports for the failed tests
// In my case it throws because it was still trying to read env.RETRIES from cypress.json,
// while env.RETRIES has been replaced with retries in v5, but it could throw for any reason.
// Wrapping it in a simple try/catch does help.