import Dialogs from "./Dialogs";
import {
  updateMessageActionCreator,
  sendMassageActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";



const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = (dispatch) => ({
    addLetters: (inputText) => dispatch(updateMessageActionCreator(inputText)),
    addNewMassage: () => dispatch(sendMassageActionCreator()),
});


export default compose(connect(mapStateToProps, mapDispatchToProps), (withAuthRedirect))(Dialogs)