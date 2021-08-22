<template>
  <div class="todolist">
    <div class="container">
      <div class="clock"> 
        <div class="time"> {{ time }} </div>
        <div class="oz"> {{ timeCheck }} </div>
      </div>
      <div :class="{ header: true, click: clickToDo }">
        <div class="counting">
          <div class="text" @click="clearTodo">
            {{ dummyList.length }}
          </div>
        </div>
        <div class="fade right" />
      </div>
      <div class="body">
        <div class="todos" id="todos">
          <div
            :class="{ 'black-todos': true, click: clickToDo }" />
          <ToDo
              v-for="list in dummyList"
              :key="list.content"
              :todo="list"
              :pop="pop"
              @black="onClickBlack">
            </ToDo>
        </div>
        <div class="blur-wrap">
          <div :class="{ blur: true, click: clickToDo }" />
        </div>
        <div :class="{ 'black-body': true, click: clickAdd }" />
        <div :class="{ 'input-todo': true, click: clickAdd }">
          <input type="text" v-model="todoContent" value="" @keypress.enter="addTodo"/>
          <img src="@/assets/delBtn.svg" @click="todoContent = ''">
        </div>
      </div>
      <div :class="{ footer: true, click: clickAdd, clickToDo }">
        <div
           :class="{ button: true, click: clickAdd }"
           @click="clickAdd = !clickAdd">
          <div :class="{box: true, row: true, click: clickToDo }" />
          <div :class="{box: true, column: true, click: clickToDo }" />
        </div>
        <div :class="{ options: true, click: clickToDo }">
          <div class="option green" @click="clickToDo = false, pop = null">
            <img src="@/assets/complete.svg">
          </div>
          <div class="option blue" @click="editTodo, clickToDo = false, pop = null">
            <img src="@/assets/edit.svg">
          </div>
          <div class="option red" @click="deleteTodo, clickToDo = false, pop = null">
            <img src="@/assets/delete.svg" @click="deleteTodo">
          </div>
        </div>
        <div class="fade left" />
      </div>
    </div>
  </div>
</template>

<script>
import ToDo from '@/components/ToDo'
var scrollCheck = false;
const dummyList = [
  {
    id: 0,
    content: '꽃신 신기',
  }
]

