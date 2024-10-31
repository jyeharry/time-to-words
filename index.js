// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight'
  }
  if (time === '12:00') {
    return 'midday'
  }
  const [hour, minute] = time.split(':')
  let adjustedHour = ''
  adjustedHour = minute > '30' ? String(Number(hour) + 1) : hour
  let finalHour = numToWords[adjustedHour]

  return `${numToWords[60 - Number(minute)]} ${minute > 30 ? 'to' : 'past'} ${finalHour}`
}

module.exports = { convertTimeToWords }

const numToWords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty-one',
  22: 'twenty-two',
  23: 'twenty-three',
  24: 'twenty-four',
  25: 'twenty-five',
  26: 'twenty-six',
  27: 'twenty-seven',
  28: 'twenty-eight',
  29: 'twenty-nine',
  30: 'half',
}
