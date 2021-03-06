import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../config';
export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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
    marginBottom: '5@ms',
  },
  elementText: {
    fontSize: '12@ms',
    fontWeight: 'bold',
    marginTop: -2,
    color: 'white',
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
  scorehead: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  scoreBox: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreval: {
    color: '#fff',
    fontSize: 20,
  },
  score: {
    paddingVertical: 15,
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
