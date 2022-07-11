import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const variable = {
  NORMAL_PADDING: (wp('3%') + hp('3%')) / 2,
};
