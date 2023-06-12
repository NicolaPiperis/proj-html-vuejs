<script>
  export default {
    name : "PageHeader"
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

        <li>

          <a href="#">Home</a>
          <a href="#">
            <i class="fa-solid fa-chevron-down" style="color: #000000;"></i>
          </a>
          

        </li>

        <li>

          <a href="#">Page</a>
          <a href="#">
            <i class="fa-solid fa-chevron-down" style="color: #000000;"></i>
          </a>

        </li>

        <li>

          <a href="#">Courses</a>
          <a href="#">
            <i class="fa-solid fa-chevron-down" style="color: #000000;"></i>
          </a>

        </li>

        <li>

          <a href="#">Features</a>
          <a href="#">
            <i class="fa-solid fa-chevron-down" style="color: #000000;"></i>
          </a>

        </li>

        <li>

          <a href="#">Blog</a>
          <a href="#">
            <i class="fa-solid fa-chevron-down" style="color: #000000;"></i>
          </a>

        </li>

        <li>

          <a href="#">Shop</a>
          <a href="#">
            <i class="fa-solid fa-chevron-down" style="color: #000000;"></i>
          </a>

        </li>

      </ul>

      <!-- SECONDA COMPONENTE DELL'HEADER / IMMAGINE LOGO CENTRALE -->
      <div class="logo">

        <a href="#">
          <img src="./../../public/images/dark-logo.png" alt="logo">
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

  </header>

</template>

<style scoped lang="scss">
  header{
    background-color: white;
    height: 80px;

    .container{
      height: 100%;
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
            background: #20AD96;
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
            color: #20AD96;
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
  }
</style>        