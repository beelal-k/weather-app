import sunIcon from './images/sun3.svg'
import cloudy from './images/cloudy.svg'
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
      img: sunIcon,
      status: 'Slight Snowfall'
    },
    73:{
      img:sunIcon,
      status:"Moderate Snowfall"
    },
    75:{
      img:sunIcon,
      status:"Heavy Snowfall"
    },
    77:{
      img:sunIcon,
      status:"Snow grains"
    },
    80:{
      img:sunIcon,
      status:"Slight Rain showers"
    },
    81:{
      img:sunIcon,
      status:"Moderate Rain Showers"
    },
    82:{
      img:sunIcon,
      status:"Violent Rain Showers"
    },
    85:{
      img:sunIcon,
      status:"Slight Snow Showers"
    },
    86:{
      img:sunIcon,
      status:"Heavy Snow Showers"
    },
    95:{
      img:sunIcon,
      status:"Slight Thunderstorm"
    },
    96:{
      img:sunIcon,
      status:"Moderate Thunderstorm"
    },
    99:{
      img:sunIcon,
      status:"Thunderstorm with hail"
    },
  }