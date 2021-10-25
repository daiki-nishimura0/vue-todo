<template>
<v-container style="max-width:800px">

    <v-system-bar
      color="blue darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar
      dark
      color="blue"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Todo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>


<v-card
  class="mx-a"
    outlined
>
    <v-text-field 
       v-model="newTask"
        label="Todoを入力してね"
        @keydown.enter="create"
        filled 
        outlined
        single-line 
        >
      <template v-slot:append>
        <v-fade-transition>
          <v-icon
            v-if="newTask"
            @click="create"
          >
       mdi-pencil
          </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <h2 class="text-h4 success--text pl-4">
      Tasks:
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4"></v-divider>

    <v-row
      class="my-1"
      align="center"
    >
      <strong class="mx-4 info--text text--darken-2">
        未完了: {{ remainingTasks }}
      </strong>

      <strong class="mx-4 success--text text--darken-2">
        完了: {{ completedTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        :value="progress"
        class="mr-4"
      ></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
      >
      
        <template v-for="(task, i) in tasks">
          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          ></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                :color="task.done && 'grey' || 'primary'"
              >
                <template v-slot:label>
                  <div
                    :class="task.done && 'grey--text' || 'primary--text'"
                    class="ml-4"
                    v-text="task.text"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon
                v-if="task.done"
                color="success"
              >
                mdi-check
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
</v-card>
    </v-container>
</template>

<script>
  export default {
      name: 'ListView',

    data: () => ({
        // 一覧表示される初期タスクの設定
      tasks: [
        {
          done: false,
          text: 'task1',
        },
        {
          done: false,
          text: 'task2',
        },
      ],
      newTask: null,
    }),

    computed: {
    // 完了タスクのカウント
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      // 完了割合いをサークルに表示
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      // 未完了タスク数のカウント
      remainingTasks () {
          // タスク数から完了タスクを引く処理
        return this.tasks.length - this.completedTasks
      },
    },

    methods: {
        // 新しいTodoを作成して追加する
      create () {
          // 追加ボタンが押された時以下のしょりを行う
        this.tasks.push({
            // 未完了状態
          done: false,
            // newTaskに追加する
          text: this.newTask,
        })
        // 追加したらテキストフィールドの中を空にする
        this.newTask = null
      },
    },
  }
</script>