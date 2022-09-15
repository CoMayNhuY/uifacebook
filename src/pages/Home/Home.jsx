import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import Body from '../../pages/components/Body.jsx';

const StyleHome = styled.div``;
const StyleHeader = styled.div`
    position: relative;
    background-color: #1976d2;
    width: 100%;
    height: 60px;
`;
const StyleBody = styled.div`
    width: 100%;
    height: 1000px;
    background-color: white;
`;
function Home() {
    return (
        <StyleHome>
            {/* Header */}
            <StyleHeader>
                <Header />
            </StyleHeader>

            {/* Body */}
            <StyleBody>
                <Body />
            </StyleBody>
        </StyleHome>
    );
}

export default Home;
