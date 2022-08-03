import { BackHandler, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  ButtonIcon,
  ImageCustom,
  SearchButtonRight,
  UserTile,
} from '../../components';
import { colors, variable } from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardSlide from './components/card_slide';
import RoutesName from '../../routes';
import Modal from 'react-native-modal';

const ListChatPage = ({ navigation }: any) => {

  const [isModalVisible, setModalVisible] = useState(false)

  // don't navigate back of button back android
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);


  function renderAddModal() {

    function handleBackdropPress() {
      console.log('Vào đây')
      setModalVisible(false);
    }

    return (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={handleBackdropPress}
      >
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    )
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarWithTitle}>
        <ImageCustom
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          width={5}
        />
        <Text
          style={{
            paddingLeft: variable.NORMAL_PADDING,
            color: colors.textColor,
            fontSize: 27,
          }}>
          Martina Wolna
        </Text>
      </View>

      <View style={{ paddingTop: variable.NORMAL_PADDING }}></View>

      <View
        style={{
          paddingRight: variable.NORMAL_PADDING,
          flexDirection: 'row',
        }}>
        <View style={{ flex: 1 }}>
          <SearchButtonRight
            imagePath={require('../../assets/icons/ic_search_btn.png')}
            widthIconImage={10}
            paddingLeft={10}
            widthSearch={60}
            borderRadius={12}
            placeholderTextColor={colors.textPlaceholder}
          />
        </View>
        <View style={{ paddingLeft: variable.NORMAL_PADDING }}>
          <ButtonIcon
            imagePath={require('../../assets/icons/ic_add.png')}
            onTap={() => {
              setModalVisible(true);
            }}
          />
        </View>
      </View>

      <View style={{ paddingTop: variable.NORMAL_PADDING }}></View>

      <Text
        style={{
          color: colors.textColor,
          fontSize: 20,
        }}>
        Chatrooms
      </Text>

      <View style={{ paddingTop: variable.NORMAL_PADDING }}></View>

      <View style={{ maxHeight: hp('25%') }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <CardSlide />
          <View style={{ paddingRight: variable.NORMAL_PADDING }}></View>
          <CardSlide />
          <View style={{ paddingRight: variable.NORMAL_PADDING }}></View>
          <CardSlide />
          <View style={{ paddingRight: variable.NORMAL_PADDING }}></View>
          <CardSlide />
          <View style={{ paddingRight: variable.NORMAL_PADDING }}></View>
          <CardSlide />
          <View style={{ paddingRight: variable.NORMAL_PADDING }}></View>
        </ScrollView>
      </View>

      <View style={{ paddingTop: variable.NORMAL_PADDING }}></View>

      <View>
        <UserTile
          onPress={() => { }}
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          title={'Maciej Kowalski'}
          subTitle={'Will do, super, thank you'}
          time={'08:43'}
        />
        <UserTile
          onPress={() => { }}
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          title={'Maciej Kowalski'}
          subTitle={'Will do, super, thank you'}
          time={'08:43'}
        />
        <UserTile
          onPress={() => { }}
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          title={'Maciej Kowalski'}
          subTitle={'Will do, super, thank you'}
          time={'08:43'}
        />
        <UserTile
          onPress={() => { }}
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          title={'Maciej Kowalski'}
          subTitle={'Will do, super, thank you'}
          time={'08:43'}
        />
        <UserTile
          onPress={() => { }}
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          title={'Maciej Kowalski'}
          subTitle={'Will do, super, thank you'}
          time={'08:43'}
        />
        <UserTile
          onPress={() => { }}
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          title={'Maciej Kowalski'}
          subTitle={'Will do, super, thank you'}
          time={'08:43'}
        />
        <UserTile
          onPress={() => { }}
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          title={'Maciej Kowalski'}
          subTitle={'Will do, super, thank you'}
          time={'08:43'}
        />
        <UserTile
          onPress={() => { }}
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          title={'Maciej Kowalski'}
          subTitle={'Will do, super, thank you'}
          time={'08:43'}
        />
        <UserTile
          onPress={() => { }}
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          title={'Maciej Kowalski'}
          subTitle={'Will do, super, thank you'}
          time={'08:43'}
        />
        <UserTile
          onPress={() => { }}
          pathImage={
            'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
          }
          title={'Maciej Kowalski'}
          subTitle={'Will do, super, thank you'}
          time={'08:43'}
        />
      </View>

      {renderAddModal()}
    </ScrollView>
  );
};

export default ListChatPage;

const styles = StyleSheet.create({
  container: {
    paddingLeft: variable.NORMAL_PADDING,
    backgroundColor: colors.primaryColor,
  },
  avatarWithTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
