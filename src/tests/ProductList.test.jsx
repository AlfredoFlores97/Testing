import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import ProductList from '../pages/ProductList';

describe('ProductList', () => {

    it('renders product list', async () => {
        render(<ProductList />);
        await waitFor(() => {
            const items = screen.getAllByRole('listitem');
            expect(items).toHaveLength(20);
            expect(items[0]).toHaveTextContent('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
            expect(items[1]).toHaveTextContent('Mens Casual Premium Slim Fit T-Shirts');
        });
    });
});