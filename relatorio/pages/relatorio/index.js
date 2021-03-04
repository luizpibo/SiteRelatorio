import React from 'react';
import { ThemeProvider } from 'styled-components';
import RelScreen from '../../src/components/PageBackground';
import db from '../../db.json';

export default function RelatorioFinanc({qtde}){
    return (
        <ThemeProvider theme={db.theme}>
            <RelScreen>
                {qtde}
            </RelScreen>
        </ThemeProvider>
    )
}