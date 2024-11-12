import { View, Text, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { icons } from '../../constants';

const CHATS = [
  { id: '1', name: 'Rey', lastMessage: 'sent message', time: '10:30 AM', avatar: icons.profile },
  { id: '2', name: 'John', lastMessage: 'Send an Attachment', time: '9:15 AM', avatar: icons.profile },
  { id: '3', name: 'Kian', lastMessage: 'Ml kuya', time: 'Yesterday', avatar: icons.profile },
  { id: '4', name: 'Nexus', lastMessage: 'Sent a File', time: '2 days ago', avatar: icons.profile },
  { id: '5', name: 'Kharl', lastMessage: 'Naa naka school?', time: '2 days ago', avatar: icons.profile },
  { id: '6', name: 'Kent', lastMessage: 'imissyou pre', time: '2 days ago', avatar: icons.profile },
  { id: '7', name: 'Niel', lastMessage: 'Iloveyou pre', time: '2 days ago', avatar: icons.profile },
  { id: '8', name: 'Francis', lastMessage: 'Asa naka pre?', time: '2 days ago', avatar: icons.profile },
];

const MessengerHomeLayout = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={{
      flexDirection: 'row',
      padding: 15,
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 25, // Rounded edges
      marginHorizontal: 10,
      marginVertical: 5,
    }}>
      <Image source={item.avatar} style={{ height: 50, width: 50, borderRadius: 25 }} />
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
        <Text style={{ color: '#666', fontSize: 14 }}>{item.lastMessage}</Text>
      </View>
      <Text style={{ color: '#999', fontSize: 12 }}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f4f8' }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        borderRadius: 25, // Rounded edges
        marginHorizontal: 10,
      }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>Messages</Text>
        <TouchableOpacity>
          <Image source={icons.settings} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={{
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 25, // Rounded edges
      }}>
        <TextInput
          style={{
            height: 40,
            paddingHorizontal: 15,
            borderRadius: 25, // Rounded edges
            backgroundColor: '#f0f4f8',
          }}
          placeholder="Search"
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={CHATS.filter(chat => chat.name.toLowerCase().includes(searchQuery.toLowerCase()))}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity style={{
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#60a5fa',
        borderRadius: 30, // Rounded edges
        padding: 15,
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>New Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessengerHomeLayout;
