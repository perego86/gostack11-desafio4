<<<<<<< HEAD
import React, {useEffect, useState} from "react";
=======
import React from "react";
>>>>>>> ff471460ed0848c44480f66b9e3ba8f6963e3ead

import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

<<<<<<< HEAD
import api from './services/api'

export default function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(()=> {
    api.get('repositories').then(response => {
      console.log(response.data);
      setRepositories(response.data)
    });
  },[]);

  async function handleLikeRepository(id) {
      
      await api.post(`repositories/${id}/like`);
  
      const tempRepo = [...repositories];

      tempRepo.forEach(item => {if(item.id === id) item.likes = item.likes  + 1} )
  
      setRepositories([...tempRepo]);

=======
export default function App() {
  async function handleLikeRepository(id) {
    // Implement "Like Repository" functionality
>>>>>>> ff471460ed0848c44480f66b9e3ba8f6963e3ead
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
<<<<<<< HEAD
      
      <SafeAreaView style={styles.container}>
          <FlatList
              data={repositories}
              keyExtractor={repository => repository.id}
              renderItem={({item: repository}) => (
                <View style={styles.repositoryContainer}>
                
                
                <Text style={styles.repository}>{repository.title}</Text>

                <FlatList
                  data={repository.techs}
                  keyExtractor={tech => tech}
                  renderItem={({ item : tech }) => (
                    <View style={styles.techsContainer}>
                    <Text style={styles.tech}>
                      {tech}
                    </Text>
                  </View>
                  )}
                  
                />
   

                <View style={styles.likesContainer}>
                  <Text
                    style={styles.likeText}
                    // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
                    //testID={`repository-likes-1`}
                    testID={`repository-likes-${repository.id}`}
                  >
                    {repository.likes} curtidas
                  </Text>
                </View>

                <TouchableOpacity
                 style={styles.button}
                 onPress={() => handleLikeRepository(repository.id)}
                 // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
                 //testID={`like-byarnutton-1`}
                 testID={`like-button-${repository.id}`}
                >
                 <Text style={styles.buttonText}>Curtir</Text>
                </TouchableOpacity>

                </View>
              )}
          />

=======
      <SafeAreaView style={styles.container}>
        <View style={styles.repositoryContainer}>
          <Text style={styles.repository}>Repository 1</Text>

          <View style={styles.techsContainer}>
            <Text style={styles.tech}>
              ReactJS
            </Text>
            <Text style={styles.tech}>
              Node.js
            </Text>
          </View>

          <View style={styles.likesContainer}>
            <Text
              style={styles.likeText}
              // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
              testID={`repository-likes-1`}
            >
              3 curtidas
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLikeRepository(1)}
            // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
            testID={`like-button-1`}
          >
            <Text style={styles.buttonText}>Curtir</Text>
          </TouchableOpacity>
        </View>
>>>>>>> ff471460ed0848c44480f66b9e3ba8f6963e3ead
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  repository: {
    fontSize: 32,
    fontWeight: "bold",
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 15,
  },
});
