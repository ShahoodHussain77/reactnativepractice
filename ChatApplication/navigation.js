import {StackNavigator} from "react-navigation";
import App from './App';

import NewMessage from "./newMessage"




const navigator = StackNavigator({
    // MainScreen:{
    //     screen:App,
    // },
    NewMessageScreen :{
        screen : NewMessage
    }
})

export default navigator