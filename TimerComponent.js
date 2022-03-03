import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

export default function TimerComponent() {
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const { mins, secs } = getRemaining(remainingSecs);
  
    toggle = () => {
      setIsActive(!isActive);
    }
  
    reset = () => {
      setRemainingSecs(0);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setRemainingSecs(remainingSecs => remainingSecs + 1);
        }, 1000);
      } else if (!isActive && remainingSecs !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, remainingSecs]);
  
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
        <TouchableOpacity onPress={this.toggle} style={styles.button}>
          <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={this.reset} style={[styles.button, styles.buttonReset]}>
            <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        borderColor: '#B9AAFF',
        alignItems: 'center',
        justifyContent: 'center'
      }
  });