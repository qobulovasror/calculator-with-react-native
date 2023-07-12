import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "../../assets/style";
import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";
import Nums from "./components/nums";
import MathOperBtn from "./components/mathOperBtn";

const Keyboard = (props) => {
  const { oper, setOper } = props;
  const numClickHandler = (num) => {
    if (oper.length > 14)
      return Alert.alert("Warning", "characters must be less than 15");
    if (oper.length == 0 && num == 0) return;
    setOper(oper + num);
  };
  const funBtnClickHandler = (name) => {
    if (name == "delte") {
      return setOper(oper.slice(0, oper.length - 1));
    }
    if (name == "clear") {
      setOper("");
    }
  };
  const mathOperBtnHandler = (name) => {
    if (oper.length > 14)
      return Alert.alert("Warning", "characters must be less than 15");
    if(isNaN(oper[oper.length-1]))
      return
    if (name == "+") {
      setOper(oper + "+");
    }
    if (name == "-") {
      setOper(oper + "-");
    }
    if (name == "*") {
      setOper(oper + "*");
    }
    if (name == "/") {
      setOper(oper + "/");
    }
  };
  const runOperHadler = () => {
    let isRun = true
    oper
      .toString()
      .split("")
      .forEach((element) => {
        if (
          !isNaN(element) ||
          element === "+" ||
          element === "-" ||
          element === "*" ||
          element === "/" ||
          element === "%" ||
          element === "."
        ) {
        }else{
          isRun=false
        }
      });
      if (isRun && !isNaN(oper.toString()[oper.toString().length - 1])) {
        let result = eval(oper);
        (result.toString().length>15)? 
          setOper(result.toString().slice(0, 15)):
          setOper(result.toString())
          console.log(result);
          return result;
      }
  };
  const extraNumOper = (name)=>{
    if(name=='.'){
      if(oper.length>0 && !isNaN(oper[oper.length-1]))
        setOper(oper+'.')
      if(oper.length==0)
        setOper(oper+'0.')
      return
    }  
    if(name=='+/-'){
      if(oper.slice(0,5)!=='(-1)*'){
        setOper('(-1)*'+oper)
      }else{
        setOper(oper.slice(5))
      }
    }  

  }
  const extraMathOper = async (name)=>{
    let result;
    if(name=='square'){
      result = await runOperHadler()
      setOper(Math.sqrt(Number(result)))
      return;
    }
    if(name=='residual'){
      result=oper
      if(!isNaN(Number(oper))){
        result = await runOperHadler()
        setOper(oper+'%')
        return;
      }
        
    }
  }
  return (
    <View style={[styles.keyboard, styles.column]}>
      <View style={{ position: "relative", left: "85%" }}>
        <TouchableOpacity onPress={() => funBtnClickHandler("delte")}>
          <Feather name="delete" size={35} color="#f00" />
        </TouchableOpacity>
      </View>
      <View style={styles.hr}></View>
      <View style={[styles.keyGroup, styles.row, styles.between]}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => funBtnClickHandler("clear")}
        >
          <Text style={[styles.btnText, {color: '#f00'}]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>extraMathOper('square')}>
          <MaterialCommunityIcons name="square-root" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>extraMathOper('residual')}>
          <Text style={styles.btnText}>%</Text>
        </TouchableOpacity>
        <MathOperBtn content={"/"} setNums={mathOperBtnHandler} />
      </View>
      <View style={[styles.keyGroup, styles.row, styles.between]}>
        <Nums content={7} setNums={numClickHandler} />
        <Nums content={8} setNums={numClickHandler} />
        <Nums content={9} setNums={numClickHandler} />
        <MathOperBtn content={"*"} setNums={mathOperBtnHandler} />
      </View>
      <View style={[styles.keyGroup, styles.row, styles.between]}>
        <Nums content={4} setNums={numClickHandler} />
        <Nums content={5} setNums={numClickHandler} />
        <Nums content={6} setNums={numClickHandler} />
        <MathOperBtn content={"-"} setNums={mathOperBtnHandler} />
      </View>
      <View style={[styles.keyGroup, styles.row, styles.between]}>
        <Nums content={1} setNums={numClickHandler} />
        <Nums content={2} setNums={numClickHandler} />
        <Nums content={3} setNums={numClickHandler} />
        <MathOperBtn content={"+"} setNums={mathOperBtnHandler} />
      </View>
      <View style={[styles.keyGroup, styles.row, styles.between]}>
        <TouchableOpacity style={styles.btn} onPress={()=>extraNumOper('+/-')}>
          <Text style={styles.btnText}>+/-</Text>
        </TouchableOpacity>
        <Nums content={0} setNums={numClickHandler}/>
        <TouchableOpacity style={styles.btn} onPress={()=>extraNumOper('.')}>
          <Text style={styles.btnText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#0f0" }]}
          onPress={runOperHadler}>
          <Text style={styles.btnText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Keyboard;
