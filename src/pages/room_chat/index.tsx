import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, variable} from '../../constants';
import {TextInput} from 'react-native';
import Avatars from './components/avatars';
import Discussion from './components/discussion';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ButtonIcon} from '../../components';
import FooterField from './components/footer_field';

const DATA_MESSAGE = [
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
  {
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
    time: '5:42',
    id: 1,
    message: 'Đùa xíu cho zui',
  },
  {
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
    time: '3:23',
    id: 5,
    message: 'Xàm quá nhờ',
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
  {
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
    time: '5:42',
    id: 1,
    message: 'Đùa xíu cho zui',
  },
  {
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
    time: '3:23',
    id: 5,
    message: 'Xàm quá nhờ',
  },
];

const DATA_USERS = [
  {
    id: 1,
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
  },
  {
    id: 2,
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
  },
  {
    id: 3,
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
  },
  {
    id: 4,
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
  },
  {
    id: 5,
    avatar:
      'https://e4life.vn/wp-content/uploads/2021/08/tieng-anh-bat-dau-bang-chu-a.jpg',
  },
];

const RoomChatPage = () => {
  return (
    <View style={styles.container}>
      <Avatars DATA={DATA_USERS} />

      <Discussion DATA={DATA_MESSAGE} />

      <View style={{flex: 1}}></View>

      <FooterField />
    </View>
  );
};

export default RoomChatPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    flex: 1,
  },
});
