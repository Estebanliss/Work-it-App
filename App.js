import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleApp1}>
        <Text style={styles.titleApp}>WORK-IT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "#E6E6E6",

  },

  //TITULO
  titleApp1: {
    flex: 1,
    width: "100%",
  },

  titleApp: {
    textAlign: 'center',
    marginTop: 70,
    fontSize: 30,
    fontWeight: "800",
    color: "#49AAF3",
  },

  //INPUT
  

  //LISTA
  titleApp3: {
    flex: 4,
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
});
