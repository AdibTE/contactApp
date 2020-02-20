import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../Types';

// import PropTypes from 'prop-types'

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '111-111-111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Marry Johnson',
                email: 'Marry@gmail.com',
                phone: '222-222-222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Sarah Johnson',
                email: 'Sarah@gmail.com',
                phone: '333-444-555',
                type: 'professional'
            }
        ],
        current: null,
        filtered: null
    };

    const [ state, dispatch ] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = (contact) => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete Contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // Set Current Contact
    const setCurrent = (contact) => {
        dispatch({type:SET_CURRENT , payload: contact})
    };

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({type:CLEAR_CURRENT})
    };

    // Update Contact
    const updateContact = (contact)=>{
        dispatch({type:UPDATE_CONTACT , payload:contact})
    }

    // Filter Contacts
    const filterContact = (text)=>{
        dispatch({type:FILTER_CONTACT, payload: text})
    }

    // Clear Filter
    const clearFilter = ()=>{
        dispatch({type:CLEAR_FILTER})
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContact,
                clearFilter
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

// ContactState.propTypes = {

// }

export default ContactState;
