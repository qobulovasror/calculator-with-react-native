import { View, Text } from "react-native";
import { styles } from "../assets/style";

const Display = (props) => {
  const { oper, setOper } = props;
  return (
    <View style={styles.display}>
      <Text style={styles.oldNum}></Text>
      {oper ? 
        <Text style={styles.input}>{oper}</Text> : 
        <Text style={[styles.input, {color: '#888'}]}>0</Text>}
    </View>
  );
};

export default Display;
