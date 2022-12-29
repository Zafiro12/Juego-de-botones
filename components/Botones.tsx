import { useEffect, useState } from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import Mina from "./Mina";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Botones = () => {
    const [cuenta, setCuenta] = useState(0);
    const [posicion, setPosicion] = useState([windowHeight / 2 - 50, windowWidth / 2 - 50]);
    const [numMinas, setNumMinas] = useState(0);
    const [moverOnPress, setMoverOnPress] = useState(false);
    const [intervalo, setIntervalo] = useState(false);
    const [tiempo, setTiempo] = useState(1000);

    useEffect(() => {
        juego();
        if (intervalo) {
            const interval = setInterval(() => {
                let top = Math.random() * (windowHeight - 100);
                let left = Math.random() * (windowWidth - 100);

                setPosicion([top, left]);
            }, tiempo);

            return () => clearInterval(interval);
        }
    }, [cuenta]);

    function juego(): void {
        switch (cuenta) {
            case 10:
                setMoverOnPress(true);
                break;
            case 20:
                setNumMinas(1);
                break;
            case 30:
                setNumMinas(2);
                break;
            case 40:
                setNumMinas(3);
                break;
            case 50:
                setIntervalo(true);
                break;
            case 60:
                setNumMinas(4);
                break;
            case 70:
                setNumMinas(5);
                break;
            case 80:
                setTiempo(500);
                break;
        }
    };

    function explota(): void {
        setPosicion([windowHeight / 2 - 50, windowWidth / 2 - 50]);
        setCuenta(0);
        setNumMinas(0);
        setMoverOnPress(false);
        setIntervalo(false);
        setTiempo(1000);
    }

    function handlePress(): void {
        setCuenta(cuenta + 1);
        if (moverOnPress) {
            let top = Math.random() * (windowHeight - 100);
            let left = Math.random() * (windowWidth - 100);
            setPosicion([top, left]);
        }
    };

    return (
        <View style={styles.contenedor}>
            <Text style={[styles.boton, { top: posicion[0], left: posicion[1] }]} onPress={handlePress} >{cuenta}</Text>
            {
                [...Array(numMinas)].map((_, i) => {
                    let top = Math.random() * (windowHeight - 100);
                    let left = Math.random() * (windowWidth - 100);

                    return <Mina top={top} left={left} texto={cuenta.toString()} onPress={explota} key={i} />
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    boton: {
        backgroundColor: 'green',
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
    contenedor: {
        height: windowHeight,
        width: windowWidth,
    },
});

export default Botones;