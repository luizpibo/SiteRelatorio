import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
    padding-top: 45px;
    margin: auto 10%;
    justify-content: center;
    align-self: center;
    @media screen and (max-width: 500px){
        margin: auto;
        padding: 15px;
    }
`;

export default Container;