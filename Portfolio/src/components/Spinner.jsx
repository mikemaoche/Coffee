import React from 'react'
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import PulseLoader from "react-spinners/PulseLoader";
import { Header } from 'semantic-ui-react';


const overrideClimbLoader = css`
    position:absolute;
    top: 45%;
    left: 50%;
`;

const overridePulseLoader = css `
    position:absolute;
    bottom: 2.1%;
    right: 1%;
`;

const color= 'rgba(200,90,250,1)';
export default function Spinner(){
    return (
        <div>
            <Header as='h1' 
            style={{position:'absolute', fontSize:28, bottom:0, right:'4%',fontFamily: `'Modak', cursive`}} 
            color='purple'>
                LOADING
            </Header>
            <PulseLoader 
                loading={true}
                css={overridePulseLoader}
                size={10}
                color={color}
            />
            <ClimbingBoxLoader
                loading={true}
                css={overrideClimbLoader}
                size={10}
                color={color}
                />
        </div>
    )
}
