import React, { Component } from 'react';

class HobbyList extends Component{
	render(){
		const hobbies = ["Sleeping", "Eating", "Cuddling"];
		const liStyle = {fontSize: '1.5em'};
		return(
		<ul>
			{hobbies.map((hobby, index) =>{
				return <li key={index} style={liStyle}>{hobby}</li>
			})}
		</ul>
		);
	}
}

export default HobbyList;