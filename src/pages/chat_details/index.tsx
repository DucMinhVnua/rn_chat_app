import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import {colors, variable} from '../../constants';
import {Message} from './components/Message';
import {ChatInput} from './components/ChatInPut';

const ChatDetailPage = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [valueChat, setValueChat] = useState<string>('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/images/img_test.png')}
            style={{
              width: wp('14%'),
              height: hp('7%'),
              borderRadius: 50,
              marginRight: wp('2'),
            }}
            resizeMode="cover"
          />
          <Image
            source={require('../../assets/images/img_test.png')}
            resizeMode="cover"
            style={{width: wp('14%'), height: hp('7%'), borderRadius: 50}}
          />
        </View>
        <View>
          <Text style={{color: colors.textColor}}>Martina Wolna</Text>
          <Text style={{color: colors.textColor}}>Maciej Kowalski</Text>
        </View>
      </View>

      <ScrollView style={{flexGrow: 1}}>
        <Message timeCreate="8:00" title="1234" id="1" />
        <Message timeCreate="8:00" title="12345" id="2" />
      </ScrollView>

      <ChatInput
        valueChat={valueChat}
        setValueChat={setValueChat}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
      />
    </View>
  );
};
export default ChatDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: variable.NORMAL_PADDING * 2,
    backgroundColor: colors.lightPrimary,
  },
});
