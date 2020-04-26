import Map, {Marker} from "react-native-maps";
import React, {Component} from "react"
import {View, Text, TouchableOpacity} from "react-native"


export default class App extends Component {
	state = {display: false};
	render(){
		let {display} = this.state;

		return (
			<View style={{flex: 1}}>
				<View style={[{ flex: 1}, display ? {} : {display: "none"}]}>


					<Map style={{flex: 1}} >
						<Marker coordinate={{latitude: 0, longitude: 0}}>
							<View style={{backgroundColor: "red", width: 20, height: 20}}/>
						</Marker>
					</Map>
				</View>

				<TouchableOpacity style={{padding: 10, position: "absolute", bottom: 0, right: 0, backgroundColor: "white"}} onPress={() => this.setState({display: !display})}>
					<Text style={{color: "blue"}}>Toggle</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
