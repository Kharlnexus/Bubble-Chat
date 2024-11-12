import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from '../../constants';

const CALLS = [
  { id: '1', name: 'Niel', time: '10:30 AM', type: 'incoming', avatar: icons.profile },
  { id: '2', name: 'Nexus', time: '9:15 AM', type: 'missed', avatar: icons.profile },
  { id: '3', name: 'Kharl', time: 'Yesterday', type: 'outgoing', avatar: icons.profile },
  { id: '4', name: 'Kent', time: '2 days ago', type: 'incoming', avatar: icons.profile },
];

const RecentCallsLayout = () => {
  const renderCallItem = ({ item }) => (
    <TouchableOpacity style={styles.callItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.callDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <Text style={item.type === 'incoming' ? styles.callTypeIncoming : styles.callTypeMissed}>
        {item.type === 'incoming' ? 'Incoming' : item.type === 'outgoing' ? 'Outgoing' : 'Missed'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recent Calls</Text>
        <TouchableOpacity>
          <Image source={icons.settings} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={CALLS}
        renderItem={renderCallItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }} // Extra padding for the new call button
      />

      <TouchableOpacity style={styles.newCallButton}>
        <Text style={styles.newCallButtonText}>New Call</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  settingsIcon: {
    height: 25,
    width: 25,
  },
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30, // Increased radius for more rounded edges
    backgroundColor: 'white',
    marginBottom: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  callDetails: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    color: '#666',
    fontSize: 12,
  },
  callTypeIncoming: {
    color: 'green',
    fontWeight: 'bold',
  },
  callTypeMissed: {
    color: 'red',
    fontWeight: 'bold',
  },
  newCallButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#60a5fa',
    borderRadius: 30, // Increased radius for rounded edges
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  newCallButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
};

export default RecentCallsLayout;
