import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

const sixMonthCourses = [
  { name: 'First Aid', fee: 1500 },
  { name: 'Sewing', fee: 1500 },
  { name: 'Landscaping', fee: 1500 },
  { name: 'Life Skills', fee: 1500 },
];

const shortCourses = [
  { name: 'Child Minding', fee: 750 },
  { name: 'Cooking', fee: 750 },
  { name: 'Garden Maintenance', fee: 750 },
];

export default function FeeCalculator() {
  const [selectedCourses, setSelectedCourses] = useState<any[]>([]);
  const router = useRouter();

  const handleToggle = (course: any) => {
    const exists = selectedCourses.find((c) => c.name === course.name);
    if (exists) {
      setSelectedCourses(selectedCourses.filter((c) => c.name !== course.name));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const getDiscountPercentage = () => {
    const count = selectedCourses.length;
    if (count === 2) return 5;
    if (count === 3) return 10;
    if (count > 3) return 15;
    return 0;
  };

  const totalBeforeDiscount = selectedCourses.reduce((sum, course) => sum + course.fee, 0);
  const discount = (totalBeforeDiscount * getDiscountPercentage()) / 100;
  const totalAfterDiscount = totalBeforeDiscount - discount;

  const handleConfirmSelection = () => {
    const selectedNames = selectedCourses.map((course) => course.name).join(',');
    router.push({
      pathname: '/confirm',
      params: { selectedCourses: selectedNames },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select Courses</Text>

      <Text style={styles.sectionTitle}>6-Month Courses</Text>
      {sixMonthCourses.map((course) => (
        <View key={course.name} style={styles.courseRow}>
          <Text style={styles.courseText}>{course.name} (R{course.fee})</Text>
          <Switch
            value={selectedCourses.some((c) => c.name === course.name)}
            onValueChange={() => handleToggle(course)}
          />
        </View>
      ))}

      <Text style={styles.sectionTitle}>6-Week Short Courses</Text>
      {shortCourses.map((course) => (
        <View key={course.name} style={styles.courseRow}>
          <Text style={styles.courseText}>{course.name} (R{course.fee})</Text>
          <Switch
            value={selectedCourses.some((c) => c.name === course.name)}
            onValueChange={() => handleToggle(course)}
          />
        </View>
      ))}

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total Before Discount: R{totalBeforeDiscount}</Text>
        <Text style={styles.summaryText}>Discount: {getDiscountPercentage()}% (R{discount})</Text>
        <Text style={styles.total}>Total After Discount: R{totalAfterDiscount}</Text>
      </View>

      <TouchableOpacity
        style={[styles.confirmButton, selectedCourses.length === 0 && { backgroundColor: '#ccc' }]}
        onPress={handleConfirmSelection}
        disabled={selectedCourses.length === 0}
      >
        <Text style={styles.confirmText}>Confirm Selection</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#065f46', // Fern green
    marginTop: 20,
    marginBottom: 10,
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 8,
  },
  courseText: {
    fontSize: 16,
    color: '#333',
  },
  summary: {
    marginTop: 30,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#4b5563',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#92400e', // Brown accent
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: '#f59e0b',
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
