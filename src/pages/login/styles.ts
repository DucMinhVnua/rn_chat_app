import {StyleSheet} from 'react-native';
import {colors, variable} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
  },
  imageHeader: {
    alignItems: 'center',
  },
  imageStyle: {
    width: wp('40%'),
    height: hp('20%'),
    marginBottom: variable.NORMAL_PADDING * 3,
  },
  buttonViewStyle: {
    marginTop: variable.NORMAL_PADDING * 3,
  },
  textViewStyle: {
    flexDirection: 'row',
    marginTop: variable.NORMAL_PADDING,
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
