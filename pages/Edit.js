import React, { useState } from 'react';
import {View, ScrollView, Text, TextInput, 
        Button, TouchableOpacity, 
        Picker, Dimensions            } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { updateProfile } from '../services/profileService';
import Styles, { bgColor, bgSecColor, hiColor, textColor } from '../Styles';



export default function Edit(props){
    
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const SCREEN_WIDTH = Dimensions.get('window').width;

    const [first, setFirst] = useState(checkFirst());
    const [age, setAge] = useState(checkAge());
    const [gender, setGender] = useState(checkGender());
    const [education, setEducation] = useState(checkEducation());
    const [job, setJob] = useState(checkJob());
    const [about, setAbout] = useState(checkAbout());

    function checkFirst(){
        if(props.profile[0].first){
            return props.profile[0].first;
        }
        return 'First Name'
    }

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

    function checkEducation(){
        if(props.profile[0].education){
            return props.profile[0].education;
        }
        return ''
    }

    function checkJob(){
        if(props.profile[0].job){
            return props.profile[0].job;
        }
        return ''
    }

    function checkAbout(){
        if(props.profile[0].about){
            return props.profile[0].about;
        }
        return '';
    }

    
    const handleFirst = text => {setFirst(text);}
    const handleEducation = text => {setEducation(text);}
    const handleJob = text => {setJob(text);}
    const handleAbout = text => {setAbout(text);}
    

    function handleSubmit(){
        const data = {first: first, age: age, gender: gender,
                        education: education, job: job, about: about};
        updateProfile(data, props.profile[0]._id);
        props.setUpdate(prev => prev+1);
        props.navigation.pop();
        props.navigation.push('Profile');
    }

    return(
        <View style={{backgroundColor: bgColor}}>
            <View Style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: bgColor
                }}>
                
                <View style={{
                        flex: -1,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                        borderColor: hiColor,
                        borderRadius: 30,
                        backgroundColor: bgSecColor,
                        width: SCREEN_WIDTH - 20,
                        height: SCREEN_HEIGHT -300
                    }}
                >
                    <View style={{
                            justifyContent: 'center', 
                            alignItems: 'center'
                            }}
                    >
                        <Text style={{
                                color: textColor,
                                textAlign: 'center'
                            }}
                        >Image Selector</Text>
                    </View>
                </View>
                
                <View style={{
                        flex: -1, 
                        alignItems: 'center',
                        marginTop: 20,
                    
                    }}
                >
                    <Text style={{
                            color: textColor,
                            textAlign: 'center'
                        }}
                    >Gender</Text>
                    <Picker
                        style={Styles.picker}
                        gender={gender}
                        selectedValue={gender}
                            
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


                {/* Name and Age Picker */}
                <View style={{
                         flex: -1,
                         flexDirection: 'row',
                         justifyContent: 'space-evenly',
                         marginTop: 20,
                    
                    }}
                >

                    <View style={{
                           flex: -1
                        }}
                    >
                        <Text style={{
                                color: textColor,
                                textAlign: 'center',
                                marginBottom: 3
                            }}>First Name</Text>

                        <TextInput
                            style={Styles.input} 
                            value={first}
                            onChangeText={handleFirst}
                            placeholder='First Name'
                            accessibilityLabel='Input for your first name'
                            returnKeyType='next'
                        />
                    </View>

                    <View>
                        <Text style={{
                                color: textColor,
                                textAlign: 'center',
                                marginBottom: 3,
                            }}
                        >Age</Text>

                        <Picker
                            style={Styles.picker}
                            age={age}
                            selectedValue={age}
                            style={{height: 32,
                                    width: 150, 
                                    marginRight: 3,
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: hiColor,
                                    backgroundColor: bgSecColor,
                                    color: textColor,
                                   
                                    padding: 3,
                                    textAlign: 'center'
                                }}
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
                </View> {/* End Name and Age Picker */}

                <View style={{
                        flex: -1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: 20,
                       
                    }}
                >
                    <View style={{
                            flex: -1,
                        }}
                    >
                        <Text style={{
                                color: textColor,
                                textAlign: 'center', 
                                marginBottom: 3
                            }}
                        >Education</Text>

                        <TextInput 
                            style={Styles.input}
                            value={education}
                            onChangeText={handleEducation}
                            placeholder='Education'
                            accessibilityLabel='Input for your School or Education'
                            returnKeyType='next'
                        />
                    </View>

                    <View>
                        <Text style={{
                                color: textColor,
                                textAlign: 'center', 
                                marginBottom: 3
                            }}
                        >Occupation</Text>

                        <TextInput 
                            style={Styles.input}
                            value={job}
                            onChangeText={handleJob}
                            placeholder='Occupation'
                            accessibilityLabel='Input for where you work'
                            returnKeyType='next'
                        
                        />
                    </View>
                </View>

                <View style={{
                        flex: -1,
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Text style={{color: textColor}}>Tell us about yourself</Text>
                    <TextInput 
                        style={Styles.textArea}
                        value={about}
                        onChangeText={handleAbout}
                        placeholder='I am...'
                        multiline = {true}
                        numberOfLines = {6}
                        accessibilityLabel='Input field for a paragraph about yourself'
                        returnKeyType='next'
                    />
                </View>
                
                <View style={{
                        flex: -1,
                        alignItems: 'center',
                        marginVertical: 15,
                    }}
                ><TouchableOpacity
                        onPress={handleSubmit}
                        style={{
                            backgroundColor: bgSecColor,
                            borderWidth: 1,
                            borderRadius: 20,
                            borderColor: hiColor,
                            width: 225
                        }}
                    
                    >
                        <Text style={{
                                color: textColor,
                                fontSize: 28,
                                textAlign: 'center', 
                                padding: 5
                            }}
                        >Save Changes</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}