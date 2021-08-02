import * as React from 'react';
import { Text,View,StyleSheet,Image,SafeAreaView,Platform,StatusBar,ScrollView} 
from 'react-native';

export default class PostScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image style={styles.imageIcon} source={require('../assets/logo.png')}/>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>See Post</Text>
                    </View>
                </View>
                <View style={styles.postContainer}>
                    <ScrollView style={styles.postCard}>
                    <Image style={styles.image} source={require('../assets/image_1.jpg')}/>
                    <View style={styles.dataContainer}>
                        <View style={styles.titleTextContainer}>
                            <Text style={styles.postTitleText}>{this.props.route.params.post.</Text>
                        </View>
                    </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },

})