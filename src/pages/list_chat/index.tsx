import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageCustom} from '../../components';
import {colors, variable} from '../../constants';

const ListChatPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWithTitle}>
        <ImageCustom pathImage={require('../../assets/images/img_test.png')} />
        <Text
          style={{
            paddingLeft: variable.NORMAL_PADDING / 2,
          }}>
          Martina Wolna
        </Text>
      </View>
    </View>
  );
};

export default ListChatPage;

const styles = StyleSheet.create({
  container: {
    paddingLeft: variable.NORMAL_PADDING / 2,
    backgroundColor: colors.primaryColor,
  },
  avatarWithTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
