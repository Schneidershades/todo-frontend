<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
::selection{
  color: #ffff;
  /*background: rgb(142, 73, 232);*/
}
body{
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
  padding: 10px;
  /*background: linear-gradient(to bottom, #68EACC 0%, #497BE8 100%);*/
}
.wrapper{
  background: rgb(246 247 249);
  max-width: 400px;
  width: 100%;
  margin: 120px auto;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.header{
  color: #212e52;
  font-family: 'Poppins', sans-serif;
}
.wrapper header{
  font-size: 30px;
  font-weight: 600;
}
.wrapper .inputField{
  margin: 20px 0;
  width: 100%;
  display: flex;
  height: 45px;
}
.inputField input{
  width: 85%;
  height: 100%;
  outline: none;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 17px;
  padding-left: 15px;
  transition: all 0.3s ease;
}
.inputField input:focus{
  border-color: #bcc7e4;
}
.inputField button{
  width: 150px;
  height: 100%;
  border: none;
  color: #fff;
  margin-left: 0px;
  font-size: 15px;
  outline: none;
  background: #48919e;
  /*cursor: pointer;*/
  border-radius: 3px;
  transition: all 0.3s ease;
}
.inputField button:hover,
.footer button:hover{
  opacity: 0.6;
}
.inputField button.active{
  opacity: 1;
  pointer-events: auto;
}

.delete{
  float: right;
  width: 80px;
  height: 100%;
  border: none;
  color: #fff;
  margin-left: 0px;
  font-size: 15px;
  outline: none;
  background: #f17167;
  border-radius: 3px;
  /*transition: all 0.3s ease;*/
  font-family: 'Poppins', sans-serif;
}


.wrapper .todoList{
  max-height: 250px;
  overflow-y: auto;
}
.todoList li{
  position: relative;
  list-style: none;
  height: 45px;
  line-height: 45px;
  margin-bottom: 20px;
    /*background: #f2f2f2;
    border-radius: 3px;
    padding: 0 15px;
    cursor: default;
    overflow: hidden;*/
  }

  .todoList li:after {
    content: "";
    display: block;
    height: 1px;
    margin-top: 4px;
    background: #bcc7e4;
  }

  .faint {
    cursor: pointer;
    opacity: 0.6;
    pointer-events: none;
  }

  /*.footer button{
    padding: 6px 10px;
    border-radius: 3px;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    margin-left: 5px;
    background: #8E49E8;
    cursor: pointer;
    user-select: none;
    opacity: 0.6;
    pointer-events: none;
    transition: all 0.3s ease;
  }*/

  .todoList li .icon{
    position: absolute;
    right: -45px;
    background: #e74c3c;
    width: 45px;
    text-align: center;
    color: #fff;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .todoList li:hover .icon{
    right: 0px;
  }
  .wrapper .footer{
    display: flex;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
  }
  .footer button{
    padding: 6px 10px;
    border-radius: 3px;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    margin-left: 5px;
    background: #8E49E8;
    cursor: pointer;
    user-select: none;
    opacity: 0.6;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  .footer button.active{
    opacity: 1;
    pointer-events: auto;
  }
</style>
