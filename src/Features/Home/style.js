import {ScaledSheet} from 'react-native-size-matters';
export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#126782',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center"
  },
  container: {
    height: '50@ms',
    width: '50@ms',
    borderRadius: '5@ms',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F00',
    marginRight: '5@ms',
    marginBottom: '5@ms'
  },
  elementText: {
    fontSize: '12@ms',
    fontWeight: 'bold',
    marginTop: -2,
    color: 'white'
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  animation: {
    height: '220@vs',
    width: '200@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // scoreContainer: {
  //   marginTop: '10@ms',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  // },
  // individualScore: {
  //   height: '40@ms',
  //   width: '35%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // borderWidth: '1@ms',
  //   // borderColor: 'white',
  //   // backgroundColor: '#f4845f',
  //   // borderRadius: '5@ms',
  // },
  // scoreText: {
  //   fontSize: '18@ms',
  //   textAlign: 'center',
  //   color: 'white',
  // },
});
