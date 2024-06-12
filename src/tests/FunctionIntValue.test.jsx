import { describe, expect, test } from "vitest";
import { typeProject } from "../utils/Utils"

describe("Test function type project", () => {
    test('return the correct project', () => {
        let result = typeProject(0)
        expect(typeof result).toBe('string');
        expect(result).toBe('Consumo');
        result = typeProject(1)
        expect(typeof result).toBe('string');
        expect(result).toBe('Autoconsumo');
        result = typeProject(2)
        expect(typeof result).toBe('string');
        expect(result).toBe('Distribución');
        result = typeProject(3)
        expect(typeof result).toBe('string');
        expect(result).toBe('Producción');
    });

    test('return not define project', () => {
        let result = typeProject(5)
        expect(typeof result).toBe('string');
        expect(result).toBe('No definido');
        result = typeProject()
        expect(typeof result).toBe('string');
        expect(result).toBe('No definido');
        result = typeProject('2')
        expect(typeof result).toBe('string');
        expect(result).toBe('No definido');
        result = typeProject('hola')
        expect(typeof result).toBe('string');
        expect(result).toBe('No definido');
        result = typeProject(-2)
        expect(typeof result).toBe('string');
        expect(result).toBe('No definido');
    });
})