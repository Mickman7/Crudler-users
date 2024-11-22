import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Icons from '../components/UI/Icons';
import { useState } from 'react';
import Form from '../components/UI/Form';


const defaultUsers = {
    UserID: null,
    UserFirstname: null,
    UserLastname: null,
    UserEmail: null,
    UserImageURL: null,
    UserType: null,
    UserYear: null,
  };

const UserForm = ({originalUsers, onSubmit, onCancel}) => {

    defaultUsers.UserImageURL = 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg';
    defaultUsers.UserID = Math.floor(100000 + Math.random() * 900000);

    const types = [
      {value: 'Staff', label: 'Staff'},
      {value: 'Student', label: 'Student'},
    ];

    const years = [
      {value: '2022-23', label: '2022-23'},
      {value: '2023-24', label: '2023-24'},
      {value: '2024-25', label: '2024-25'},
    ];

    const [user, setUser] = useState(originalUsers || defaultUsers);

    const handleChange = (field, value) => setUser({...user, [field]: value});
    const handleSubmit = () => onSubmit(user);
    

    const submitLabel = originalUsers ? 'Modify' : 'Add';
    const submitIcon = originalUsers ? <Icons.Edit/> : <Icons.Add />

  return (
    
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >

        <Form.InputText 
        label='First Name'
        value={user.UserFirstname}
        onChange={(value) => handleChange('UserFirstname', value)}
        />

        <Form.InputText 
        label='Last Name'
        value={user.UserLastname}
        onChange={(value) => handleChange('UserLastname', value)}
        />

        <Form.InputText 
        label='Email'
        value={user.UserEmail}
        onChange={(value) => handleChange('UserEmail', value)}
        />

        

        <Form.InputSelect
        label='User Type' 
        prompt='Select user type ...'
        options={types}
        value={user.UserType}
        onChange={(value) => handleChange('UserType', value)}
        />

        <Form.InputSelect
        label='User Year' 
        prompt='Select your years of study ...'
        options={years}
        value={user.UserYear}
        onChange={(value) => handleChange('UserYear', value)}
        />

    <Form.InputText 
        label='User image'
        value={user.UserImageURL}
        onChange={(value) => handleChange('UserImageURL', value)}
      />

      

    </Form>
  )
}


const styles = StyleSheet.create({ });

export default UserForm;