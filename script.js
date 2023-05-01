const characterBox = document.getElementById('character-box')
const lookUpItem = document.getElementById('lookup-item')
const searchButton = document.getElementById('search-button')




searchButton.addEventListener('click', event => {
      let lookUp = lookUpItem.value
      lookUpItem.value = ''

      
      let receivedPromise = fetch(`https://swapi.dev/api/people/?search=${lookUp}`)
      let receivedPromise2 = fetch(`https://swapi.dev/api/planets/?search=${lookUp}`)
      let receivedPromise3 = fetch(`https://swapi.dev/api/starships/?search=${lookUp}`)

      receivedPromise.then(response => {
         return response.json()
      }).then(json => {
         fillCharacterBox(json,lookUp)
      })

      receivedPromise2.then(response => {
         return response.json()
      }).then(json => {
         fillCharacterBox(json,lookUp)
      })

      receivedPromise3.then(response => {
         return response.json()
      }).then(json => {
         fillCharacterBox(json,lookUp)
      })

})





const fillCharacterBox = (json, lookUp) => {
         characterBox.innerHTML=''

         let label = document.createElement('h3')
         label.textContent = lookUp
         characterBox.append(label)

         

         let resultName = json.results[0].name
         let name = document.createElement('li')
         name.className = 'character-box'
         name.innerHTML = `<strong>Name:</strong> ${resultName}`
         characterBox.append(name)

         if(json.results[0].height) {

               let resultHeight = json.results[0].height 
               let height = document.createElement('li')
               height.className = 'character-box'
               height.innerHTML = `<strong>Height:</strong> ${resultHeight}`
               characterBox.append(height)

               let resultMass = json.results[0].mass
               let mass = document.createElement('li')
               mass.className = 'character-box'
               mass.innerHTML = `<strong>Mass:</strong> ${resultMass}`
               characterBox.append(mass)
               
               let resultHairColor = json.results[0].hair_color
               let hairColor = document.createElement('li')
               hairColor.className = 'character-box'
               hairColor.innerHTML = `<strong>Hair color:</strong> ${resultHairColor}`
               characterBox.append(hairColor)
               
               let resultSkinColor = json.results[0].skin_color
               let skinColor = document.createElement('li')
               skinColor.className = 'character-box'
               skinColor.innerHTML = `<strong>Skin-Color:</strong> ${resultSkinColor}`
               characterBox.append(skinColor)

               let resultEyeColor = json.results[0].eye_color
               let eyeColor = document.createElement('li')
               eyeColor.className = 'character-box'
               eyeColor.innerHTML = `<strong>Eye-Color:</strong> ${resultEyeColor}`
               characterBox.append(eyeColor)

               let resultBirthYear = json.results[0].birth_year
               let birthYear = document.createElement('li')
               birthYear.className = 'character-box'
               birthYear.innerHTML = `<strong>Birth-Year:</strong> ${resultBirthYear}`
               characterBox.append(birthYear)

               
               let resultGender = json.results[0].gender 
               let gender = document.createElement('li')
               gender.className = 'character-box'
               gender.innerHTML = `<strong>Gender:</strong> ${resultGender}`
               characterBox.append(gender)

               let resultHomeWorld = json.results[0].homeworld 
               let homeWorld = document.createElement('li')
               homeWorld.className = 'character-box'
               homeWorld.innerHTML = `<strong>Homeworld:</strong> ${resultHomeWorld}`
               characterBox.append(homeWorld)
         }


    //This part specifies on planets
  
      if(json.results[0].rotation_period) {
         
         let resultRotationPeriod = json.results[0].rotation_period
         let rotationPeriod = document.createElement('li')
         rotationPeriod.className = 'character-box'
         rotationPeriod.innerHTML = `<strong>Rotation-Period:</strong> ${resultRotationPeriod}`
         characterBox.append(rotationPeriod)


         let resultOrbitalPeriod = json.results[0].orbital_period
         let orbitalPeriod = document.createElement('li')
         orbitalPeriod.className = 'character-box'
         orbitalPeriod.innerHTML = `<strong>Orbital-Period:</strong> ${resultOrbitalPeriod}`
         characterBox.append(orbitalPeriod)


         let resultDiameter = json.results[0].diameter 
         let diameter = document.createElement('li')
         diameter.className = 'character-box'
         diameter.innerHTML = `<strong>Diameter:</strong> ${resultDiameter}`
         characterBox.append(diameter)

         let resultClimate = json.results[0].climate 
         let climate = document.createElement('li')
         climate.className = 'character-box'
         climate.innerHTML = `<strong>Climate:</strong> ${resultClimate}`
         characterBox.append(climate)

         let resultGravity = json.results[0].gravity
         let gravity = document.createElement('li')
         gravity.className = 'character-box'
         gravity.innerHTML = `<strong>Gravity:</strong> ${resultGravity}`
         characterBox.append(gravity)

         let resultTerrain = json.results[0].terrain
         let terrain = document.createElement('li')
         terrain.className = 'character-box'
         terrain.innerHTML = `<strong>Terrain:</strong> ${resultTerrain}`
         characterBox.append(terrain)

         let resultSurfaceWater = json.results[0].surface_water 
         let surfaceWater = document.createElement('li')
         surfaceWater.className = 'character-box'
         surfaceWater.innerHTML = `<strong>Surface-Water:</strong> ${resultSurfaceWater}`
         characterBox.append(surfaceWater)

         let resultPopulation = json.results[0].population
         let population = document.createElement('li')
         population.className = 'character-box'
         population .innerHTML = `<strong>Population:</strong> ${resultPopulation}`
         characterBox.append(population)
    
      }
    //this part specifies on starships
   
        if(json.results[0].model) { 
            let resultManufacturer = json.results[0].manufacturer
               let manufacturer = document.createElement('li')
               manufacturer.className = 'character-box'
               manufacturer.innerHTML = `<strong>Manufacturer:</strong> ${resultManufacturer}`
               characterBox.append(manufacturer)

               let resultModel = json.results[0].model
               let model = document.createElement('li')
               model.className = 'character-box'
               model.innerHTML = `<strong>Model:</strong> ${resultModel}`
               characterBox.append(model)
        }

    console.log(json.results[0].manufacturer)
}
