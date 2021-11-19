import React, { useState } from 'react';
import {View, Text, TextInput, 
        Button, TouchableOpacity, 
        Picker                   } from 'react-native';
import { updateProfile } from '../services/profileService';
import Styles from '../Styles';



export default function Edit(props){
    
    const [age, setAge] = useState(checkAge());
    const [gender, setGender] = useState(checkGender());
    const [about, setAbout] = useState(checkAbout());

    function checkAge(){
        if(props.profile[0].age){
            return props.profile[0].age;
        }
        return 18;
    }

    function checkGender(){
        if(props.profile[0].gender){
            return props.profile[0].gender;
        }
        return 'female'
    }

    function checkAbout(){
        if(props.profile[0].about){
            return props.profile[0].about;
        }
        return '';
    }

    
    const handleAbout = text => {setAbout(text);}

    function handleSubmit(){
        console.log(age)
        console.log(gender)
        console.log(about)
        console.log(props)
        const data = {age: age, gender: gender, about: about};
        updateProfile(data, props.profile[0]._id);
        props.navigation.pop();
        props.navigation.push('Profile');
    }

    return(
        <View>
            <View>
                <Text>Age</Text>
                <Picker
                    age={age}
                    selectedValue={age}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(val, i) => setAge(val)}>

                    <Picker.Item label="18" value="18" />
                    <Picker.Item label="19" value="19" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="21" value="21" />
                    <Picker.Item label="22" value="22" />
                    <Picker.Item label="23" value="23" />
                    <Picker.Item label="24" value="24" />
                    <Picker.Item label="25" value="25" />
                    <Picker.Item label="26" value="26" />
                    <Picker.Item label="27" value="27" />
                    <Picker.Item label="28" value="28" />
                    <Picker.Item label="29" value="29" />

                    <Picker.Item label="30" value="30" />
                    <Picker.Item label="31" value="31" />
                    <Picker.Item label="32" value="32" />
                    <Picker.Item label="33" value="33" />
                    <Picker.Item label="34" value="34" />
                    <Picker.Item label="35" value="35" />
                    <Picker.Item label="36" value="36" />
                    <Picker.Item label="37" value="37" />
                    <Picker.Item label="38" value="38" />
                    <Picker.Item label="39" value="39" />

                    <Picker.Item label="40" value="40" />
                    <Picker.Item label="41" value="41" />
                    <Picker.Item label="42" value="42" />
                    <Picker.Item label="43" value="43" />
                    <Picker.Item label="44" value="44" />
                    <Picker.Item label="45" value="45" />
                    <Picker.Item label="46" value="46" />
                    <Picker.Item label="47" value="47" />
                    <Picker.Item label="48" value="48" />
                    <Picker.Item label="49" value="49" />

                    <Picker.Item label="50" value="50" />
                    <Picker.Item label="51" value="51" />
                    <Picker.Item label="52" value="52" />
                    <Picker.Item label="53" value="53" />
                    <Picker.Item label="54" value="54" />
                    <Picker.Item label="55" value="55" />
                    <Picker.Item label="56" value="56" />
                    <Picker.Item label="57" value="57" />
                    <Picker.Item label="58" value="58" />
                    <Picker.Item label="59" value="59" />

                    <Picker.Item label="60" value="60" />
                    <Picker.Item label="61" value="61" />
                    <Picker.Item label="62" value="62" />
                    <Picker.Item label="63" value="63" />
                    <Picker.Item label="64" value="64" />
                    <Picker.Item label="65" value="65" />
                    <Picker.Item label="66" value="66" />
                    <Picker.Item label="67" value="67" />
                    <Picker.Item label="68" value="68" />
                    <Picker.Item label="69" value="69" />

                    <Picker.Item label="70" value="70" />
                    <Picker.Item label="71" value="71" />
                    <Picker.Item label="72" value="72" />
                    <Picker.Item label="73" value="73" />
                    <Picker.Item label="74" value="74" />
                    <Picker.Item label="75" value="75" />
                    <Picker.Item label="76" value="76" />
                    <Picker.Item label="77" value="77" />
                    <Picker.Item label="78" value="78" />
                    <Picker.Item label="79" value="79" />

                    <Picker.Item label="80" value="80" />
                    <Picker.Item label="81" value="81" />
                    <Picker.Item label="82" value="82" />
                    <Picker.Item label="83" value="83" />
                    <Picker.Item label="84" value="84" />
                    <Picker.Item label="85" value="85" />
                    <Picker.Item label="86" value="86" />
                    <Picker.Item label="87" value="87" />
                    <Picker.Item label="88" value="88" />
                    <Picker.Item label="89" value="89" />

                    <Picker.Item label="90" value="90" />
                    <Picker.Item label="91" value="91" />
                    <Picker.Item label="92" value="92" />
                    <Picker.Item label="93" value="93" />
                    <Picker.Item label="94" value="94" />
                    <Picker.Item label="95" value="95" />
                    <Picker.Item label="96" value="96" />
                    <Picker.Item label="97" value="97" />
                    <Picker.Item label="98" value="98" />
                    <Picker.Item label="99" value="99" />
                </Picker>
            </View>

            <View>
                <Text>Gender</Text>
                <Picker
                    gender={gender}
                    selectedValue={gender}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(val, i) => setGender(val)}>

                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Transgender" value="transgender" />
                    <Picker.Item label="Nonbinary" value="nonbinary" />
                    <Picker.Item label="Genderfluid" value="genderfluid" />
                    <Picker.Item label="Genderqueer" value="genderqueer" />
                    <Picker.Item label="Agender" value="agender" />
                    
                    
                    

            </Picker>
            </View>

            <View>
                <Text>Tell us about yourself</Text>
                <TextInput 
                    value={about}
                    onChangeText={handleAbout}
                    placeholder='I am...'
                    multiline = {true}
                    numberOfLines = {4}
                    accessibilityLabel='Input field for a paragraph about yourself'
                    returnKeyType='next'
                />
            </View>

            <TouchableOpacity
                onPress={handleSubmit}
            
            ><Text>Save Changes</Text></TouchableOpacity>
        </View>
    );
}