<template>
  <span>
      {{ days }} days {{ hours }} hrs
  </span>
</template>

<script>
export default {
    computed:{
        days(){
            return Math.floor((this.duration/1000) / (3600 * 24))
        },
        hours(){
            return Math.floor(((this.duration/1000) - (this.days*3600 * 24)) / 3600)
        },
        minutes(){
            let convertedduration = 0
            convertedduration = this.duration / 1000
            return Math.floor(convertedduration / 60)
        },
        seconds(){
            let seconds = this.duration % 60
            let isSingleDigit = seconds.toString().length == 1
            if(isSingleDigit){
                seconds = `0${seconds}`
            }
            return seconds
        }
    },
    props: {
        duration: Array,
    }
}
</script>
