import sunIcon from './images/sun3.svg'
import rainyCloudy from './images/rainyCloud2.svg'
import sunnyCloudy from './images/sunnyCloudy.svg'

export const weatherCodes = {
    0: {
      img: sunIcon,
      status: 'Clear Sky'
    },

    1: {
      img: sunnyCloudy,
      status: 'Mainly Clear'
    },
    2: {
      img: sunnyCloudy,
      status: 'Partly Cloudy'
    },
    3: {
      img: sunnyCloudy,
      status: 'Overcast'
    },
    45: {
      img: sunIcon,
      status: 'Fog'
    },
    48: {
      img: sunIcon,
      status: 'Frozen Fog'
    },
    51: {
      img: rainyCloudy,
      status: 'Light Drizzle'
    },
    53: {
      img: rainyCloudy,
      status: 'Moderate Drizzle'
    },
    55: {
      img: rainyCloudy,
      status: 'Dense Drizzle'
    },
    56: {
      img: rainyCloudy,
      status: 'Light Freezing Drizzle'
    },
    57: {
      img: rainyCloudy,
      status: 'Dense Freezing Drizzle'
    },
    61: {
      img: rainyCloudy,
      status: 'Slight Rain'
    },
    63: {
      img: rainyCloudy,
      status: 'Moderate Rain'
    },
    65: {
      img: rainyCloudy,
      status: 'Heavy Rain'
    },
    66: {
      img: rainyCloudy,
      status: 'Light Freezing Rain'
    },
    67: {
      img: rainyCloudy,
      status: 'Heavy Freezing Rain'
    },
    71: {
      img: rainyCloudy,
      status: 'Slight Snowfall'
    },
    73:{
      img:rainyCloudy,
      status:"Moderate Snowfall"
    },
    75:{
      img:rainyCloudy,
      status:"Heavy Snowfall"
    },
    77:{
      img:rainyCloudy,
      status:"Snow grains"
    },
    80:{
      img:rainyCloudy,
      status:"Slight Rain showers"
    },
    81:{
      img:rainyCloudy,
      status:"Moderate Rain Showers"
    },
    82:{
      img:rainyCloudy,
      status:"Violent Rain Showers"
    },
    85:{
      img:rainyCloudy,
      status:"Slight Snow Showers"
    },
    86:{
      img:rainyCloudy,
      status:"Heavy Snow Showers"
    },
    95:{
      img:rainyCloudy,
      status:"Slight Thunderstorm"
    },
    96:{
      img:rainyCloudy,
      status:"Moderate Thunderstorm"
    },
    99:{
      img:rainyCloudy,
      status:"Thunderstorm with hail"
    },
  }