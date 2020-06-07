import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateMessageActionCreator,
  sendMassageActionCreator,
} from "./../../redux/dialogs-reducer";

const Dialogs = (props) => {
  
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newTextMassage = React.createRef();

  const toAddNewMassage = () => {
    props.addNewMassage();
  };

  const toAddLetters = (e) => {
    props.addLetters(e.target.value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          ref={newTextMassage}
          value={props.dialogsPage.newMessageBody}
          onChange={toAddLetters}
        ></textarea>
        <button onClick={toAddNewMassage}>add massage</button>
      </div>
    </div>
  );
};

export default Dialogs;
