import styled from 'styled-components'
import PropTypes from 'prop-types';

const Button = styled.button`
    background-color: #979797;
    border-radius: 3px;
    width: 100%;
    padding: 10px 16px;

    &:focus{
        opacity: .5;
    }

    &:disable {
        background-color: #979797;
        cursor: not-allowed;
    }
    /*
    &:hover {
        background-color: khaki;
    }
    */
`;

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
}

export default Button;