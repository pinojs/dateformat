'use strict'

const { describe, it } = require('node:test')
const standardMasks = require('../lib/standard-masks')

describe('standardMasks', () => {
    it('should have a default mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.default, 'function')
    })
    
    it('should have a shortDate mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.shortDate, 'function')
    })
    
    it('should have a paddedShortDate mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.paddedShortDate, 'function')
    })
    
    it('should have a mediumDate mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.mediumDate, 'function')
    })
    
    it('should have a longDate mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.longDate, 'function')
    })
    
    it('should have a fullDate mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.fullDate, 'function')
    })
    
    it('should have an isoDate mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.isoDate, 'function')
    })

    it('should have a shortTime mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.shortTime, 'function')
    })
    it('should have a mediumTime mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.mediumTime, 'function')
    })
    it('should have a longTime mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.longTime, 'function')
    })
    it('should have an isoTime mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.isoTime, 'function')
    })
    it('should have an isoDateTime mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.isoDateTime, 'function')
    })
    it('should have an isoUtcDateTime mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.isoUtcDateTime, 'function')
    })
    it('should have an expiresHeaderFormat mask', (t) => {
        t.assert.strictEqual(typeof standardMasks.standardMasks.expiresHeaderFormat, 'function')
    })
    it('should have standardMaskNames defined', (t) => {
        t.assert.ok(Array.isArray(standardMasks.standardMaskNames))
        t.assert.ok(standardMasks.standardMaskNames.includes('default'))
        t.assert.ok(standardMasks.standardMaskNames.includes('shortDate'))
        t.assert.ok(standardMasks.standardMaskNames.includes('paddedShortDate'))
        t.assert.ok(standardMasks.standardMaskNames.includes('mediumDate'))
        t.assert.ok(standardMasks.standardMaskNames.includes('longDate'))
        t.assert.ok(standardMasks.standardMaskNames.includes('fullDate'))
        t.assert.ok(standardMasks.standardMaskNames.includes('isoDate'))
        t.assert.ok(standardMasks.standardMaskNames.includes('shortTime'))
        t.assert.ok(standardMasks.standardMaskNames.includes('mediumTime'))
        t.assert.ok(standardMasks.standardMaskNames.includes('longTime'))
        t.assert.ok(standardMasks.standardMaskNames.includes('isoTime'))
        t.assert.ok(standardMasks.standardMaskNames.includes('isoDateTime'))
        t.assert.ok(standardMasks.standardMaskNames.includes('isoUtcDateTime'))
        t.assert.ok(standardMasks.standardMaskNames.includes('expiresHeaderFormat'))
    })
})