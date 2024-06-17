import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import '@testing-library/jest-dom';
import ProductList from '../pages/ProductList';
import {productsData, productData } from '../constant';

describe('ProductList', () => {
    beforeAll(() => {
        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterAll(() => {
        console.log.mockRestore();
    });

    it('renders product list', async () => {
        render(<ProductList />);
        await waitFor(() => {
            const items = screen.getAllByRole('listitem');
            expect(items).toHaveLength(20);
            expect(items[0]).toHaveTextContent('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
            expect(items[1]).toHaveTextContent('Mens Casual Premium Slim Fit T-Shirts');
        });
    });

    it('for each - renders product list', async () => {
        render(<ProductList />);
        await waitFor(() => {
            const items = screen.getAllByRole('listitem');
            expect(items).toHaveLength(20);
            productsData.forEach((product, index) => {
                expect(items[index].title).toBe(product.title)
            })
        });
    });

    it('should fetch and display a single product on button click', async () => {
        render(<ProductList />);
        expect(screen.queryByLabelText('Mens Casual Premium Slim Fit T-Shirts')).not.toBeInTheDocument();

        fireEvent.click(screen.getByText('Click me'));

        await waitFor(() => {
            expect(console.log).toHaveBeenCalledWith({
                "id": 2,
                "title": "Mens Casual Premium Slim Fit T-Shirts ",
                "price": 22.3,
                "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "rating": {
                    "rate": 4.1,
                    "count": 259
                }
            });
            expect(screen.getByLabelText('Mens Casual Premium Slim Fit T-Shirts')).toBeInTheDocument();
        });
    });

    it('Better practice should fetch and display a single product on button click', async () => {
        render(<ProductList />);
        expect(screen.queryByLabelText('Mens Casual Premium Slim Fit T-Shirts')).not.toBeInTheDocument();

        fireEvent.click(screen.getByText('Click me'));

        await waitFor(() => {
            expect(console.log).toHaveBeenCalledWith(productData);
            expect(screen.getByLabelText('Mens Casual Premium Slim Fit T-Shirts')).toBeInTheDocument();
        });
    });
});