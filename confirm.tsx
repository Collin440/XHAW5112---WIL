import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ConfirmSelectionScreen() {
  const router = useRouter();
  const { selectedCourses } = useLocalSearchParams<{ selectedCourses?: string }>();

  const coursesArray = selectedCourses ? selectedCourses.split(',') : [];

  const handleProceedToPayment = () => {
    // Simulated payment flow
    router.push('/payment-success');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Confirm Your Selection</Text>

      {coursesArray.length > 0 ? (
        <View style={styles.courseList}>
          {coursesArray.map((course, index) => (
            <Text key={index} style={styles.courseItem}>
              • {course.trim()}
            </Text>
          ))}
        </View>
      ) : (
        <Text style={styles.noCourses}>No courses selected.</Text>
      )}

      <TouchableOpacity
        style={[
          styles.button,
          coursesArray.length === 0 && styles.buttonDisabled
        ]}
        onPress={handleProceedToPayment}
        disabled={coursesArray.length === 0}
      >
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#276749', // Fern green
    marginBottom: 20,
    textAlign: 'center',
  },
  courseList: {
    marginBottom: 30,
  },
  courseItem: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4a5568',
  },
  noCourses: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#276749',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#a0aec0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
