import { describe, expect, test } from "vitest";
import { isToday  } from "../utils/Utils"

describe("Test function is today", () => {
    test('should return true for today\'s date', () => {
        const now = new Date();
        expect(isToday(now)).toBe(true);
    });

    test('should return true for today\'s date', () => {
        expect(isToday('2024-06-17')).toBe(true);
    });

    test('should return false for a date in the past', () => {
        const pastDate = new Date('2022-01-01');
        expect(isToday(pastDate)).toBe(false);
    });

    test('should return false for a date in the future', () => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 1);
        expect(isToday(futureDate)).toBe(false);
    });

    test('should throw an error for an invalid date string', () => {
        expect(() => {
            isToday('invalid-date-string');
        }).toThrow('Invalid date');
    });

    test('should throw an error for an invalid date object', () => {
        expect(() => {
            isToday({});
        }).toThrow('Invalid date');
    });

    test('should throw an error for null input', () => {
        expect(() => {
            isToday(null);
        }).toThrow('Invalid date');
    });

    test('should throw an error for undefined input', () => {
        expect(() => {
            isToday(undefined);
        }).toThrow('Invalid date');
    });

    test('should throw an error for number input', () => {
        expect(() => {
            isToday(15);
        }).toThrow('Invalid date');
    });
});