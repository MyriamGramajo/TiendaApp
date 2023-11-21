import React from 'react'
import { ActivityIndicator,StyleSheet, View } from 'react-native';





export const Loading = () => {
    return (
        <View style={[styles.horizontal]}>
            <ActivityIndicator size="large" color='#f2058b' />
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        horizontal: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
        },
    });