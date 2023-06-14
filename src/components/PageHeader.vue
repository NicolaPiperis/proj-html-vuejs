<script>
import {store} from "../store.js";
  export default {
    name : "PageHeader",
    data () {
      return{
        store
      }
    },
    props: {
      details: Object 
    }
  }
</script>

<template>
  <!-- PARTE INIZIALE DELLA PAGINA -->
  <header>

    <!-- CONTENITORE PRINCIPALE -->
    <nav class="container">

      <!-- PRIMA COMPONENTE DELL'HEADER / VOCI DI MENU -->
      <!-- LISTA VOCI DI MENU -->
      <ul class="menu">

        <li :class="(idxHeader === 1)? 'dropdown' : ''"
        v-for="(detail, idxHeader) in details" :key="idxHeader">

          <a class="active-menu" href="#">{{ detail }}</a>
          <a href="#">
            <i class="fa-solid fa-chevron-down active-menu" style="color: #000000;"></i>
          </a>
          
          <div class="dropdown-content">
            
            <ul>
              <li v-for="(dropdownContent, idxDropdownHeader) in store.dropdowncontents" :key="idxDropdownHeader">
                <a href="#">{{ dropdownContent }}</a>
              </li>
            </ul>

          </div>
        </li>

      </ul>

      <!-- SECONDA COMPONENTE DELL'HEADER / IMMAGINE LOGO CENTRALE -->
      <div class="logo">

        <a href="#">
          <img :src="store.headerLogo" alt="logo">
        </a>

      </div>

      <!-- ULTIMA COMPONENTE HEADER / BARRA DI RICERCA -->
      <div class="search">

        <!-- ICONA CARRELLO -->
        <i class="fa-solid fa-cart-shopping circle_container" style="color: #000000;">
          <span class="circle">0</span>
        </i>

        <!-- ICONA PROFILO UTENTE -->
        <i class="fa-regular fa-circle-user" style="color: #000000;"></i>

        <!-- BARRA DI RICERCA -->
        <form >

          <input placeholder="Search..." type="search">
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>

        </form>

      </div>

    </nav>

    <!-- HERO -->
    <div class="hero">

      <!-- TITOLI E BOTTONE CENTRALE -->
      <div class="center-text">

        <strong>Commence business</strong>
        <h1>Distant Mentoring Program</h1>

        <button>

          <a href="#">Download free guidebook
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </button>

      </div>

      <!-- BARRA LATERALE CON ICONE/BOTTONI -->
      <aside>

        <a href="#">
          <i class="fa-solid fa-ruler-combined"></i>
        </a>

        <a href="#">
          <i class="fa-regular fa-futbol"></i>
        </a>

        <a href="#">
          <i class="fa-solid fa-book"></i>
        </a>

        <a href="#">
          <i class="fa-solid fa-cart-shopping"></i>
        </a>

      </aside>

    </div>

  </header>

</template>

<style scoped lang="scss">
@use './../styles/partials/variables.scss' as *;

// DROPDOWN STYLES
.dropdown {
  position: relative;
  display: inline-block;
  height: 100%;

}

.dropdown-content {
  display: none;
  position: absolute;
  bottom: -600px;
  left: -20px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  border-bottom: 5px solid $verde-acqua;

  li{
    padding: 15px 10px;
  }
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .active-menu{
  color: $verde-acqua;
  border-bottom: 2px solid $verde-acqua;
}

// HEADER STYLE
  header{
    background-color: white;

    .container{
      height: 80px;
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .menu {
        height: 100%;
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        flex-basis: 580px;
        font-weight: 400;

        li{
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 15px;

          i{
            font-size: 8px;
          }
        }
      }

      .logo{
        width: 30%;

        img{
          width: 180px;
        }
      }

      .search{
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-basis: 400px;
        
        i{
          cursor: pointer;
          font-size: 18px;

        }
        .circle_container{
          position: relative;
          .circle{
            position: absolute;
            top: -14px;
            right: -14px;
            width: 20px;
            height: 20px;
            border-radius: 25px;
            background: $verde-acqua;
            color: white;
            font-size: 10px;
            display: flex;justify-content: center;
            align-items: center;
          }
        }
        form{
          display: flex;
          justify-content: space-between;
          height: 45px;
          width: 280px;
          background-color: #F5F7FA;
          border-radius: 10px;

          input{
          background-color: #F5F7FA;
          border: none;
          border-radius: 10px;
          outline: none;
          text-indent: 20px;
          }

          ::placeholder {
          font-size: 14px;
          }

          button{
            color: $verde-acqua;
            background-color: #F5F7FA;
            border: none;
            border-top-right-radius: 10px;
            border-end-end-radius: 10px;
            font-size: 15px;
            padding-right: 15px;
          }

        }
      }
    }

    .hero{
      width: 100%;
      height: 650px;
      background-image: url(./../../public/images/home-3-hero-bg.jpg);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .center-text{
        text-align: center;
        color: white;
        font-size: 28px;

        h1{
          font-weight: 500;
        }

        button {
          height: 55px;
          min-width: 280px;
          padding: 10px;
          border: none;
          border-radius: 8px;
          background-color: white;
          margin-top: 20px;
          
          a{
            color: $verde-acqua;
            font-weight: 700;

            i{
              color: $verde-acqua;
            }
          }
        }
        button:hover{
          background-color: $verde-acqua;
          a{
            color: white;
            i{
              color: white;
            }
          }

        }
      }

      aside{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;

        height: 170px;
        width: 45px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        justify-content: space-around;
        position: absolute;
        right: 0;
        top: 100px;

        i{
          color: $grigio;
        }
      }
    }
  }
</style>        