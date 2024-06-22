<template>
  <a class="microphone-logo-container" href="#" @click="startSpeechRecog">
    <img
      src=".//../assets/free-microphone-icon-342-thumb.png"
      alt="microphone-logo"
      width="20"
      height="20"
      class="microphone-logo"
    />
  </a>
</template>

<script setup>
import { ref } from 'vue'

const config = ref({
  runtimeTranscription: '',
  transcription: [],
  language: 'ru'
})

const emit = defineEmits(['startSpeechRecog'])

function startSpeechRecog() {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  const recog = new window.SpeechRecognition()
  recog.lang = config.value.language
  recog.interimResults = true

  recog.addEventListener('result', (event) => {
    const text = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('')
    config.value.runtimeTranscription = text
  })

  recog.addEventListener('end', () => {
    config.value.transcription.push(config.value.runtimeTranscription)
    config.value.runtimeTranscription = ''
    recog.stop()
    emit('startSpeechRecog', config)
  })
  recog.start()
}
</script>
<style>
.microphone-logo-container {
  display: flex;
}
.microphone-logo {
  display: flex;
  align-self: center;
}
</style>
