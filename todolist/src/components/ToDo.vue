<template>
  <div :class="{ todo: true, pop: todo.id == pop }" @click="trueBlack">
    <div class="text">
      {{ todo.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: [
    'todo',
    'pop',
  ],
  created() {
  },
  methods: {
    trueBlack() {
      if(this.todo.id === this.pop) {
        this.$emit('black', null)
      } else {
        this.$emit('black', this.todo.id)
      }
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.todo {
  transition: all 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  padding: 14px 16px 14px 12px;
  margin-bottom: 16px;
  cursor: pointer;
  background-color: #FFFFFF;
  &.pop {
    transition: all 0.3s;
    z-index: 2;
    transform: scale(1.1);
    &:hover {
      background-color: #FFFFFF;
    }
  }
  & > .text {
    color: #1C1C1C;
    font-size: 20px;
    font-weight: 500;
  }
  &:hover {
    background-color: #EEEEEE;
  }
}
</style>
