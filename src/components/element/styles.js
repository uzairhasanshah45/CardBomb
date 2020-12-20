import { ScaledSheet } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
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
    fontSize: '16@ms',
    fontWeight: 'bold',
    marginTop: -2,
    color: 'white'
  }
})