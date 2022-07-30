import { StyleSheet } from "react-native";
import { colors, variable } from "../../constants";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryColor,
      padding: variable.NORMAL_PADDING,
      justifyContent: 'center',
    },
    imageView: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: variable.NORMAL_PADDING * 3,
    },
    imageStyle: {
      width: wp('12%'),
      height: hp('6%'),
      borderRadius: 10,
      marginRight: variable.NORMAL_PADDING / 2,
    },
    textTitleStyle: {
      color: colors.textColor,
      fontWeight: '700',
      fontSize: hp('3%'),
    },
    textViewStyle: {
      flexDirection: 'row',
      marginTop: variable.NORMAL_PADDING,
      justifyContent: 'center',
    },
    buttonView: {
      marginTop: variable.NORMAL_PADDING * 2,
    },
    textStyle: {
      color: colors.textColor,
      fontWeight: '300',
      marginRight: wp('1%'),
    },
    textOpacityStyle: {
      color: colors.textColor,
      fontWeight: '700',
    },
  });

  export default styles;