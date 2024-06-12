import { describe, expect, test } from "vitest";
import { getPercent } from "../utils/Utils"

describe("Test function percent", () => {
    test('calculates the correct percentage', () => {
        const result = getPercent(50, 200)
        expect(result).toBe(25.00);
        expect(typeof result).toBe('number');
    });

    test('throws an error if value is not a number', () => {
        expect(() => getPercent('50', 200)).toThrow('Both value and total must be numbers');
        expect(() => getPercent('a', 200)).toThrow('Both value and total must be numbers');
    });

    test('throws an error if total is not a number', () => {
        expect(() => getPercent(50, '200')).toThrow('Both value and total must be numbers');
        expect(() => getPercent(50, 'b')).toThrow('Both value and total must be numbers');
    });

    test('throws an error if total is zero', () => {
        expect(() => getPercent(75, 0)).toThrow('Total must not be zero');
    });

    test('throws an error if result is not a number', () => {
        expect(() => getPercent(null, 100)).toThrow('Both value and total must be numbers');
        expect(() => getPercent(50, null)).toThrow('Both value and total must be numbers');
    });
})