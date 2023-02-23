<template>
  <div class="nav-bar">
    <div class="nav-bar__logo">
      <img src="https://impactwebagency.com/wp-content/uploads/2022/05/banner-deliveboo.png" alt="logo">
    </div>
    <div class="nav-bar__input">
      <input type="text" v-model="store.input" placeholder="Ricerca ristorante o prodotto "/>
    </div>
    <div class="nav-bar__links">
      <ul>
        <li class="nav-bar__links__cart">
          <a href=""><span><i class="fa-solid fa-cart-shopping"></i></span></a>
        </li>
        <li class="nav-bar__links__login">
          <a href=""><span>Accedi</span></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { store } from "../../../store.js";
export default {
  name: "NavbarHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header-bg-color);

  .nav-bar__logo,.nav_bar__links{
    width: 25%;
    height: 100%;
  }
  .nav-bar__input{
    width: 50%;
    height: 100%;

    input{
      width: 100%;
    }
  }
}
.nav-bar__links{

  ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    margin:0;

    li{
      background-color: var(--btn-bg-color); 
      border: 1px solid black;
      border-radius:5px;
      text-align: center;
      
      a{
        text-decoration: none;
        color:var(--btn-text-color);
      }
    }
  }
}
img{
  height: 50px;
  filter: invert(0.1);
  object-fit:cover;
  }

// media query
@media screen and (max-width:600px){
  .nav-bar{
    padding:20px 10px;
    .nav-bar__logo{
        display: none;
    }
    .nav-bar__input{
      
      input{
        padding: 5px 0px;
        border-radius: 10px;
      }
    }
    .nav-bar__links{
      
      li{
        margin: 0px 20px;
        padding: 5px 10px;
      }
    }
  }
}
@media screen and (min-width:601px) and (max-width:1300px){
  .nav-bar{
    padding: 20px 10px;
    .nav-bar__logo{
        padding: 0px 20px;
    }
    .nav-bar__input{
      
      input{
        padding: 10px 0px;
        border-radius: 10px;
      }
    }
    .nav-bar__links{
      
      li{
        margin: 0px 10px;
        padding: 10px 20px;
      }
    }
  }
}
@media screen and (min-width:1301px) and (max-width: 1900px){
  
  .nav-bar{
    padding: 20px 10px;
    .nav-bar__logo{
      padding: 0px 20px;
    }
    .nav-bar__input{
      
      input{
        padding: 10px 10px;
        border-radius: 10px;
      }
    }
    .nav-bar__links{
      
      li{
        margin: 0px 20px;
        padding: 10px 40px;
      }
    }
  }
}
</style>
