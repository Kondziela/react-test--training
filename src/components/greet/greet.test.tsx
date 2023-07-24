import { render, screen } from '@testing-library/react';
import {Greet} from "./greet";

describe('Tests for Greet', () => {

    test('Greet renders correctly', () => {
        render(<Greet/>)
        const helloElement = screen.getByText(/hello/i);
        expect(helloElement).toBeInTheDocument();
    });

    test('Greet renders with name', () => {
        render(<Greet name='Arti'/>)
        const helloElement = screen.getByText(/hello arti/i);
        expect(helloElement).toBeInTheDocument();
    });

})