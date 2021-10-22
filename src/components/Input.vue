<template>
    <v-container style="max-width: 500px">
        <v-text-field
            v-model="newTask"
            label="タスクを入力してね"
            solo
            @keydown.enter="create"
        >
        </v-text-field>
    </v-container>
</template>

<script>
export default {
  name: 'Input',

  data: ()=>({
      
  })
}
</script>