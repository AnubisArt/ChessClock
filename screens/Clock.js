import { Button, Dimensions, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { Divider } from 'react-native-paper';const Clock = () => {
    const [backgroundP1, setBackgroundP1] = useState('#e07a5f')
    const [backgroundP2, setBackgroundP2] = useState('#3d405b')
    const [counter1, setCounter1] = useState(300); // 1 hour in seconds
    const [counter2, setCounter2] = useState(300); // 1 hour in seconds
    const [pause, setPause] = useState(true)
    const [P1Move, setP1Move] = useState(true)
    const [P2Move, setP2Move] = useState(true)
    const [isTurn1, setIsTurn1] = useState(true);
    const [visible, setVisible] = useState(false)
    const [displayValue, setDisplayValue] = useState('none')

    useEffect(() => {
       
      const timer =
        counter1 > 0 &&
        setInterval(() => {
          if (!pause && isTurn1 && pausePlay == true) {
            setCounter1((time) => time - 1);
          }
        }, 1000);
  

      return () => clearInterval(timer);
    }, [counter1, pause, isTurn1]);
  
  
    useEffect(() => {
      const timer =
        counter2 > 0 &&
        setInterval(() => {
          if (!pause && !isTurn1 && pausePlay == true) {
            setCounter2((time) => time - 1);
          }
        }, 1000);
  
      return () => clearInterval(timer);
    }, [counter2, pause, isTurn1]);
    useEffect(() => {
        if (counter2 === 0) {
          setBackgroundP2('red');
          setPausePlay(false)
        }
        if (counter1 === 0) {
            setBackgroundP1('red');
            setPausePlay(false)
          }
      });
  
    const minutes1 = Math.floor(counter1 / 60).toString().padStart(2, '0');
    const seconds1 = (counter1 % 60).toString().padStart(2, '0');
  
    const minutes2 = Math.floor(counter2 / 60).toString().padStart(2, '0');
    const seconds2 = (counter2 % 60).toString().padStart(2, '0');
    
    const switchTurn = () => {
  
      setIsTurn1(!isTurn1);
  
    };

    const P1Press=()=>{
        switchTurn()
        }
    const P2Press=()=>{
        switchTurn()

    }
    const [pausePlay, setPausePlay] = useState(false)

    const TimeRuns=(pausePlay)=>{
        if(pausePlay == true){
            return 'pause'
        }
        else{
            return'caretright'
        }
    }
    const ChangeState=()=>{setPausePlay(!pausePlay), setPause(!pause)}
    const ReloadApp=()=>{
        setBackgroundP1('#e07a5f')
        setBackgroundP2('#3d405b')
        setCounter1(300)
        setCounter2(300)
        setPause(true)
        setP1Move(true)
        setP2Move(true)
        setIsTurn1(true);
}
const handleTime10 =()=>{
    setCounter1(600)
    setCounter2(600)
}
const handleTime5 =()=>{
    setCounter1(300)
    setCounter2(300)
}
const handleTime3 =()=>{
    setCounter1(180)
    setCounter2(180)
}

const handleVisible=()=>{
    setVisible(!visible)
    if(visible){
        setDisplayValue('flex')
    }
    else{
        setDisplayValue('none')
    }
}
    return (
    <SafeAreaView style={styles.container}>
        <StatusBar/>
      <Pressable onPressOut={P1Press} style={[styles.P1Button, {backgroundColor: backgroundP1}]}>
        <Text style={[styles.Time, styles.flipped]}>
            {minutes1 + ":" + seconds1}
        </Text>
      </Pressable>
      <View style={styles.Menu}>
        <Pressable onPress={ReloadApp}>
            <AntDesign name='reload1' size={40}/>
        </Pressable>
        <Pressable onPressOut={ChangeState}>
            <AntDesign name={TimeRuns(pausePlay)} size={40}/>
        </Pressable>
        <Pressable onPressOut={handleVisible}>
            <AntDesign name='edit' size={40}/>
        </Pressable>
        
      </View>
      <Pressable onPressOut={P2Press} style={[styles.P2Button, {backgroundColor: backgroundP2}]}>
        <Text style={styles.Time}>
        {minutes2 + ":" + seconds2}
        </Text>
      </Pressable>
      <View style={[styles.TimeMenu, {display: displayValue}]}>
        <Pressable onPressIn={handleTime10}>
            <Text style={{fontWeight: 'bold'}}>10|0</Text>
        </Pressable>
        <Pressable  onPressIn={handleTime5}>
            <Text style={{fontWeight: 'bold'}}>5|0</Text>
        </Pressable>
        <Pressable  onPressIn={handleTime3}>
            <Text style={{fontWeight: 'bold'}}>3|0</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Clock

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    P1Button:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    P2Button:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Time:{
        fontSize:80,
        fontWeight:'bold',
    },
    flipped:{
        transform: [{rotateX: '180deg'}, {rotateZ: '0deg'}, { scaleX: -1 }],   
    },
    Menu:{
        flex:0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor:'#f4f1de'
    },
    TimeMenu:{

        flex:1,
        padding: 20,
        backgroundColor:"#D3D3D390",
        position: 'absolute',
        top:'50%',
        left:0,
        borderRadius:20,
        marginLeft:10,
    },
})