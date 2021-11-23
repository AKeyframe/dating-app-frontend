import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, 
        Button, TouchableOpacity,
        Picker                      } from 'react-native';

import Styles, { bgColor, bgSecColor, hiColor, textColor} from '../Styles';

//Services
import { updateProfile, getProfile } from '../services/profileService';

export default function Settings(props){

    const [min, setMin] = useState(checkMin());
    const [max, setMax] = useState(checkMax());
    const [interest, setInterest] = useState(checkInterest());

    function checkMin(){
        if(props.profile[0].betweenAges){
            return props.profile[0].betweenAges.min;
        }
        return 18;
    }

    function checkMax(){
        if(props.profile[0].betweenAges){
            return props.profile[0].betweenAges.max;
        }
        return 99;
    }

    function checkInterest(){
        if(props.profile[0].interestedIn != undefined){
            return props.profile[0].interestedIn;
        }
        return 'male';
    }


    function handleSubmit(){
        const data = {interestedIn: interest, betweenAges: {min: min, max: max}};
        updateProfile(data, props.profile[0]._id);
        props.setUpdate(prev => prev+1);
        props.navigation.pop();
    }



    return(
        <View style={{flex: 1, backgroundColor: bgColor}}>
            <View style={{flex: -1, margin: 15}}>
                <View>
                    <Text style={{
                            color: textColor,
                            fontSize: 22, 
                            marginLeft: 15
                        }}
                    >Filter Settings: </Text>
                </View>
                
                
                <View style={{
                        flex: -1
                    }}
                >
                    <View>
                        <Text style={{
                                color: textColor,
                                marginLeft: 15, 
                                fontSize: 18
                            }}
                        >I'm looking for: </Text>
                    </View>

                    <View style={{alignSelf: 'center', margin: 5}}>
                        <Picker
                            style={Styles.picker}
                            interest={interest}
                            selectedValue={interest}
                            onValueChange={(val, i) => setInterest(val)}
                        >
                                    
                            <Picker.Item label="Men" value="men" />
                            <Picker.Item label="Women" value="women" />
                            <Picker.Item label="Everyone" value="everyone" />

                        </Picker>
                    </View>
                </View>      
                
                <View style={{
                        flex: -1
                    }}
                >
                    <View>
                        <Text style={{
                                color: textColor,
                                marginLeft: 15, 
                                fontSize: 18
                            }}
                        >Between Ages</Text>
                    </View>

                    <View style={{
                            flex: -1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            margin: 5
                        }}
                    >
                        <View>
                            <Picker
                                            min={min}
                                            selectedValue={min}
                                            style={Styles.picker}
                                            onValueChange={(val, i) => setMin(val)}>

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
                            <Picker
                                            max={max}
                                            selectedValue={max}
                                            style={Styles.picker}
                                            onValueChange={(val, i) => setMax(val)}>

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
                    </View>
                </View>
            </View>

            <View style={{flex: -1, margin: 15}}>
                <View>
                    <Text style={{
                            color: textColor,
                            fontSize: 22, 
                            marginLeft: 15
                        }}
                    >Account Settings: </Text>
                </View>
            </View>

            <View style={{
                    flex: -1,
                    alignItems: 'center',
                    marginVertical: 10,
                }}
            >
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                        width: 225,
                        backgroundColor: bgSecColor,
                        borderColor: hiColor,
                        borderRadius: 20,
                        borderWidth: 1, 
                        
                        marginTop: 20
                    }}
                >
                    <Text style={{
                            color: textColor,
                            textAlign: 'center',
                            fontSize: 28, 
                            padding: 5
                        }}
                    >Save Changes</Text>
                </TouchableOpacity>
            </View>
            
        </View>

            
        
    );
}