export default {
  name: 'Todolist',
  components: {
    ToDo
  },
  mounted() {
    setInterval(this.updateTime, 1000); // 1초마다 시간 갱신
  },
  created() {
    console.log('created');
    for(let i = 0; i<localStorage.length; i++){
      if(localStorage.key(i) !== "loglevel:webpack-dev-server") {
        var item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        const addItem = {
          id: item.id,
          content: item.content
        };
        this.dummyList.push(addItem);
      }
        console.log(dummyList[i].content);
    }
  },
  methods: {
    clearTodo() {
      localStorage.clear();
    },
    onClickBlack(todoId) {
      
      this.clickToDo = true;
      if(todoId === null) {
        this.clickToDo = false;
      }
      this.pop = todoId;
      var popId = todoId;
      console.log(popId);
    },
    updateTime() {
      var cd = new Date();
      var Hours = cd.getHours();
      if(Hours > 11) {
        this.timeCheck = "PM"; 
        Hours -= 12;
      } else {
        this.timeCheck = "AM"; 
      }
      if(Hours == 0) {
        Hours = 12;
      }
      this.time =
        this.zeroPadding(Hours, 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2); 
      if(scrollCheck){
        document.getElementById('todos').scrollTop = document.getElementById('todos').scrollHeight;
        scrollCheck = false;
      } else{
        scrollCheck = false;
        }
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
    addTodo(){
      const todoContent = {
        id: this.dummyList.length,
        content: this.todoContent,
      };
      localStorage.setItem(this.todoContent, JSON.stringify(todoContent));
      this.dummyList.push(todoContent);
      this.clickAdd = false;
      this.todoContent = "";
      scrollCheck = true;
      
    },
    deleteTodo(){
      var index = this.todoId;
      console.log(index);
    },
    editTodo(){
    alert("edit");
    console.log("edit");
    },
  },
  data() {
    return {
      dummyList,
      clickToDo: false,
      pop: null,
      clickAdd: false,
      newTodoText: '',
      todoContent: "",
      time: "",
      timeCheck: "AM",
      scrollCheck: false,
      popId: "", 
    }
  },
}
</script>

<style lang="scss" scoped>
.todolist {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1C1C1C;
  & > .container {
    display: flex;
    flex-direction: column;
    width: 128px;
    position: relative;
    animation: width-increase 1s forwards 1s;
    & > .clock {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      animation: slideUp 2s forwards 4s;
      opacity: 0;
      position: absolute;
      top: -80px;
      left: 0;
      right: 0;
      color: white;
      font-weight: bold;
      font-family: 'seoulNamsanM', sans-serif;
      & > .time {
        font-size: 80px;
      }
      & > .oz {
        font-size: 32px;
        animation: open-opacity 1s infinite alternate cubic-bezier(0, 0, 0.5, 1);
        opacity: 1;
        transform: translate(0px,-16px);
      }
    }
    & > .header {
      animation: header-move 1s forwards;
      transition: all 0.3s;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      height: 60px;
      background-color: #FFB800;
      border-radius: 16px 16px 0 0;
      &.click {
        transition: all 0.3s;
        background-color: #333333;
        & > .counting {
          transition: all 0.3s;
          background-color: #303030;
          & > .text {
            transform: all 0.3s;
            opacity: 0;
          }
        }
      }
      & > .counting {
        transition: all 0.3s;
        animation: open-opacity 1s forwards 3s;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 16px;
        width: 32px;
        height: 32px;
        background-color: #7E4216;
        opacity: 0;
        & > .text {
          transform: all 0.3s;
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 500;
          opacity: 1;
        }
      }
    }
    & > .body {
      animation: body-open 1s forwards 2s;

      height: 0;
      display: flex;
      flex-direction: column;
      background-color: #CFCFCF;
      position: relative;
      z-index: 1;
      & > .todos {
        animation: open-opacity 1s forwards 3s;
        opacity: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow-y: scroll;
        padding: 16px 0 0 16px;
      }
      & > .blur-wrap {
        animation: open-opacity 1s forwards 3s;
        opacity: 0;
        & > .blur {
          transition: all 0.5s;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 24px;
          background: linear-gradient(to bottom, #CFCFCF, #CFCFCF20);
          &.click {
            opacity: 0;
          }
        }
      }
      & > .black-body {
        transition: all 0.5s;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        pointer-events: none;
        &.click {
          transition: all 0.5s;
          background-color: #000000B0;
          pointer-events: auto;
          backdrop-filter: blur(2px);
          z-index: 10;
        }
      }
      & > .input-todo {
        transition: all 0.5s;
        opacity: 0;

        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #FFFFFF;
        padding: 14px 16px 14px 12px;
        margin: 0 16px;
        border-radius: 16px;
        transform: translateY(50px) scale(0.01) rotate(45deg);
        &.click {
          opacity: 1;
          transition: all 0.5s;

          z-index: 11;
          transform: translateY(-10px) scale(1.05) rotate(0);
        }
        & > input {
          border: none;
          outline: none;
          background-color: #FFFFFF;
          color: #1C1C1C;
          font-size: 20px;
          font-weight: 500;
        }
        & > img {
          cursor: pointer;
        }
      }
    }
    & > .footer {
      transition: all 0.5s;
      animation: footer-move 1s forwards;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 60px;
      background-color: #00A3FF;
      border-radius: 0 0 16px 16px;
      z-index: 11;
      &.click {
        transition: all 0.5s;
        background-color: #FB0404;
      }
      &.clickToDo {
        transition: all 0.3s;
        background-color: #333333;
      }
      & > .button {
        transition: all 0.5s;
        animation: open-opacity 1s forwards 3s;
        opacity: 0;

        display: flex;
        flex-direction: row;
        width: 40px;
        height: 40px;
        position: relative;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        &:hover {
          transition: all 0.3s;
          transform: rotate(180deg);
          width: 48px;
          height: 48px;
        }
        &:active {
          & > .box {
            background-color: #3596CB;
          }
        }
        & > .box {
          transition: all 0.3s;

          position: absolute;
          top: 50%;
          left: 50%;
          background-color: #45BDFF;
          transform: translate(-50%, -50%);
          border-radius: 4px;
          &.row {
            width: 100%;
            height: 12px;
          }
          &.column {
            width: 12px;
            height: 100%;
          }
          &.click {
            background-color: #333333;
            pointer-events: none;
          }
        }
        &.click {
          transition: all 0.5s;
          transform: rotate(225deg);
          & > .box {
            transition: all 0.5s;
            background-color: #FF4545;
          }
          &:active {
            & > .box {
              background-color: #C92222;
            }
          }
        }
      }
      & > .options {
        transition: all 0.5s;
        opacity: 0;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        pointer-events: none;

        height: 48px;
        width: 15%;
        &.click {
          opacity: 1;
          transition: all 0.5s;

          width: 70%;
          z-index: 11;
          pointer-events: auto;
        }
        & > .option {
          width: 48px;
          height: 48px;

          position: absolute;
          top: 0;
          bottom: 0;

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          cursor: pointer;
          &.green {
            left: 0;
            background-color: #06CD32;
          }
          &.blue {
            background-color: #106DFA;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          &.red {
            right: 0;
            background-color: #E91919;
          }
        }
      }
    }
  }
}

.fade {
  animation: fade 1.2s forwards;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  &.right {
    background: linear-gradient(to right, rgba(28, 28, 28, 0), rgba(28, 28, 28, 1));
    border-radius: 16px 16px 0 0;
  }
  &.left {
    background: linear-gradient(to left, rgba(28, 28, 28, 0), rgba(28, 28, 28, 1));
    border-radius: 0 0 16px 16px;
  }
}

.black-todos {
  transition: all 0.5s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
  &.click {
    transition: all 0.5s;
    background-color: #000000B0;
    pointer-events: auto;
    backdrop-filter: blur(2px);
  }
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes header-move{
  from {
    transform: translateX(64px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes footer-move{
  from {
    transform: translateX(-64px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes width-increase {
  from {
    width: 128px;
  }
  to {
    width: 320px;
  }
}

@keyframes body-open {
  from {
    height: 0;
  }
  to {
    height: 340px;
  }
}

@keyframes open-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideUp {
  from{
    opacity: 0;
    transform: translateY(50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
