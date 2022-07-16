import React from "react"
import styled from "styled-components"

const ProgressBarPoint = styled.div`
	border-radius: 50%;
    width: 30px;
    justify-content: center;
    height: 25px;
    display: flex;
	align-items: center;
	z-index:1;
    background-color: #fff;
    border: ${props => props.isActive ? '3px solid rgb(52, 152, 219)' : '3px solid #e0e0e0'};
	transition: 0.4s ease;
`

const ProgressBarWrapper = styled.div`
	&:before {
		content: "";
		width: 100%;
		height: 5px;
		margin: 3% 0 0 0;
		background-color: rgb(224, 224, 224);
		position: absolute;
	}

	width:  ${props => props.width};
	display: flex;
	margin-bottom: 20px;
	justify-content: space-between;
	position: relative;
`

const Progress = styled.div`
	width: ${props => props.width};
	background-color: rgb(52, 152, 219);
	position: absolute;
	height: 5px;
    margin: 3% 0 0 0;
	transition: width 0.4s;
` 

export function ProgressBar(props) {
	const points = new Array(props.points).fill(0).map((val, index) => 
		<ProgressBarPoint key={index} isActive={index<=props.current}>{index + 1}</ProgressBarPoint>
	)

	return <ProgressBarWrapper width={(props.points * 100) + 'px'}>
		<Progress width={((props.current/(props.points - 1)) * 100) + '%'}></Progress>
		{points}
	</ProgressBarWrapper>
}