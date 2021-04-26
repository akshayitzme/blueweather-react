import React from "react";

const ReportCard = (props) => {
  let temp= props.temp;
  let tips=[]
  const generateTip= ()=>{

    // Temp Tips
    if(props.temp >= 45){
      tips.push(`Dangerous Heat 🔥 . It's better to not go outside`)
    }else if(props.temp >=32){
      tips.push(`It's very hot here 🥵 .. Beware of Dehydration 💧 `)
    }else if(props.temp >=17){
      tips.push('😊 Warm Climate 🏖️ ')
    }else if(props.temp >=4){
      tips.push('Cool Climate Bruh 😉 😎')
    }else if(props.temp <=3){
      tips.push(`Freezing Cold 🥶`)
    }

    // Rain
    if(props.desc.toLowerCase().includes('rain')){
      tips.push(`Its raining 🌧️ don't forget to take an Umbrella 🌂`)
    }

    // Snow
    if(props.desc.toLowerCase().includes('snow')){
      tips.push('❄️ Snow is here 🥶 !')
    }

    // Cloudy
    if(props.desc.toLowerCase().includes('cloud')){
      tips.push(`Hi 👋 clouds ☁️ 😁`)
    }

    // Wind
    if(props.ws >= 7){
      tips.push(`Speedy Winds 💨 .. don't fly 🤸‍♂️ hehe 😜`)
    }else if(props.ws >=1.5){
      tips.push(`Gentle Breeze 🍃`)
    }
    else if(props.ws <=1.5){
      tips.push('Enjoy the Light Breeze 🍃')
    }

    // Air Quality
    if(props.aqi > 151){
      tips.push('Pollutted air ❌ , better not to go outside ☠️ 🚷')
    }else if(props.aqi>100){
      tips.push('aww air is not much pure ⛔️ .. consider wearing a mask 😷')
    }else if(props.aqi>50){
      tips.push('Good Air 🤘, less polluted.')
    }
    else if(props.aqi <50){
      tips.push('Fresh Air 🍃. Breathe well 😊')
    }
  }

  generateTip()
  return (
  <div>
    {props.isInit ?

    (<div className="bg-5 fw-bold rounded p-2 mt-2 clr-3">
    
      {
        tips.map(item=>{
          return <li>{item}</li>
        })
      }
      
    </div> )
    
    : ``}
  </div>);
};

export default ReportCard;
