import { Text, View, StyleSheet,TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {Button, ButtonTray} from '../UI/Button';


const Form = ({children, onSubmit, onCancel, submitLabel, submitIcon}) => {
    return (
        <View style={styles.formContainer}>
            <ScrollView style={styles.formItem}>
                {children}
            </ScrollView>

            <ButtonTray>
                <Button label={submitLabel} icon={submitIcon} onClick={onSubmit}/>
                <Button label='Cancel' onClick={onCancel}/>
            </ButtonTray>
        </View>
    )  
}

const InputText = ({label, value, onChange}) => {
    return(
        <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>
            <TextInput 
                value={value} 
                onChangeText={onChange}
                style={styles.itemTextInput}
            />
        </View>

    );
}

const InputSelect = ({label, prompt, options, value, onChange}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.itemLabel}>{label}</Text>
            <Picker
                mode='dropdown'
                selectedValue={value}
                onValueChange={onChange}
                style={styles.itemPickerStyle}
            >
                <Picker.Item value={null} label={prompt} style={styles.itemPickerPromptStyle} />
                {
                    options.map((option, index) => (
                    <Picker.Item key={index} value={option.value} label={option.label}/>
                    ))
                }

            </Picker>
        </View>

    );
}

Form.InputText = InputText;
Form.InputSelect = InputSelect;


const styles = StyleSheet.create({
    formContainer: {
        gap: 10,
        padding: 10,
    },
    formItem: {
        gap: 5,
    },
    itemLabel: {
      color: 'grey',
      fontSize: 16,
      marginBottom: 5,
    },
    itemTextInput: {
      height: 50,
      paddingLeft: 10,
      fontSize: 16,
      backgroundColor: 'white',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: 'lightgray',
    },
    itemPickerStyle: {
        height: 50,
        backgroundColor: 'whitesmoke'
    },
    itemPickerPromptStyle: {
        color: 'gray',
    },
  });

export default Form