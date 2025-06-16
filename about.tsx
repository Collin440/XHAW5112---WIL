import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Empowering the Nation</Text>

      <Text style={styles.text}>
        Empowering the Nation was founded by Precious Radebe with a mission to provide practical skills
        training to domestic workers and gardeners in South Africa. Our goal is to uplift individuals by
        equipping them with real-world abilities that open doors to employment and personal growth.
      </Text>

      <Text style={styles.text}>
        We offer two main types of programs:
      </Text>

      <View style={styles.list}>
        <Text style={styles.bullet}>• 6-Month Learnerships (First Aid, Life Skills, Landscaping, Sewing)</Text>
        <Text style={styles.bullet}>• 6-Week Short Skills Courses (Child Minding, Cooking, Garden Maintenance)</Text>
      </View>

      <Text style={styles.text}>
        All our courses are designed with hands-on learning, guided mentorship, and community support.
      </Text>

      <Text style={styles.text}>
        We believe in the power of education to break cycles of poverty and empower people to create
        better futures for themselves and their families.
      </Text>

      <Text style={styles.signature}>– Precious Radebe, Founder</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 14,
    lineHeight: 22,
  },
  list: {
    marginBottom: 16,
  },
  bullet: {
    fontSize: 16,
    color: '#374151',
    paddingLeft: 8,
    marginBottom: 8,
  },
  signature: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#065f46',
    marginTop: 20,
    textAlign: 'right',
  },
});
