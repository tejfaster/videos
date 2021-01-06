import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Modal,
} from 'react-native';
import { WebView } from 'react-native-webview'

const App = () => {
    const [isVisible, setVisible] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setVisible(true)}
                style={{
                    height: 50,
                    backgroundColor: 'grey',
                }}>
                <Text>Click me</Text>
            </TouchableOpacity>

            <Modal
                style={{

                }}
                animationType="slide"
                transparent={false}
                visible={isVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={{
                   flex:1/2,
                    backgroundColor: 'orange',
                    borderWidth: 1,
                   // borderColor: 'orange',
                    marginTop: 22,
                }}>

                    <WebView
                        javaScriptEnabled={true}
                        style={{ flex: 1, borderColor: 'red', borderWidth: 1, height: 400, width: 400 }}
                        source={{
                            uri: 'https://www.youtube.com/embed/RJa4kG1N3d0'
                        }}
                    />
                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <Text>Hide Modal</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
