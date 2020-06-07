const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" }
  ],
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:{
      return {
        ...state,
        newMessageBody: action.body,
      };
    };
    case SEND_MESSAGE:{
      return {...state,
        messages: [
          ...state.messages, 
          {
            id: Date.now(),
            message: state.newMessageBody
          }
      ],
      newMessageBody: "",
      };
    };
    default:
      return state;
  }
};

export const updateMessageActionCreator = massage => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: massage
});
export const sendMassageActionCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
