import { describe, it, expect } from 'vitest'
import { add } from './main'

describe('add', () => {
    it('should return 0 if the input is an empty string', () => {
        expect(add("")).toBe(0)
    })

    it('should return the number itself if the input contains one number', () => {
        expect(add("5")).toBe(5)
    })

    it('should return the sum of two numbers separated by a comma', () => {
        expect(add("1,2")).toBe(3)
    })

    it('should return the sum of multiple numbers separated by commas', () => {
        expect(add("1,2,3,4,5")).toBe(15)
    })

    it('should handle large numbers of inputs correctly', () => {
        const input = Array.from({ length: 100 }, (_, i) => i + 1).join(',')
        const expectedSum = (100 * (100 + 1)) / 2 // Sum of first 100 natural numbers
        expect(add(input)).toBe(expectedSum)
    })

    it('should handle newlines as delimiters in addition to commas', () => {
        expect(add("1\n2,3")).toBe(6)
    })
})