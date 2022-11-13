<template>
  <Suspense>
    <template #default>
      <ListPostsByTopic/>
    </template>
    <template #fallback>
      <div>Loading….</div>
    </template>
  </Suspense>
</template>

<script>

import ListPostsByTopic from "./ListPostsByTopic.vue";

export default {
  name: "TopicListing",

  components: { ListPostsByTopic }
}

</script>
