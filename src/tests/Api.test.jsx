import { describe, it, expect, vi } from 'vitest';
import { getProducts, getProduct } from '../service/Api';
import { productsData, productData } from '../constant';

describe('API functions', () => {
    it('should fetch products from the real API', async () => {
        const result = await getProducts();
        expect(Array.isArray(result)).toBe(true);
        expect(Array.isArray(productsData)).toBe(true);
        expect(result).toHaveLength(20);
        expect(productsData).toHaveLength(20);
        expect(result).toEqual(productsData);
    });

    it('should fetch a single product from the real API', async () => {
        const result = await getProduct(2);
        expect(typeof productData).toEqual('object');
        expect(typeof result).toEqual('object');
        expect(result).toEqual(productData);
    });
});
