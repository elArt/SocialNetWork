import Dialogs from "./Dialogs";
import {
  updateMessageActionCreator,
  sendMassageActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";



const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = (dispatch) => ({
    addLetters: (inputText) => dispatch(updateMessageActionCreator(inputText)),
    addNewMassage: () => dispatch(sendMassageActionCreator()),
});
const AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;
