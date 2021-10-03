// import React from 'react';
// import { observable, action, makeObservable} from "mobx";

class ContactsStore
{
    // All contacts of phone
    allContacts = [];

    // all contacts added to new list 
    contacts = [];

    // editableContacts for editing contacts after create it
    editableContacts = [];

    // getEditableContacts(contacts) {

    // };


    addAllContacts(contact) {
        this.allContacts.push(contact)
    
    }

    addContact(contact) {
        this.contacts.push(contact)
    }
    
    sortAllContacts() {
        this.allContacts.sort((a,b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
    }


    sortContacts() {        
        this.contacts.sort((a,b) => a.givenName.toLowerCase() > b.givenName.toLowerCase());
    }


    //not only look givenName !!!
    removeContact(removedContact) {
        console.log("removed Contact: " + removedContact)
        this.contacts = this.contacts.filter(contact => 
            (contact.phoneNumber !== removedContact.phoneNumber)
            );
        // console.log("contacts: " + this.contacts)
    }
    
    emptyPressedContacts() {
        this.allContacts.map(contact => {
            if(contact.pressed == true) {
                contact.pressed = false
            }
        })
    }

    emptyList() {
        this.contacts = [];
    }

    emptyAllContacts() {
        this.allContacts = [];
    }

    getLength() {
        return this.contacts.length;
    }
    getContacts() {
        return this.contacts;
    }
    getAllContacts() {
        return this.allContacts;
    }

    setContactsToEmpty() {
        this.contacts = [];
    }
    
    search(text) {
        return this.allContacts.filter(item => {
            const itemGivenName = item.givenName.toLowerCase().substring(0,text.length);
            const itemFamilyName = item.familyName.toLowerCase().substring(0,text.length);
            
            const textData = text.toLowerCase();
        
            return itemGivenName.includes(textData,0) || itemFamilyName.includes(textData,0);
        })
        
    }

}
export const contactsStore = new ContactsStore();