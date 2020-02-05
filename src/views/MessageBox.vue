<template>
  <v-card max-width="500" class="mx-auto">
    <v-toolbar dark color="primary">
      <v-btn icon @click="goToHome">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>消息</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group v-model="selected" multiple active-class="pink--text">
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                <v-icon v-if="!active" color="grey lighten-1">mdi-star_border</v-icon>

                <v-icon v-else color="yellow">mdi-star</v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'MessageBox',
  data: () => ({
    selected: [2, 3],
    items: [
      {
        action: '15 min',
        headline: 'Brunch this weekend?',
        title: 'Ali Connors',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ]
  }),

  methods: {
    goToHome () {
      this.$router.push('/')
    }
  },

  mounted () {
    this.$store.dispatch('updateMessages', 0)
  }
}
</script>

<style scoped>
</style>
