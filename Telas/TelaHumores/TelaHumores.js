import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList} from "react-native";
import Menu from '../BarrinhaMenus/barraMenu'
import HumorVazio from '../TelaInicial/TelaInicial'
import api from "../scr/services/Api";
import FlatlistCP from "./componentes/FlatlistCP";

export default function TelaH({ navigation }) {

    const [daily, setDaily] = React.useState([])
    const [dailyentrie, setDailyEntrie] = useState({})

    React.useEffect(() => {
        async function getHumores() {
          const response = await api.get("/daily_entries");
          setDaily(response.data);
        }
        getHumores();
      }, []);


    const renderItem = ({ item }) => (
            <FlatlistCP onPress={() => {
                navigation.navigate("VisuHumor", { 
                    id: item.id,
                    date: item.created_at,
                    mood: item.mood,
                    activities: item.activities
                })
            }}
            date={item.created_at}
            humor={item.mood}
            activity={item.activities}
            about={item.short_description}
            />
 );

    return (
            <>
            <FlatList
            data={daily}
            renderItem={renderItem}
            keyExtractor={item => item.id} 
            ListEmptyComponent={HumorVazio}
            />
            <Menu/>
            </>
    );
}
