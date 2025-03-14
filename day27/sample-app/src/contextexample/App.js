
import Grandparent from "./propsdrilling/Grandparent";
import MessageContext from "./context/MessageContext";
function App() {

  const message = "hello family how are you";

  return(
    <MessageContext.Provider value={message}>
      <Grandparent/>
       
    </MessageContext.Provider>
  )

}

export default App