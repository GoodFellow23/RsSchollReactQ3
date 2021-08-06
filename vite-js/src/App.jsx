import { useState } from "react";
import { Form } from "./components/Form/Form";
import { Card } from "./components/Card/Card";

function App() {
  const [formValues, setFormValues] = useState([]);

  return (
    <div className="App">
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </main>
    </div>
  );
}

export default App;
