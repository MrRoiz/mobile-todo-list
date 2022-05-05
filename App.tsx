import { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface TodoItem {
  text: string;
  done: boolean;
}

export default function App() {
  const [toDoList, setToDoList] = useState<TodoItem[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleTextPress = (index: number) => {
    setToDoList(
      toDoList.map((item, internalIndex) => {
        const modificableItem = item;
        if (index === internalIndex) {
          modificableItem.done = !item.done;
        }
        return modificableItem;
      })
    );
  };

  const handleAddTodo = () => {
    setToDoList([...toDoList, { text: inputText, done: false }]);
    setInputText('');
    setIsModalVisible(false);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>List</Text>
          <Button title="Add item" onPress={() => setIsModalVisible(true)} />
        </View>
        <FlatList
          data={toDoList}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => handleTextPress(index)}>
              <View style={styles.listItem}>
                <Text
                  style={[
                    styles.listItemText,
                    item.done && styles.listItemTextSelected,
                  ]}
                >
                  {item.text}
                </Text>
              </View>
            </Pressable>
          )}
          ListEmptyComponent={
            <View style={styles.noDataView}>
              <Text>No data</Text>
            </View>
          }
        />
      </SafeAreaView>
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.modalInput}
              placeholder="type a todo"
              value={inputText}
              onChangeText={setInputText}
            />
            <View style={styles.modalFooter}>
              <View style={styles.modalFooterButton}>
                <Button title="Create todo" onPress={handleAddTodo} />
              </View>
              <View style={styles.modalFooterButton}>
                <Button
                  title="Cancel"
                  onPress={() => setIsModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    borderColor: 'black',
  },
  header: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  listItem: {
    padding: 10,
  },
  listItemText: {
    fontSize: 20,
  },
  listItemTextSelected: {
    textDecorationLine: 'line-through',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInput: {
    marginBottom: 30,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    padding: 5,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalFooter: {
    flexDirection: 'row',
  },
  modalFooterButton: {
    marginHorizontal: 10,
  },
  noDataView: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
