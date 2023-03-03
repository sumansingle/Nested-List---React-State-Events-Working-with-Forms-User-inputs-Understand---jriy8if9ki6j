
import React, { useState,useReducer } from "react";
import "./../styles/App.css";

const states = [{
		name : "Madhya Pradesh",
		cities :[{
			name : "Indore",
			towns :[{
				name : "Mhow"
			},{
				name : "Dewas"
			}]
		},{
			name : "Bhopal",
			towns :[{
				name : "Manit"
			},{
				name: "Berasia"
			}]
		},{
			name : "Gwalior",
			towns :[{
				name : "Ajaypur"
			}]
		}]
	},{
		name : "Jharkhand",
		cities :[{
			name : "Dhanbad",
			towns :[{
				name : "IIT(ISM) Dhanbad"
			},{
				name : "Hirapur"
			}]
		},{
			name : "Wasseypur",
			towns :[{
				name : "Sardar khan's"
			},{
				name : "Faizal khan's"
			}]
		},{
			name : "Mirzapur",
			towns :[{
				name : "Kaleen bhaiya's"
			},{
				name : "Guddu bhaiya's"
			}]
		}]
	},{
		name : "Assam",
		cities :[{
			name : "Guwhati",
			towns :[{
				name : "Amin"
			},{
				name : "Jalah"
			}]
		},{
			name : "Jungle1",
			towns :[{
				name : "Tiger found at IIT Guwahati"
			},{
				name : "Leopard found in IIT Guwahati"
			}]
		},{
			name : "Tezpur",
			towns :[{
				name : "Dibrugarh"
			},{
				name : "Silchar"
			}]
		}]
	},{
		name : "Bihar",
		cities :[{
			name : "Patna",
			towns :[{
				name : "Sonpur"
			},{
				name : "Maner"
			}]
		},{
			name : "Gaya",
			towns :[{
				name : "Bakraur"
			},{
				name : "Barachatti"
			}]	
		},{
			name : "Darbhanga",
			towns :[{
				name : "Singhwara"
			},{
				name : "Jale"
			}]
		}]
	}];

function Towns(props)
{
	return(
		<div>
			<ul>
				{states[props.ind1].cities[props.ind2].towns.map((item,index)=>(<div key={index}><li id={"town"+(index+1)}>{item.name}</li></div>))}
			</ul>
		</div>
	);
}

function Cities(props)
{
	const [town, setTown] = useReducer((town, index) => {
    	let t = [...town];
    	t[index] = !t[index];
    	return t;
  	}, [false,false,false,false,false,false]);
	return(
		<div>
			<ul>
				{states[props.ind].cities.map((item,index)=>(<div key={index}><li id={"city"+(index+1)} onClick={()=>{setTown(index)}}>{item.name}</li>{(town[index])?(<Towns ind1={props.ind} ind2={index}/>):(<></>)}</div>))}
			</ul>
		</div>
	);
}

function States(props)
{
  	const [city, setCity] = useReducer((city, index) => {
    	let t = [...city];
    	t[index] = !t[index];
    	return t;
  	}, [false,false,false,false,false,false]);
	return(
		<div>
			{states.map((item,index)=>(<div key={index}><li id={"state"+(index+1)} onClick={()=>{setCity(index)}}>{item.name}</li>{(city[index])?(<Cities ind={index}/>):(<></>)}</div>))}
		</div>
	);
}

function App() 
{
  	
	return (
	<div id="main">
		<ul>
			<States />
		</ul>
	</div>
	);
}


export default App;
