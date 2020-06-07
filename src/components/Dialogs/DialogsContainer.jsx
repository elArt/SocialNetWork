import Dialogs from "./Dialogs";
import {
  updateMessageActionCreator,
  sendMassageActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";



const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
    addLetters: (inputText) => dispatch(updateMessageActionCreator(inputText)),
    addNewMassage: () => dispatch(sendMassageActionCreator()),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
