import {ScaledSheet} from 'react-native-size-matters';
export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#126782',
  },
  header: {
    alignItems: 'center',
    marginTop: '50@ms',
  },
  headerText: {
    color: 'white',
    fontSize: '40@ms',
    fontFamily: 'Cochin',
  },
  subheaderText: {
    fontSize: '16@ms',
    color: 'white',
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
    backgroundColor: '#219ebc',
    elevation: 4,
    height: '50@ms',
    width: '120@ms',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '30@ms',
  },
  txt: {
    fontSize: '20@ms',
    color: '#fff'
  },
});
