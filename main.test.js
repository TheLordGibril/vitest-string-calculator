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

    it('should support custom delimiters specified in the format "//[delimiter]\\n[numbers]"', () => {
        expect(add("//;\n1;2")).toBe(3)
        expect(add("//|\n4|5|6")).toBe(15)
        expect(add("//#\n7#8#9")).toBe(24)
        expect(add("//@\n10@20@30")).toBe(60)
    })

    it('should throw an error if brackets are used as delimiters', () => {
        expect(() => add("//[\n1[2")).toThrow('Invalid delimiter: brackets are not allowed')
    })

    it('should throw an error if the input contains negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow('Negatives not allowed. [-2]')
        expect(() => add("-1,-2,-3")).toThrow('Negatives not allowed. [-1,-2,-3]')
    })
})