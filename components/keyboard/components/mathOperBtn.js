import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../../../assets/style";

const MathOperBtn = (props) => {
    const {content, setNums} = props
    return (
        <TouchableOpacity style={styles.btn} onPress={()=>setNums(content)}>
            <Text style={styles.btnText}>{content}</Text>
        </TouchableOpacity>
    );
}

export default MathOperBtn;
