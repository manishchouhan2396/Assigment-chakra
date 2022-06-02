import "./App.css";
import Form from "./components/Form";
import CreditCard from "./components/CreditCard";
import { Box} from "@chakra-ui/react";
import React from 'react';

function App() {

  const [form, setForm] = React.useState({
    name:"Manish Singh Chouhan",
    cardNum:"3333 1111 7777 0000",
    month:"06",
    year:"23",
    cvv:"4567"
  });
  const [cardDetails, setCardDetails] = React.useState([]);
  return (
    <Box
      margin="auto"
      display="flex"
      justifyContent="space-evenly"
      boxSizing="border-box"
      alignItems="center"
      height="100vh"
    >
      <CreditCard form={form} />
      <Form form={form} setForm={setForm} cardDetails={cardDetails} setCardDetails={setCardDetails}/>
    </Box>
  );
}

export default App;
