import React from 'react'
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const override = css`
    position:absolute;
    top: 45%;
    left: 50%;
`;

const color= 'rgba(200,90,250,1)';
export default function Spinner(){
    return (
        <div className="sweet-loading">
            <ClimbingBoxLoader
                loading={true}
                css={override}
                size={10}
                color={color}
                />
        </div>
    )
}
