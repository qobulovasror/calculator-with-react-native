import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 50,
      height: '100%'
    },
    column: {
      display: 'flex',
      flexDirection: 'column'
    },
    row: {
      display: 'flex',
      flexDirection: 'row'
    },
    hr: {
      height: 1,
      margin: 14,
      backgroundColor: '#999'
    },
    between: {
      justifyContent: 'space-between'
    },
    tCenter: {
      textAlign: 'center'
    },
    display: {
      width: '100%',
      height: '20%',
      padding: 10,
    },
    oldNum: {
      justifyContent: 'flex-end',
      textAlign: 'right',
      fontSize: 30,
      height: 40
    },
    input: {
      justifyContent: 'flex-end',
      textAlign: 'right',
      fontSize: 40,
      height: 70,
    },
    keyGroup: {
      marginBottom: 10
    },
    btn: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: '23%',
      height: 70,
      textAlign: 'center',
      borderRadius: 10,
      marginHorizontal: 3
    },
    btnText: {
      fontSize: 35
    }
  });