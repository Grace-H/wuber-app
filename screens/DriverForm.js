import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Input, Button, Header, colors } from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function DriverForm() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [returnTime, setReturnTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showReturnTime, setShowReturnTime] = useState(false);
  const [rtChecked, setrtChecked] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  const onReturnTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || returnTime;
    setReturnTime(currentTime);
  };

  const showReturnTimeOption = () => {
    if(rtChecked){
      setShowReturnTime(false);
    }
    setrtChecked(!rtChecked);
  };

  const showReturnTimePicker = () => {
    setShowReturnTime(!showReturnTime);
  }

  const showDatePicker = () => {
    setShowDate(!showDate);
    setShowTime(false);
  };

  const showTimePicker = () => {
    setShowTime(!showTime);
    setShowDate(false);
  };

  return (
    
    <View style={styles.container}>
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
        title={"On\t\t" + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() }
        type="clear"
        iconRight
        titleStyle={styles.label}
        icon={{ type: 'font-awesome', name: 'chevron-down' }}
        buttonStyle={{justifyContent: "space-between"}}
        onPress={showDatePicker}
      />
      {showDate && <RNDateTimePicker value={date} mode="date" style={{ width: "100%" }} onChange={onDateChange} />}
      <Button
          title={"At\t\t" + (time.getHours() - 12 <= 0 ? time.getHours() : time.getHours() - 12) + ':' + time.getMinutes() + " " + (time.getHours() - 12 <= 0 ? "AM" : "PM")}
          type="clear"
          iconRight
          titleStyle={styles.label}
          icon={{ type: 'font-awesome', name: 'chevron-down' }}
          buttonStyle={{justifyContent: "space-between"}}
          onPress={showTimePicker}
        />
      {showTime && <RNDateTimePicker value={time} mode="time" style={{ width: "100%" }} onChange={onTimeChange} />}
      <Input
        placeholder='1 - 10' 
        label="Passenger Seats"
      />
      <Button
        title={"Round Trip?" }
        type="clear"
        iconRight
        titleStyle={styles.label}
        icon={{ type: 'font-awesome', name: (rtChecked ? 'check-square-o' : 'square-o' )}}
        buttonStyle={{justifyContent: "space-between"}}
        onPress={showReturnTimeOption}
      />
      {rtChecked && <Button
          title={"\t\tReturn Time\t\t" + (returnTime.getHours() - 12 <= 0 ? returnTime.getHours() : returnTime.getHours() - 12) + ':' + returnTime.getMinutes() + " " + (returnTime.getHours() - 12 <= 0 ? "AM" : "PM")}
          type="clear"
          iconRight
          titleStyle={styles.label}
          icon={{ type: 'font-awesome', name: 'chevron-down' }}
          buttonStyle={{justifyContent: "space-between"}}
          onPress={showReturnTimePicker}
        />}
      {showReturnTime && <RNDateTimePicker value={returnTime} mode="time" style={{ width: "100%" }} onChange={onReturnTimeChange} />}
      <Button
        title={"Submit" }
        iconRight
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  label: {
    color: colors.grey3, 
    fontWeight: "bold",
    fontSize: 16,
  }
});

