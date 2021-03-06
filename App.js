import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Input, Button, Icon, colors } from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTIme] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedDate || time;
    setTime(currentTime);
  };

  const showDatePicker = () => {
    setShowDate(!showDate);
  };

  const showTimePicker = () => {
    setShowTime(!true);
  };

  return (
    <ScrollView style={styles.container}>
      <Input
        placeholder='Search' 
        label="Departing from"
        rightIcon={{ type: 'font-awesome', name: 'search' }}
      />
       <Input
        placeholder='Search' 
        label="Going to"
        rightIcon={{ type: 'font-awesome', name: 'search' }}
      />
      <Button
        title={"Date " + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() }
        type="clear"
        iconRight
        titleStyle={styles.label}
        icon={{ type: 'font-awesome', name: 'chevron-down' }}
        buttonStyle={{justifyContent: "space-between"}}
        onPress={showDatePicker}
      />
      {showDate && <RNDateTimePicker value={date} mode="date" style={{ width: "100%" }} onChange={onDateChange} />}
      <Button
          title={"Time " + time}
          type="clear"
          iconRight
          titleStyle={styles.label}
          icon={{ type: 'font-awesome', name: 'chevron-down' }}
          buttonStyle={{justifyContent: "space-between"}}
          onPress={showTimePicker}
        />
      {showTime && <RNDateTimePicker value={time} mode="time" style={{ width: "100%" }} />}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  label: {
    color: colors.grey3, 
    fontWeight: "bold",
    fontSize: 16,
  }
});

