import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../Types';

export default (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [ ...state.contacts, action.payload ]
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(
                    (contact) => (contact.id === action.payload.id ? action.payload : contact)
                ),
                current: null
            };
        case FILTER_CONTACT:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`,'gi');
                    return contact.name.match(regex) || contact.email.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        default:
            return state;
    }
};
