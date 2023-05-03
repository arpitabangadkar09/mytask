
import { UPDATE_BP,UPDATE_HR,UPDATE_SBP,UPDATE_DBP,UPDATE_SR, UPDATE_PR ,
    actionType , stateType } from "./storeTypes";

export const initialState: stateType = {

    BP: {value: 0, name: 'Blood Pressure'},
    HR: {value: 0, name: 'Heart Beat'},
    SBP: {value: 0, name: 'Sistolic Blood Pressure'},
    DBP: {value: 0, name: 'Distolic Blood Pressure'},
    PR: {value: 0, name: 'Pulse Rate'},
    SR: {value: 0, name: 'Sugar'}
}


const reducerFunction = (state = initialState, action:actionType ) => {
        switch (action.type)  {
             case UPDATE_BP:
                return {
                          ...state, 
                          BP: { value: action.payload.value, name: state.BP.name}
                        }
                
             case UPDATE_HR:
                 return {
                            ...state, 
                             HR: { value: action.payload.value, name: state.HR.name}
                       }

             case UPDATE_SBP:
                 return {
                           ...state, 
                           SBP: { value: action.payload.value, name: state.SBP.name}
                        }

            case UPDATE_DBP:
                return {
                            ...state, 
                            DBP: { value: action.payload.value, name: state.DBP.name}
                       }

            case UPDATE_PR:
                return {
                          ...state, 
                           PR: { value: action.payload.value, name: state.PR.name}
                       }

            case UPDATE_SR:
                return {
                               ...state, 
                             SR: { value: action.payload.value, name: state.SR.name}
                       }       

             default:
                return( state )
        };

}

export default reducerFunction;