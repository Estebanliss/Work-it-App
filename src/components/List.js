import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const List = ({ lista }) => {

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key')
  //     if (value !== null) {
  //       console.log("Se está guardando y viendo correctamente el valor: ", value)
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // }

  const getData = async () => {
    try {
      const list = await AsyncStorage.getItem('LIST-TASK')
      // return list != null ? JSON.parse(list) : null;
      console.log("Esto es el console.log de Get", list)
    } catch(e) {
      console.log(e)
    }
  }

  getData()

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text style={styles.itemText}>{item.tarea}</Text>
      <View style={styles.itemIcon}>
        <Pressable style={styles.icon} onPress={() => handleModal(item)}>
          <FontAwesomeIcon size={25} color={"gray"} icon={faPenToSquare} />
        </Pressable>
        <Pressable style={styles.icon} onPress={() => console.log(handleModal(item))}>
          <FontAwesomeIcon size={25} color={"gray"} icon={faCircleCheck} />
        </Pressable>
      </View>
    </View>
  )


  return (
    <View style={styles.titleApp3}>
      <View style={styles.containerFlatList}>
        <FlatList
          data={lista}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  //LISTA
  titleApp3: {
    flex: 3,
    width: "100%",
    alignItems: "center",
  },

  containerFlatList: {
    flex: 1,
    width: "100%",
    marginBottom: 25,
  },

  renderItemStyle: {
    flexDirection: "row",
    width: "90%",
    paddingHorizontal: 15,
    marginLeft: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom: 25,
  },

  itemText: {
    fontWeight: "600",
    width: "80%",
    fontSize: 16,
    paddingRight: 15,
    paddingVertical: 15,
    color: "gray",
  },

  itemIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "20%",
  },

})