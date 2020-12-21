import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../config';
export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: 'center',
    marginTop: '50@ms',
  },
  headerText: {
    color: 'white',
    fontSize: '40@ms',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  subheaderText: {
    marginTop: 7,
    fontSize: '14@ms',
    color: 'white',
    textAlign: 'center',
  },
  animation: {
    height: '220@vs',
    width: '200@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation2: {
    height: '300@ms',
    width: '300@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  instruction: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructiontext: {
    fontSize: '15@ms',
    color: 'white',
  },
  instructionTextTitle: {
    margin: '8@ms',
    color: 'white',
    fontSize: '20@ms',
    fontWeight: 'bold',
  },
  buttonBox: {flex: 1, justifyContent: 'center'},
  button: {
    margin: '10@ms',
    backgroundColor: colors.mainColor,
    elevation: 4,
    height: '50@ms',
    paddingHorizontal: '35@ms',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '10@ms',
  },
  txt: {
    fontSize: '20@ms',
    color: '#fff',
  },
});
