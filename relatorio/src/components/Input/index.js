import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width: initial;
    padding: 10px;
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

export default function Input({ tipo, onChange, placeholder, ...props}){
    return(
        <>
            <br/>
            <InputBase
                type={tipo}
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        </>
    );
}

Input.defaultProps = {
    value: '',
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
};