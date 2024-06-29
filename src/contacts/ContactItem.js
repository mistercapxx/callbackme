import React, { useCallback, useContext } from 'react'
import { IconButton } from "@mui/material";
import stylescenter from "./ContactItem.module.css";
import { ContactContext } from '../App';

const options = [
  { value: "none", label: "" },
  { value: "viber", label: "Viber" },
  { value: "telegram", label: "Telegram" },
  { value: "messenger", label: "Messenger" },
  { value: "sms", label: "SMS" },
];

const ContactItem = ({id,index,removeContact,memoiz}) => {

  // NOTE: This component should take additional props 
  // NOTE: and use them to manage state

///не нужен изза колбека
  // const {updateType} =useContext(ContactContext);

  ///в lastchannel постоянно записываться будет чтото если мы будем кликать по разным элементам ContactItem из массива contacts. За счет id которое есть у каждого элемента, кликая по какомуто из них, передается в updateType свой айди
  ///за счет onchange вызова можно постоянно вызывать updateType

  // const handleSelectChange = (e) => {
  //   updateType(id,e.target.value);
  // }
  const handleSelectChange = useCallback(
    (e) => {
      memoiz(id,e.target.value) 
    },
    [id,memoiz]
  );

  console.log("child render",index)

 
  return (
    <div className={stylescenter.fullChannelControll}>
      <div className={stylescenter.channelAndChannel} >
        <p className={stylescenter.channelOfConntection}>
          Канал зв'язку
        </p>
        <select
          className={stylescenter.selecterOptions}
          name="optionSelected"   
          onChange={handleSelectChange}  
       
        >
          {options.map((el) => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </div>
      <div className={stylescenter.detailsAndInputAndDelete}>
        <p className={stylescenter.channelOfConntection}>
          Деталі
        </p>
        <textarea
          data-testid="details"
          maxLength="100"
          rows="2"          
          className={stylescenter.detailsChannelInput}          
          placeholder="введіть телефон або @username"
        />
        <div className={stylescenter.removeButtons}>

            <span>
              <IconButton onClick={removeContact}>
                <img src="bin.svg" alt="bin logo" />
                <span className={stylescenter.removeButtonText}>
                  Видалити канал
                </span>
              </IconButton>
            </span>

        </div>
      </div>
    </div>
  )
}

export default ContactItem