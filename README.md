# HuiYang-Glitch-Slicer
This plugin is a simple slicer that allows the addition of glitch and granular effect:
## How to Use
copy all the files to /User Library/Presets/Instruments/Max Instrument, and then you will find it in max in ableton live

## Major Modules
### Global Speed Control
1. Pitch by Note Mode: Pitch is determined by the note's high or low, affecting the pitch of the slice.
2. Manual Speed Control: Allows for manual speed adjustments, including reverse playback.
3. Random Speed on Specified Beats: Speed can be randomized at specific beats.

### Global Pitch Control
1. Formant Sound Control: Adjusts the sound's formant.
2. Zero Crossing Change: Between the Lower Pitch and Higher Pitch Button, there can be a dramatic change because the audio switches to the pitch set by another button whenever one button becomes zero.
3. Pitchshift Mode And Quality

### Loop Control
1. Normal Mode: MIDI note control over different slices.
2. Glitch Mode: Offset grid allows for specifying or random playback of different slices, creating a granular effect. The Offset values can also be applied to velocity or pitch to create variations in volume or pitch.


## Implementation  
outermost patcher
![image](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/18d045d1-209d-408c-bc0a-36f8e30874a3)
![image](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/0c5b964b-bac3-4641-b38a-b1e419b9223c)
![image](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/857dd243-bc96-4aa2-85a9-761792f1890d)


bpatcher for global speed control
![image](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/a584a0d1-5141-46e9-99a3-7e92990ea92e)


bpatcher for global pitch control
![image](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/4db96650-47a5-4d04-9b20-2865751b4d69)


bpatcher for playback and loop control
![image](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/8e5f19f3-7c3d-4762-a1f9-f5eaccbc6628)
![image](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/52254003-49d4-4583-9b46-b4c807cf0f2c)


bpatcher for grid
![image](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/d7d388a9-641b-4041-bb4e-389441775dc7)


bpatcher for glitch slice scanning
![image](https://github.com/GrayOxygen/HuiYang-Glitch-Slicer/assets/5812140/3cf73d11-cd05-437e-9a5a-e829caec5172)


