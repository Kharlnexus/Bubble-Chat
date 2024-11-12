import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from '../../constants';

const ONLINE_USERS = [
  { id: '1', name: 'Rey', avatar: icons.profile, status: 'Online' },
  { id: '2', name: 'Niel', avatar: icons.profile, status: 'Online' },
  { id: '3', name: 'Kharl', avatar: icons.profile, status: 'Offline' },
  { id: '4', name: 'Nexus', avatar: icons.profile, status: 'Online' },
  { id: '5', name: 'Kent', avatar: icons.profile, status: 'Offline' },
];

const OnlinePeopleLayout = () => {
  const renderUserItem = ({ item }) => (
    <TouchableOpacity style={styles.userItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.userDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={item.status === 'Online' ? styles.statusOnline : styles.statusOffline}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Online People</Text>
      </View>

      <FlatList
        data={ONLINE_USERS}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Light background for a cleaner look
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30, // More rounded edges
    backgroundColor: 'white',
    marginBottom: 10,
    // Removed elevation for no shadow effect
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#60a5fa', // Border color for the avatar
  },
  userDetails: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statusOnline: {
    color: 'green',
    fontSize: 14,
  },
  statusOffline: {
    color: 'red',
    fontSize: 14,
  },
};

export default OnlinePeopleLayout;
