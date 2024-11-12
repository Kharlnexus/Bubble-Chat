import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from '../../constants';

const ProfileLayout = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image 
          source={icons.profile} 
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Kharl Nexus</Text>
        <Text style={styles.email}>Kharlnexus@gmail.com</Text>
      </View>

      {/* Profile Options */}
      <View style={styles.optionsContainer}>
        {renderOption("Edit Profile")}
        {renderOption("Privacy Settings")}
        {renderOption("Notifications")}
        {renderOption("Help & Support")}
        {renderOption("Log Out")}
      </View>
    </View>
  );
};

const renderOption = (text) => (
  <TouchableOpacity style={styles.option}>
    <Text style={styles.optionText}>{text}</Text>
  </TouchableOpacity>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    borderRadius: 30, // Adjusted radius to 30
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    borderRadius: 30, // Adjusted radius to 30
    overflow: 'hidden', // To ensure children respect border radius
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#60a5fa',
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    color: '#666',
    marginTop: 5,
    fontSize: 14,
  },
  optionsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
    borderRadius: 30, // Adjusted radius to 30
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
    borderRadius: 30, // Adjusted radius to 30
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
};

export default ProfileLayout;
