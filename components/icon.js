import React from 'react';
import {Text, View} from 'react-native';

const Icon = ({type, updater, id}) => (
    <View>
        <Text onPress={() => id ? updater(id) : updater()}>
            {type} icon..
        </Text>
    </View>
);

export default Icon;
