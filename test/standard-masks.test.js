'use strict'

const { describe, it } = require('node:test')
const { standardMasks, standardMaskNames } = require('../index.js')

describe('standardMasks', () => {
  it('should have a default mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.default, 'string')
  })

  it('should have a shortDate mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.shortDate, 'string')
  })

  it('should have a paddedShortDate mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.paddedShortDate, 'string')
  })

  it('should have a mediumDate mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.mediumDate, 'string')
  })

  it('should have a longDate mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.longDate, 'string')
  })

  it('should have a fullDate mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.fullDate, 'string')
  })

  it('should have an isoDate mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.isoDate, 'string')
  })

  it('should have a shortTime mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.shortTime, 'string')
  })
  it('should have a mediumTime mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.mediumTime, 'string')
  })
  it('should have a longTime mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.longTime, 'string')
  })
  it('should have an isoTime mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.isoTime, 'string')
  })
  it('should have an isoDateTime mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.isoDateTime, 'string')
  })
  it('should have an isoUtcDateTime mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.isoUtcDateTime, 'string')
  })
  it('should have an expiresHeaderFormat mask', (t) => {
    t.assert.strictEqual(typeof standardMasks.expiresHeaderFormat, 'string')
  })
  it('should have standardMaskNames defined', (t) => {
    t.assert.ok(Array.isArray(standardMaskNames))
    t.assert.ok(standardMaskNames.includes('default'))
    t.assert.ok(standardMaskNames.includes('shortDate'))
    t.assert.ok(standardMaskNames.includes('paddedShortDate'))
    t.assert.ok(standardMaskNames.includes('mediumDate'))
    t.assert.ok(standardMaskNames.includes('longDate'))
    t.assert.ok(standardMaskNames.includes('fullDate'))
    t.assert.ok(standardMaskNames.includes('isoDate'))
    t.assert.ok(standardMaskNames.includes('shortTime'))
    t.assert.ok(standardMaskNames.includes('mediumTime'))
    t.assert.ok(standardMaskNames.includes('longTime'))
    t.assert.ok(standardMaskNames.includes('isoTime'))
    t.assert.ok(standardMaskNames.includes('isoDateTime'))
    t.assert.ok(standardMaskNames.includes('isoUtcDateTime'))
    t.assert.ok(standardMaskNames.includes('expiresHeaderFormat'))
  })
})
