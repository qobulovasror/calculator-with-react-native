import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../../../assets/style";

const Nums = (props) => {
    const {content, setNums} = props
    return (
        <TouchableOpacity style={styles.btn} onPress={()=>setNums(content)}>
            <Text style={styles.btnText}>{content}</Text>
        </TouchableOpacity>
    );
}

export default Nums;
