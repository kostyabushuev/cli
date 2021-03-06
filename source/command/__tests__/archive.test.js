const archive = require('../archive')

it('Must be function', () => {
  expect(typeof archive).toBe('function')
})

it('Messages must provided "start" and "end" messages', () => {
  const { start, end } = archive.messages({}, { output: '' })

  expect(typeof start).toBe('string')
  expect(typeof end).toBe('string')
})
