import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageCustom} from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, variable} from '../../constants';
import Message from './components/message';
import {TextInput} from 'react-native';

const DATA = [
  {
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
    time: '3:20',
    id: 1,
    message: 'Xin chào 500 ae nhớ',
  },
  {
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
    time: '3:20',
    id: 2,
    message: 'Oke luôn',
  },
  {
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
    time: '3:21',
    id: 3,
    message: 'làm quen cái cho đỡ bỡ ngỡ đê',
  },
  {
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
    time: '3:23',
    id: 4,
    message: 'Đúng rồi bạn',
  },
  {
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
    time: '5:40',
    id: 1,
    message: 'Đ Ế U!',
  },
];

const RoomChatPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperListAvatar}>
        {DATA.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <View key={index} style={{paddingRight: wp('1%')}}>
                <ImageCustom
                  key={index}
                  pathImage={item.avatar}
                  width={8}
                  height={4}
                  borderColor={colors.lightGray}
                  borderWidth={2}
                />
              </View>
            );
          } else {
            return (
              <View
                key={index}
                style={{marginTop: hp('1%'), paddingRight: wp('1%')}}>
                <ImageCustom
                  key={index}
                  pathImage={item.avatar}
                  width={8}
                  height={4}
                  borderColor={colors.lightGray}
                  borderWidth={2}
                />
              </View>
            );
          }
        })}
      </View>

      <View>
        <ScrollView>
          <View style={{paddingRight: wp('1%')}}>
            <Message
              pathImage={
                'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg'
              }
              message={
                'Xin chào aer nhé aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
              id={1}
              typeMessage={'text'}
              time={'21:02'}
            />
          </View>
          <View style={{paddingRight: wp('1%')}}>
            <Message
              pathImage={
                'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg'
              }
              message={'Xin chào aer nhé'}
              id={2}
              typeMessage={'text'}
              time={'21:02'}
            />
          </View>
          <View style={{paddingRight: wp('1%')}}>
            <Message
              pathImage={
                'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg'
              }
              message={'Xin chào aer nhé'}
              id={3}
              typeMessage={'text'}
              time={'21:02'}
            />
          </View>
          <View style={{paddingRight: wp('1%')}}>
            <Message
              pathImage={
                'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg'
              }
              message={'Xin chào aer nhé'}
              id={4}
              typeMessage={'text'}
              time={'21:02'}
            />
          </View>
          {/* {DATA.map((item, index) => {
            return (
              <View key={index} style={{paddingRight: wp('1%')}}>
                <Message
                  pathImage={item.avatar}
                  message={item.message}
                  id={item.id}
                  typeMessage={'text'}
                  time={'21:02'}
                />
              </View>
            );
          })} */}
        </ScrollView>
      </View>
      <View style={styles.fieldMesssage}>
        <TextInput
          style={{
            position: 'relative',
            bottom: 0,
            paddingHorizontal: variable.NORMAL_PADDING,
            borderWidth: 1,
            color: colors.textColor,
            fontSize: 18,
          }}
          multiline
        />
      </View>
    </View>
  );
};

export default RoomChatPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    flex: 1,
  },
  wrapperListAvatar: {
    flexDirection: 'row',
    marginHorizontal: variable.NORMAL_PADDING,
    marginVertical: variable.NORMAL_PADDING / 2,
  },
  fieldMesssage: {
    paddingHorizontal: variable.NORMAL_PADDING,
    paddingVertical: variable.NORMAL_PADDING,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
