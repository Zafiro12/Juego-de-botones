import { StyleSheet, Text } from "react-native";

interface MinaProps {
    top: number;
    left: number;
    texto: string;
    onPress?: () => void;
}

const Mina = ({ top, left, texto, onPress }: MinaProps) => {
    return (
        <Text style={[styles.mina, {top: top, left: left}]} onPress={onPress}>
            {texto}
        </Text>
    );
};


const styles = StyleSheet.create({
    mina: {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.41,
        elevation: 15,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 100,
        height: 100,
        position: 'absolute',
    },
});

export default Mina;