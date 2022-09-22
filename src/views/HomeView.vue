<template>
  <div class="home">
    <div class="text-white">
      <TweetItem v-for="tweet in tweets" :key="tweet._id" :tweet="tweet" />
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import Tweets from '../tweets';
  import TweetItem from '@/components/TweetItem.vue';

  export default {
    name: "HomeView",
    setup() {
        const tweets = ref(Tweets);
        return {
            tweets, TweetItem
        };
    },
    components: { TweetItem }
}
</script>
