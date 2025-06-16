// app/index.tsx

import { Link } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/etn-logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Empowering the Nation</Text>

        {/* Fees & Discounts */}
        <Link href="/fees" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Fees & Discounts</Text>
          </TouchableOpacity>
        </Link>

        {/* Cluster Buttons */}
        <Link href="/shortCourses" asChild>
          <TouchableOpacity style={styles.clusterButton}>
            <Text style={styles.buttonText}>6-Week Short Courses</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/sixMonth" asChild>
          <TouchableOpacity style={styles.clusterButton}>
            <Text style={styles.buttonText}>6-Month Courses</Text>
          </TouchableOpacity>
        </Link>

        {/* Other Pages */}
        <Link href="/quote" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Request a Quote</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/contact" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/about" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2E7D32', // Fern green
  },
  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginVertical: 6,
    width: '100%',
    alignItems: 'center',
  },
  clusterButton: {
    backgroundColor: '#388E3C', // Slightly darker green for distinction
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

