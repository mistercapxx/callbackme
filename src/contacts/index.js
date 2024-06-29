import React, { useCallback, useContext, useState } from "react";
import stylesCenter from "./index.module.css";
import ContactItem from "./ContactItem";
import { ContactContext } from "../App";


const Contacts = () => {

  ///move to Provider
  // const [contacts,setContacts] = useState([{id:0}]);

  ///move to Provider
  // const addContact = () => {
  //   setContacts([...contacts, {id:contacts.length}]);
  // };
  //move to Provider
  // const removeContact =(id) => {
  //   setContacts(contacts.filter(contact=>contact.id !== id));
  // }

  // NOTE: 'teach' the button to add new contact info
  // NOTE: and render an array of ContactItem components
  const {contacts,addContact,removeContact,updateType} = useContext(ContactContext);

  const memoUpdateType = useCallback(
    (id,type)=>
  {
    updateType(id,type);
  },[updateType]);
  return (
    <>
      <div className={stylesCenter.channels}>   
      {contacts.map((contact,index) => (
 <ContactItem   
 index={index}
 key={contact.id}   
 id={contact.id}                     
removeContact={()=>removeContact(contact.id)}   /// ремув справа пришел от Контекста, а левый это пропс для КонтактАйтем
memoiz={memoUpdateType}
/> 
      ))}     
               
      </div>
      <div>
        <button
          className={stylesCenter.addButton}
          data-testid="add-button "
          onClick={addContact}          
        >
          <img src="plus.svg" alt="plus logo" />
          <span className={stylesCenter.addButtonText}>
            Додати канал зв'язку
          </span>
        </button>
      </div>
    </>
  );
};

export default Contacts;