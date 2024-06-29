import React, { useCallback, useState } from "react";
import './App.css';
import Contacts from './contacts';
import Logo from "./Logo";

export const ContactContext = React.createContext();


function App() {

// NOTE: Use context provider in this component 
 const [contacts,setContacts] = useState([{id:0, type: ""}]);
 const [lastChannel,setLastChannel] =useState('');

 const addContact = () => {
  ///перерендр всего массива и вконце добавили новый обьект
  const newContacts = [...contacts, {id: contacts.length, type: ''}];
  setContacts(newContacts);

};
const removeContact =(id) => {
  setContacts(contacts.filter(contact=>contact.id !== id));
}


  // const updateType = (id, type) => {
  //   ////перерендер массива только вконце в одном обьекте будет новый тип
  //   setContacts(contacts.map(contact => {
  //     if (contact.id === id) {
  //       return { ...contact, type };
  //     }
  //     return contact;
  //   }));
  //   setLastChannel(type);
  // };

  ///для колбека 
  const updateType = useCallback((id,type) => {
    setContacts(contacts.map(contact => {
      if(contact.id === id) {
        return {...contact,type};
      }
      return contact;
    }));
    setLastChannel(type);
  },[contacts]);

  ///	1.	map: contacts.map(contact => ...)
// 	•	Метод map создает новый массив, вызывая переданную функцию для каждого элемента массива contacts.
// 	2.	Параметр функции: contact
// 	•	contact представляет текущий элемент массива contacts.
// 	3.	Тернарный оператор: contact.id === id ? { ...contact, type } : contact
// 	•	Тернарный оператор проверяет условие и возвращает одно из двух значений в зависимости от того, истинно условие или ложно.
// };

  return (
    <ContactContext.Provider value={{contacts,addContact,removeContact,lastChannel,updateType}}>
    <div className="grid-container">
      <div>
        <Contacts/>
      </div>
      <div>       
        <Logo />       
      </div>
    </div>
    </ContactContext.Provider>
  );

  }
export default App;
