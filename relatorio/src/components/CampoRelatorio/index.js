import styled from 'styled-components';
import Input from '../Input';

const CampoRelatorioBase = styled.div`
    width: 100px;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;
    ::placeholder {
        color: ${({ theme }) => theme.colors.contrastText}DD;
        opacity: 1;
    }
`;

export default function CampoRelatorio(){
    return(
        <span>
            Descricao
            <Input
                type="string"
                name="descricao"
            />
            Valor
            <Input
                type="number"
                name="valorDaNota"
            />
            NFC
            <Input
                type="number"
                name="NFC"
            />
        </span>
    )
}
