<template>
  <header class="header">
    <div class="brand">
      <img src="@/assets/images/logo.png" width="200" alt="MTC">
      <h1 class="brand__name">Agentes SRAT</h1>
    </div>
    <div class="user">
      <p>
        <span class="user__name">Mario Dominguez</span>
        <span class="user__role">Administrador</span>
      </p>
      <p class="user__letters">MD</p>
    </div>
  </header>
  <main>
    <div class="aside">
      <div class="filters">
        <p class="filters__title">
          <span>Filtros</span>
          <button class="filters__clean" type="button">Limpiar <i class="fas fa-times"></i></button>
        </p>
        <div class="filter">
          <p class="filter__name"><i class="fas fa-calendar-week"></i>Fecha de &uacute;ltimo registro</p>
          <div class="filter__options">
            <button class="button button--outlined button--selected" type="button">Hoy</button>
            <button class="button button--outlined" type="button">Semana</button>
            <button class="button button--outlined" type="button">Mes</button>
          </div>
        </div>
        <div class="filter">
          <p class="filter__name"><i class="fas fa-building"></i>Tipo de establecimiento</p>
          <div class="filter__options">
            <button class="button button--outlined button--selected" type="button">Comisar&iacute;a</button>
            <button class="button button--outlined" type="button">UPIAT</button>
          </div>
        </div>
        <div class="filter">
          <div class="filter__name">Establecimiento</div>
          <input class="textfield__input" type="text">
        </div>
        <div class="filter">
          <div class="filter__name">Agente</div>
          <input class="textfield__input" type="text">
        </div>
      </div>
      <button class="logout" @click="logout" type="button"><i class="fas fa-sign-out-alt"></i> Cerrar sesi&oacute;n</button>
    </div>
    <div id="map">

    </div>
  </main>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  height: 85px;
}

.brand {
  display: flex;
  align-items: center;
  grid-gap: 20px;
}

.brand__name {
  color: var(--primaryColor);
  font-size: 28px;
}

.user {
  display: flex;
  align-items: center;
  grid-gap: 15px;
  text-align: right;
}

.user__name {
  font-weight: 500;
  display: block;
}

.user__role {
  font-size: 14px;
  color: #8F8F8F;
  font-weight: 300;
}

.user__letters {
  display: inline-block;
  line-height: 46px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid var(--primaryColor);
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--primaryColor);
}

main {
  display: flex;
  align-items: flex-start;
  grid-gap: 30px;
  height: calc(100vh - 85px);
  padding: 30px;
}

.aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: inherit;
  height: 100%;
  overflow: auto;
}

.filters {
  width: 370px;
}

.filters__title {
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
  padding: 15px 0;
  margin-bottom: 30px;
}

.filters__clean {
  color: var(--primaryColor);
  font-weight: 14px;
}

.filters__clean .fas {
  color: inherit;
  vertical-align: middle;
  display: inline-block;
  margin-left: 3px;
}

.filter { margin-bottom: 30px; }

.filter__name {
  color: #8F8F8F;
  font-weight: 300;
  margin-bottom: 5px;
}

.filter__name .fas {
  color: #d1d1d1;
  display: inline-block;
  margin-right: 5px;
}

.filter__options {
  display: flex;
  margin-top: 15px;
  grid-gap: 5px;
}

.logout {
  display: inline-block;
  width: auto;
  color: var(--primaryColor);
  font-size: 16px;
}

.logout .fas {
  color: inherit;
  display: inline-block;
  margin-right: 3px;
}

#map {
  width: calc(100% - 400px);
  border-radius: 20px;
  background-color: #c0c0c0;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
  min-height: 100%;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

declare const mapboxgl: any

export default class Dashboard extends Vue {

  mounted() {
    this.setupMapbox()
  }

  setupMapbox() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FzYW52IiwiYSI6ImNrdWlxc2t6ZjAxcGwyd21ieHU4ZTY3aTMifQ.xMwwaLvLd_6Co0YDLw9HNA'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/gasanv/ckuis4lpc0taf17rz9t089oel',
      center: [-77.06770111006696, -11.997474439578207],
      zoom: 14
    })

    const places = [ [-77.0627119156696, -11.98990239079675], [-77.06072267334095, -12.006371261880377], [-77.06119598683394, -11.993943942280948] ]
    places.forEach((place: any) => {
      const marker = new mapboxgl.Marker({color: '#F23D52', scale: 1.4})
        .setLngLat(place)
        .addTo(map)
    })
  }

  logout() {
    this.$router.push('/login')
  }

}
</script>