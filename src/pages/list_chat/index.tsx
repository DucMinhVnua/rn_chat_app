import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ButtonIcon, ImageCustom, SearchButtonRight} from '../../components';
import {colors, variable} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardSlide from './components/card_slide';

const ListChatPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWithTitle}>
        <ImageCustom pathImage={require('../../assets/images/img_test.png')} />
        <Text
          style={{
            paddingLeft: variable.NORMAL_PADDING,
            color: colors.textColor,
            fontSize: 27,
          }}>
          Martina Wolna
        </Text>
      </View>

      <View style={{paddingTop: variable.NORMAL_PADDING}}></View>

      <View
        style={{paddingRight: variable.NORMAL_PADDING, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <SearchButtonRight
            imagePath={require('../../assets/icons/ic_search_btn.png')}
            widthIconImage={10}
            paddingLeft={10}
            widthSearch={60}
            borderRadius={12}
            placeholderTextColor={colors.textPlaceholder}
          />
        </View>
        <View style={{paddingLeft: variable.NORMAL_PADDING}}>
          <ButtonIcon
            imagePath={require('../../assets/icons/ic_add.png')}
            onTap={() => {}}
          />
        </View>
      </View>

      <View style={{paddingTop: variable.NORMAL_PADDING}}></View>

      <Text
        style={{
          color: colors.textColor,
          fontSize: 20,
        }}>
        Chatrooms
      </Text>

      <View style={{paddingTop: variable.NORMAL_PADDING}}></View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CardSlide />
        <View style={{paddingRight: variable.NORMAL_PADDING}}></View>
        <CardSlide />
        <View style={{paddingRight: variable.NORMAL_PADDING}}></View>
        <CardSlide />
        <View style={{paddingRight: variable.NORMAL_PADDING}}></View>
        <CardSlide />
        <View style={{paddingRight: variable.NORMAL_PADDING}}></View>
        <CardSlide />
        <View style={{paddingRight: variable.NORMAL_PADDING}}></View>
      </ScrollView>
    </View>
  );
};

export default ListChatPage;

const styles = StyleSheet.create({
  container: {
    paddingLeft: variable.NORMAL_PADDING,
    paddingTop: variable.NORMAL_PADDING * 2,
    backgroundColor: colors.primaryColor,
    height: hp('100%'),
  },
  avatarWithTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
