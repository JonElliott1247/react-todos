import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import clonedeep from 'lodash/cloneDeep';
import './App.css';
import ToDos from './ToDos/ToDos.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const toDosGenerator = numberOfToDos => {
  const toDos = [];
  for (let i = 0; i < numberOfToDos; i++) {
    const id = uuidv4();
    toDos.push({ text: faker.lorem.sentence(), key: id, id, done: false })
  }
  return toDos;
}

function App() {
  const [toDos, updateToDos] = useState(toDosGenerator(20));

  const checkItem = (id) => {
    const copyOfToDos = clonedeep(toDos);
    const index = copyOfToDos.findIndex(item => item.id === id);
    copyOfToDos[index].done = !copyOfToDos[index].done;
    updateToDos(copyOfToDos);
  }

  return (
    <div className="App">
      <ToDos toDos={toDos} checkItem={checkItem} />
    </div>
  );
}

export default App;
