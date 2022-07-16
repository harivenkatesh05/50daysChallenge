import React from "react";
import styled from "styled-components";
import { ProgressBar } from "./progressBar";

const AppContainer = styled.div`
	text-align: center;
` 

const Button = styled.button`
	border-radius: 5px;
	margin: 0px 10px;
	border: 5px;
	padding: 10px 30px;
	color: white;
	cursor: pointer;
	background-color: #3498db
`

const InactiveBtn = styled(Button)`
	background-color: rgb(224, 224, 224);
	cursor: not-allowed;
`

const TOTAL_POINTS = 4;

export class App extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {count: 0};
	}

	handleClick = (step) => {
		this.setState(prevState => ({
			count: prevState.count + step 
		}))
	}
	
	render() {
		let PrevButton, nextButton;

		if(this.state.count === 0) {
			PrevButton = <InactiveBtn>Prev</InactiveBtn>
			nextButton = <Button onClick={() => this.handleClick(1)}>Next</Button>
		}
		else if(this.state.count === TOTAL_POINTS - 1){
			PrevButton = <Button onClick={() => this.handleClick(-1)}>Prev</Button>
			nextButton = <InactiveBtn>Next</InactiveBtn>
		}
		else {
			PrevButton = <Button onClick={() => this.handleClick(-1)}>Prev</Button>
			nextButton = <Button onClick={() => this.handleClick(1)}>Next</Button>	
		}

		return <AppContainer>
			<ProgressBar points={TOTAL_POINTS} current={this.state.count}></ProgressBar>
			{PrevButton}
			{nextButton}
		</AppContainer>
	}
}