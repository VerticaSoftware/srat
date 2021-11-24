declare const google: any

export default {

  initFunctions: () => {

    window.onload = () => {

      const checkboxes = document.querySelectorAll('.checkbox input[type="checkbox"]') as NodeListOf<HTMLElement>
      checkboxes.forEach((checkbox: HTMLElement) => {
        checkbox.addEventListener('change', e => {
          const t = e.target as HTMLInputElement
          const parent = t.closest('.checkbox')
          const icon = parent?.querySelector('.checkbox__icon')
          if(t.checked) {
            parent?.classList.add('checkbox--checked')
            icon?.classList.remove('far', 'fa-square')
            icon?.classList.add('fas', 'fa-check-square')
          }
          else {
            parent?.classList.remove('checkbox--checked')
            icon?.classList.remove('fas', 'fa-check-square')
            icon?.classList.add('far', 'fa-square')
          }
        })
      })
      
    }
    
  },

  regexPatterns: {
    username: new RegExp(/^[a-zA-ZÁ-Úá-úñÑ0-9]+$/),
    password: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  },

  setupGoogleMaps: () => {

    let map
    function initMap() {
      const mapTag = document.getElementById('map') as HTMLElement
      map = new google.maps.Map(mapTag, {
        center: { lat: -12.0111057, lng: -76.8511632 },
        zoom: 8
      })
    }

    const googleScript = document.createElement('script')
    googleScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDJACT1wWt0SCaSX3WslI6jebIFh17lkA4')
    document.body.appendChild(googleScript)

    window.onload = initMap
    
  }
  
}