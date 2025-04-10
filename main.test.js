import { describe, it, expect } from 'vitest'
import { add } from './main'

describe('add', () => {
    it('should return 0 if the input is an empty string', () => {
        expect(add("")).toBe(0);
    })

    it('should return the number itself if the input contains one number', () => {
        expect(add("5")).toBe(5);
    })

    it('should return the sum of two numbers separated by a comma', () => {
        expect(add("1,2")).toBe(3);
    })

    it('should throw an error if more than 2 numbers are provided', () => {
        expect(() => add("1,2,3")).toThrow('Only up to 2 numbers are allowed');
    })
})