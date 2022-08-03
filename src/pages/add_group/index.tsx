import React from 'react';
import {
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from 'react-native';
import { SearchButtonRight, UserTile } from '../../components';
import { colors, variable } from '../../constants';

const AddGroupPage = () => {
   return (
      <View style={styles.container}>
         <StatusBar backgroundColor="transparent" translucent={true} />
         <View
            style={{
               flexDirection: 'row',
               justifyContent: 'space-between',
               paddingVertical: variable.NORMAL_PADDING,
            }}>
            <TouchableOpacity>
               <Text style={{ color: colors.textColor }}>Hủy</Text>
            </TouchableOpacity>
            <Text style={{ color: colors.textColor }}>Nhóm mới</Text>
            <TouchableOpacity>
               <Text style={{ color: colors.textColor }}>Tạo</Text>
            </TouchableOpacity>
         </View>

         <View style={{ marginBottom: variable.NORMAL_PADDING }}>
            <SearchButtonRight
               imagePath={require('../../assets/icons/ic_search_btn.png')}
               widthIconImage={10}
               paddingLeft={10}
               widthSearch={60}
               borderRadius={12}
               placeholderTextColor={colors.textPlaceholder}
            />
         </View>
         <View style={{ flex: 1 }}>
            <Text style={{ color: colors.textColor }}>Gợi ý</Text>
            <ScrollView
               style={{ flexGrow: 1 }}
               showsVerticalScrollIndicator={false}>
               <UserTile
                  onPress={() => { }}
                  pathImage={
                     'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
                  }
                  title={'Maciej Kowalski'}
               />
               <UserTile
                  onPress={() => { }}
                  pathImage={
                     'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
                  }
                  title={'Maciej Kowalski'}
               />
               <UserTile
                  onPress={() => { }}
                  pathImage={
                     'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo-1-1631856680040545802895.jpg'
                  }
                  title={'Maciej Kowalski'}
               />
            </ScrollView>
         </View>
      </View>
   );
};

export default AddGroupPage;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.primaryColor,
      padding: variable.NORMAL_PADDING,
   },
});
