import React, { useState } from 'react';
import StyleGallery from '../components/StyleGallery';
import { classicWands } from '../wandData/classic';
import { naturalWands } from '../wandData/natural';
import { crookedSpiralWands } from '../wandData/crookedSpiral'
import { notchedWands } from '../wandData/notched'
import { ringedWands } from '../wandData/ringed'
import { softSpiralWands } from '../wandData/softSpiral'
import { spiralWands } from '../wandData/spiral'
import { stalkWands } from '../wandData/stalk'
import Aside from './Aside';
import '@fontsource/aclonica';

export default function Store() {
  const [wand, setWand] = useState('');
  const [wandStyle, setWandStyle] = useState([]);
  const [labelName, setLabelName] = useState('');
  const [hoveredWandLabel, setHoveredWandLabel] = useState(null);




  const classicHandler = () => {
    const wands = classicWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />
    ));
    setWandStyle(wands);
    setWand(classicWands[0]);
  };

  const naturalHandler = () => {
    const wands = naturalWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />
    ));
    setWandStyle(wands);
    setWand(naturalWands[0]);
  };;

  const notchedHandler = () => {
    const wands = notchedWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(notchedWands[0]);
  };

  const ringedHandler = () => {
    const wands = ringedWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(ringedWands[0]);
  };

  const softSpiralHandler = () => {
    const wands = softSpiralWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(softSpiralWands[0]);
  };

  const spiralHandler = () => {
    const wands = spiralWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(spiralWands[0]);
  };

  const stalkHandler = () => {
    const wands = stalkWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(stalkWands[0]);
  };

  const crookedSpiralHandler = () => {
    const wands = crookedSpiralWands.map((wand) => (
      <StyleGallery
        key={wand.label}
        wand={wand}
        setWand={setWand}
        setLabelName={setLabelName}
        hoveredWandLabel={hoveredWandLabel}
        setHoveredWandLabel={setHoveredWandLabel}
      />));
    setWandStyle(wands);
    setWand(crookedSpiralWands[0]);
  };

  const [options, setOptions] = useState({ core: '', length: '', flexibility: '' })

  const optionsHandler = (data) => {

    let keyName = Object.keys(data)[0]
    let value = Object.values(data)[0]

    if (keyName === 'core') {
      setOptions({ ...options, core: value })
    } else if (keyName === 'flexibility') {
      setOptions({ ...options, flexibility: value })
    } else if (keyName === 'length') {
      setOptions({ ...options, length: value })
    }

    console.log(options.length, options.flexibility)
  }
  const checkWand = () => {
    var randNum = Math.random();

    if (randNum < 0.9 && wand && labelName && options) {
      console.log('YES')
    } else {
      console.log('NO')
    }
  }




  return (
    <>
      <div style={{ fontFamily: 'aclonica' }}>
        <h1>Store</h1>
        <div onClick={classicHandler}>Classic</div>
        <div onClick={naturalHandler}>Natural</div>
        <div onClick={crookedSpiralHandler}>Crooked Spiral</div>
        <div onClick={notchedHandler}>Notched</div>
        <div onClick={ringedHandler}>Ringed</div>
        <div onClick={softSpiralHandler}>Soft Spiral</div>
        <div onClick={spiralHandler}>Spiral</div>
        <div onClick={stalkHandler}>Stalk</div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>{wandStyle}</div>
        <p>Wood type: {hoveredWandLabel || labelName}</p>


      <div>
        <img src={wand?.src || ''} alt={wand?.label || ''} />
      </div>


      <Aside optionsHandler={optionsHandler} />
      <button variant='contained' onClick={optionsHandler}>Save options</button>



      <button onClick={checkWand}>Is this your wand?</button>
      </div>

    </>

  );
}
