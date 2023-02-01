import matplotlib.pyplot as plt
import numpy as np

import librosa
import librosa.display

a, sr = librosa.load("delete.mp3")
librosa.display.waveshow(a, sr=sr)

wave = np.array(a)
wave_max = max(abs(wave))
print(wave_max)

rms = librosa.feature.rms(y=a)
librosa.display.waveshow(rms, sr=sr)
plt.show()

